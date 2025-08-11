'use client'
import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, Tag, Search, Filter, Leaf, ArrowRight, Share2, Heart, MessageCircle, BookOpen, TrendingUp, Eye } from 'lucide-react';
const mockPosts = [
  {
    id: "sustainable-living-guide",
    title: "The Complete Guide to Sustainable Living in 2024",
    content: `<div class="prose">
      <p>Sustainable living isn't just a trend—it's a necessity for our planet's future. In this comprehensive guide, we'll explore practical ways to reduce your environmental footprint while maintaining a fulfilling lifestyle.</p>
      
      <h2>Why Sustainable Living Matters</h2>
      <p>Climate change, resource depletion, and environmental degradation are pressing challenges that require immediate action. By adopting sustainable practices, individuals can make a significant collective impact.</p>
      
      <h2>Getting Started: Simple Changes</h2>
      <ul>
        <li>Reduce single-use plastics by carrying reusable bags and water bottles</li>
        <li>Switch to energy-efficient LED bulbs throughout your home</li>
        <li>Start composting organic waste to reduce landfill contribution</li>
        <li>Use public transportation or bike instead of driving when possible</li>
      </ul>
      
      <h2>Advanced Sustainable Practices</h2>
      <p>Once you've mastered the basics, consider implementing these more advanced strategies...</p>
      
      <blockquote>
        "The Earth does not belong to us; we belong to the Earth. All things are connected like the blood that unites one family." - Chief Seattle
      </blockquote>
      
      <p>Remember, sustainable living is a journey, not a destination. Every small step counts toward creating a better world for future generations.</p>
    </div>`,
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
    authorID: "Dr. Sarah Green",
    authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=100&h=100&fit=crop&crop=face",
    publishDate: "2024-03-15",
    readTime: "8 min read",
    category: "Sustainable Living",
    tags: ["sustainability", "environment", "lifestyle", "green-living"],
    excerpt: "Discover practical ways to live more sustainably and reduce your environmental impact with this comprehensive guide.",
    views: 2847,
    likes: 156,
    comments: 23
  },
  {
    id: "renewable-energy-future",
    title: "Renewable Energy: Powering Tomorrow's World",
    content: `<div class="prose">
      <p>The future of energy is renewable, and it's arriving faster than we ever imagined. Solar, wind, and other clean energy sources are revolutionizing how we power our world.</p>
      
      <h2>The Renewable Revolution</h2>
      <p>In the past decade, renewable energy costs have plummeted while efficiency has soared. Solar panels are now cheaper than fossil fuels in many regions.</p>
      
      <h2>Types of Renewable Energy</h2>
      <ul>
        <li><strong>Solar Power:</strong> Harnessing the sun's energy through photovoltaic cells</li>
        <li><strong>Wind Energy:</strong> Converting wind motion into electricity</li>
        <li><strong>Hydroelectric:</strong> Using flowing water to generate power</li>
        <li><strong>Geothermal:</strong> Tapping into Earth's natural heat</li>
      </ul>
      
      <p>The transition to renewable energy isn't just about environmental benefits—it's also creating millions of jobs and driving economic growth worldwide.</p>
    </div>`,
    thumbnail: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=400&fit=crop",
    authorID: "Michael Chen",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    publishDate: "2024-03-12",
    readTime: "6 min read",
    category: "Renewable Energy",
    tags: ["renewable-energy", "solar", "wind", "sustainability"],
    excerpt: "Explore how renewable energy technologies are transforming our world and creating a cleaner, more sustainable future.",
    views: 1923,
    likes: 89,
    comments: 17
  },
  {
    id: "ocean-conservation-efforts",
    title: "Ocean Conservation: Protecting Our Blue Planet",
    content: `<div class="prose">
      <p>Our oceans are in crisis. From plastic pollution to coral bleaching, marine ecosystems face unprecedented threats. But there's hope—conservation efforts worldwide are making a difference.</p>
      
      <h2>The Ocean Crisis</h2>
      <p>Every year, millions of tons of plastic enter our oceans, while rising temperatures cause coral reefs to bleach and die. Overfishing depletes marine populations faster than they can recover.</p>
      
      <h2>Conservation Success Stories</h2>
      <p>Despite the challenges, remarkable conservation efforts are showing positive results...</p>
      
      <h2>How You Can Help</h2>
      <ul>
        <li>Reduce plastic consumption and properly dispose of waste</li>
        <li>Choose sustainable seafood options</li>
        <li>Support ocean conservation organizations</li>
        <li>Participate in beach cleanup events</li>
      </ul>
      
      <p>The ocean's health is directly linked to our planet's wellbeing. By taking action now, we can preserve these vital ecosystems for future generations.</p>
    </div>`,
    thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
    authorID: "Dr. Marina Blue",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    publishDate: "2024-03-10",
    readTime: "7 min read",
    category: "Ocean Conservation",
    tags: ["ocean", "conservation", "marine-life", "environment"],
    excerpt: "Learn about the critical importance of ocean conservation and discover how you can contribute to protecting our marine ecosystems.",
    views: 3156,
    likes: 203,
    comments: 31
  }
];


const BlogList = () => {
  const [posts] = useState(mockPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const categories = ['All', ...new Set(posts.map(post => post.category))];

  useEffect(() => {
    let filtered = posts;
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, posts]);

  const PostCard = ({ post }) => (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.thumbnail} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye size={14} />
            <span>{post.views}</span>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 mb-3 line-clamp-2">
          {post.title}
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={post.authorAvatar} 
              alt={post.authorID}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-700">{post.authorID}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-gray-400">
            <div className="flex items-center space-x-1">
              <Heart size={16} />
              <span className="text-sm">{post.likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle size={16} />
              <span className="text-sm">{post.comments}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.slice(0, 3).map(tag => (
            <span key={tag} className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-xs">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-8 pt-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 px-4 py-2 rounded-full mb-6">
              <BookOpen className="text-emerald-600" size={20} />
              <span className="text-emerald-700 font-semibold">Environmental Blog</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Green Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover the latest insights, research, and stories about environmental conservation, 
              sustainability, and our planet's future.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-emerald-600" size={20} />
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-emerald-500 text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Stats */}
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
            <div className="text-gray-600">Articles Published</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">25K+</div>
            <div className="text-gray-600">Monthly Readers</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">100+</div>
            <div className="text-gray-600">Expert Contributors</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">15</div>
            <div className="text-gray-600">Countries Reached</div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-12 text-white text-center">
          <Leaf className="mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-emerald-100 mb-6 text-lg max-w-2xl mx-auto">
            Get the latest environmental news, tips, and insights delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-xl text-gray-800 flex-1"
            />
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors duration-300 flex items-center justify-center space-x-2">
              <span>Subscribe</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogList