
import { useState, useEffect } from 'react';
import { Star, ExternalLink, RefreshCw, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface PlaceDetails {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
  place_id: string;
  url: string;
}

const GoogleReviews = () => {
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [placeId, setPlaceId] = useState('ChIJz8EfYOuM1ToR-GTFSxahWvk'); // Dr. Namratha's Place ID
  const { toast } = useToast();

  useEffect(() => {
    // Auto-load reviews when component mounts
    fetchGoogleReviews(placeId);
  }, []);

  const fetchGoogleReviews = async (googlePlaceId: string) => {
    if (!googlePlaceId) {
      toast({
        variant: "destructive",
        title: "Configuration Required",
        description: "Please configure your Google Place ID first",
      });
      return;
    }

    setLoading(true);
    try {
      console.log('Fetching Google reviews for Place ID:', googlePlaceId);
      
      const { data, error } = await supabase.functions.invoke('google-reviews', {
        body: { placeId: googlePlaceId }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('Google Reviews data received:', data);
      setPlaceDetails(data);
      
      toast({
        title: "Reviews Updated",
        description: `Loaded ${data.reviews?.length || 0} Google reviews`,
      });
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load Google reviews. Please check your configuration and API key.",
      });
    } finally {
      setLoading(false);
    }
  };

  const savePlaceId = async () => {
    if (!placeId.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid Google Place ID",
      });
      return;
    }

    localStorage.setItem('google_place_id', placeId);
    setShowSettings(false);
    await fetchGoogleReviews(placeId);
    
    toast({
      title: "Configuration Saved",
      description: "Google Place ID saved successfully",
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  if (showSettings) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="medical-card p-8">
              <div className="text-center mb-8">
                <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Configure Google Reviews Feed
                </h3>
                <p className="text-muted-foreground">
                  Enter your Google Place ID to display reviews from Google My Business
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Google Place ID
                  </label>
                  <input
                    type="text"
                    value={placeId}
                    onChange={(e) => setPlaceId(e.target.value)}
                    className="medical-input"
                    placeholder="Enter your Google Place ID..."
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Find your Place ID using Google's Place ID Finder tool
                  </p>
                </div>

                <div className="medical-card bg-muted/50 p-4">
                  <h4 className="font-semibold mb-2">How to get your Google Place ID:</h4>
                  <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                    <li>Go to Google's Place ID Finder</li>
                    <li>Search for your business</li>
                    <li>Click on your business location</li>
                    <li>Copy the Place ID from the results</li>
                  </ol>
                </div>

                <div className="flex gap-3">
                  <button onClick={savePlaceId} className="medical-button flex-1">
                    Save Configuration
                  </button>
                  <button 
                    onClick={() => setShowSettings(false)} 
                    className="medical-button-outline flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="medical-card p-8">
              <div className="animate-spin rounded-full h-16 w-16 border-2 border-muted border-t-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading Google reviews...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!placeDetails || !placeDetails.reviews || placeDetails.reviews.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="medical-card p-8">
              <Star className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Loading Reviews...
              </h3>
              <p className="text-muted-foreground mb-6">
                We're fetching the latest Google reviews for Dr. Namratha's practice.
              </p>
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={() => fetchGoogleReviews(placeId)} 
                  className="medical-button-outline"
                  disabled={loading}
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Retry
                </button>
                <button 
                  onClick={() => setShowSettings(true)} 
                  className="medical-button"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="medical-card p-8 mb-8">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl font-heading font-bold mb-4">
                {placeDetails.name} Reviews
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {renderStars(Math.round(placeDetails.rating))}
                  </div>
                  <span className="font-semibold text-lg">
                    {placeDetails.rating.toFixed(1)}
                  </span>
                </div>
                <span className="text-muted-foreground">
                  ({placeDetails.user_ratings_total.toLocaleString()} reviews)
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                Read what our patients say about their experience with our oncology care
              </p>
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={() => fetchGoogleReviews(placeId)} 
                  className="medical-button-outline"
                  disabled={loading}
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh Reviews
                </button>
                <button 
                  onClick={() => setShowSettings(true)} 
                  className="medical-button-outline"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {placeDetails.reviews.slice(0, 6).map((review, index) => (
              <div key={index} className="medical-card p-6 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  {review.profile_photo_url ? (
                    <img 
                      src={review.profile_photo_url} 
                      alt={review.author_name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">
                        {review.author_name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{review.author_name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {review.relative_time_description}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {truncateText(review.text)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <a 
              href={placeDetails.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="medical-button inline-flex items-center"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View All Reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
