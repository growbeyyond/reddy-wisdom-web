import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { 
  Instagram, 
  Play, 
  Heart, 
  MessageCircle, 
  Share2, 
  ExternalLink,
  Settings,
  RefreshCw
} from 'lucide-react';

interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  caption: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const { toast } = useToast();

  // Load access token from localStorage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem('instagram_access_token');
    if (storedToken) {
      setAccessToken(storedToken);
      fetchInstagramPosts(storedToken);
    }
  }, []);

  const fetchInstagramPosts = async (token: string) => {
    if (!token) {
      toast({
        title: "Error",
        description: "Please configure your Instagram access token first",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      // Instagram Basic Display API endpoint
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption,permalink,timestamp&access_token=${token}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch Instagram posts');
      }

      const data = await response.json();
      setPosts(data.data || []);
      
      toast({
        title: "Success",
        description: `Loaded ${data.data?.length || 0} Instagram posts`,
      });
    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
      toast({
        title: "Error",
        description: "Failed to load Instagram posts. Please check your access token.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const saveAccessToken = () => {
    if (!accessToken.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid access token",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem('instagram_access_token', accessToken);
    setShowSettings(false);
    fetchInstagramPosts(accessToken);
    
    toast({
      title: "Success",
      description: "Instagram access token saved successfully",
    });
  };

  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  const truncateCaption = (caption: string, maxLength: number = 100) => {
    if (!caption) return '';
    return caption.length > maxLength ? caption.substring(0, maxLength) + '...' : caption;
  };

  if (showSettings) {
    return (
      <section className="section-padding bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
        <div className="max-w-4xl mx-auto">
          <Card className="medical-card">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Instagram className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Configure Instagram Feed
                </h3>
                <p className="text-muted-foreground">
                  Enter your Instagram Basic Display API access token to display your posts
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Instagram Access Token
                  </label>
                  <Input
                    type="password"
                    placeholder="Enter your Instagram access token..."
                    value={accessToken}
                    onChange={(e) => setAccessToken(e.target.value)}
                    className="w-full"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Get your access token from the Instagram Basic Display API
                  </p>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button onClick={saveAccessToken} className="bg-pink-500 hover:bg-pink-600">
                    Save & Load Posts
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowSettings(false)}
                  >
                    Cancel
                  </Button>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    How to get your Instagram Access Token:
                  </h4>
                  <ol className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-decimal list-inside">
                    <li>Create a Facebook App at developers.facebook.com</li>
                    <li>Add Instagram Basic Display to your app</li>
                    <li>Configure Instagram Basic Display settings</li>
                    <li>Generate a User Access Token</li>
                    <li>Copy and paste the token above</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-pink-500" />
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Follow Our Cancer Care Journey
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Stay connected with daily updates, patient stories, and educational content from our Instagram
          </p>
          
          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => fetchInstagramPosts(accessToken)} 
              disabled={loading || !accessToken}
              variant="outline"
              size="sm"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh Posts
            </Button>
            <Button 
              onClick={() => setShowSettings(true)}
              variant="outline"
              size="sm"
            >
              <Settings className="h-4 w-4 mr-2" />
              Configure
            </Button>
          </div>
        </div>

        {!accessToken && (
          <div className="text-center py-12">
            <Instagram className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Instagram Feed Not Configured
            </h3>
            <p className="text-muted-foreground mb-4">
              Configure your Instagram access token to display posts and reels
            </p>
            <Button onClick={() => setShowSettings(true)} className="bg-pink-500 hover:bg-pink-600">
              <Settings className="h-4 w-4 mr-2" />
              Setup Instagram Feed
            </Button>
          </div>
        )}

        {accessToken && posts.length === 0 && !loading && (
          <div className="text-center py-12">
            <Instagram className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No Posts Found
            </h3>
            <p className="text-muted-foreground mb-4">
              Unable to load Instagram posts. Please check your access token.
            </p>
            <Button onClick={() => setShowSettings(true)} variant="outline">
              Check Configuration
            </Button>
          </div>
        )}

        {loading && (
          <div className="text-center py-12">
            <RefreshCw className="h-8 w-8 text-primary mx-auto mb-4 animate-spin" />
            <p className="text-muted-foreground">Loading Instagram posts...</p>
          </div>
        )}

        {posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(0, 6).map((post) => (
              <Card key={post.id} className="medical-card group overflow-hidden">
                <div className="relative">
                  {post.media_type === 'VIDEO' ? (
                    <div className="relative">
                      <img 
                        src={post.thumbnail_url || post.media_url} 
                        alt="Instagram post"
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="bg-white/90 p-3 rounded-full">
                          <Play className="h-6 w-6 text-gray-800" />
                        </div>
                      </div>
                      <Badge variant="secondary" className="absolute top-3 left-3">
                        Video
                      </Badge>
                    </div>
                  ) : (
                    <div className="relative">
                      <img 
                        src={post.media_url} 
                        alt="Instagram post"
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {post.media_type === 'CAROUSEL_ALBUM' && (
                        <Badge variant="secondary" className="absolute top-3 left-3">
                          Album
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                    {truncateCaption(post.caption)}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span>{formatTimeAgo(post.timestamp)}</span>
                    <div className="flex items-center gap-3">
                      {post.like_count && (
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {post.like_count}
                        </span>
                      )}
                      {post.comments_count && (
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />
                          {post.comments_count}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <a 
                    href={post.permalink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-pink-500 group-hover:text-white transition-colors">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      View on Instagram
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {posts.length > 6 && (
          <div className="text-center mt-8">
            <a 
              href="https://www.instagram.com/your_instagram_handle" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="default" size="lg" className="bg-pink-500 hover:bg-pink-600">
                <Instagram className="h-5 w-5 mr-2" />
                Follow Us on Instagram
              </Button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramFeed;