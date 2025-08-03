import { corsHeaders } from '../_shared/cors.ts';

const GOOGLE_API_KEY = Deno.env.get('GOOGLE_PLACES_API_KEY');

interface GooglePlaceDetailsResponse {
  result: {
    name: string;
    rating: number;
    user_ratings_total: number;
    reviews: Array<{
      author_name: string;
      author_url?: string;
      profile_photo_url?: string;
      rating: number;
      relative_time_description: string;
      text: string;
      time: number;
    }>;
    place_id: string;
    url: string;
  };
  status: string;
}

Deno.serve(async (req) => {
  console.log('Google Reviews function called');

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!GOOGLE_API_KEY) {
      console.error('Missing GOOGLE_PLACES_API_KEY environment variable');
      return new Response(
        JSON.stringify({ 
          error: 'Google Places API key not configured. Please configure GOOGLE_PLACES_API_KEY in Supabase secrets.' 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const { placeId } = await req.json();
    
    if (!placeId) {
      console.error('Missing placeId in request');
      return new Response(
        JSON.stringify({ error: 'Place ID is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log(`Fetching reviews for place ID: ${placeId}`);

    // Google Places API Details endpoint
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews,place_id,url&key=${GOOGLE_API_KEY}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error(`Google API request failed: ${response.status} ${response.statusText}`);
      throw new Error(`Google API request failed: ${response.status}`);
    }

    const data: GooglePlaceDetailsResponse = await response.json();
    
    console.log(`Google API response status: ${data.status}`);

    if (data.status !== 'OK') {
      console.error(`Google API error: ${data.status}`);
      return new Response(
        JSON.stringify({ 
          error: `Google Places API error: ${data.status}`,
          details: data.status === 'INVALID_REQUEST' ? 'Invalid Place ID' : 'API request failed'
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Log successful response
    console.log(`Successfully fetched ${data.result.reviews?.length || 0} reviews for ${data.result.name}`);

    return new Response(
      JSON.stringify(data.result),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in google-reviews function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch Google reviews',
        message: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});