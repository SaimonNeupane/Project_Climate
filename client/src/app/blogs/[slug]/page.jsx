
'use client'
import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, Tag, Search, Filter, Leaf, ArrowRight, Share2, Heart, MessageCircle, BookOpen, TrendingUp, Eye } from 'lucide-react';

const BlogPost = ({ params }) => {
  const { slug } = params;
  const post = mockPosts.find(p => p.id === slug);
  const [liked, setLiked] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🌿</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <button className="bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-600 transition-colors">
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      <div className="max-w-4xl mx-auto px-8 pt-32 pb-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Blog</span>
            <ArrowRight size={14} />
            <span>{post.category}</span>
            <ArrowRight size={14} />
            <span className="text-emerald-600">{post.title}</span>
          </div>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 px-3 py-1 rounded-full mb-4">
            <Tag className="text-emerald-600" size={16} />
            <span className="text-emerald-700 font-semibold text-sm">{post.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center space-x-2">
              <img 
                src={post.authorAvatar} 
                alt={post.authorID}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-800">{post.authorID}</div>
                <div className="text-sm">{new Date(post.publishDate).toLocaleDateString()}</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye size={16} />
                <span>{post.views} views</span>
              </div>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center space-x-4 pb-6 border-b border-gray-200">
            <button 
              onClick={() => setLiked(!liked)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-colors ${
                liked ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
              <span>{post.likes + (liked ? 1 : 0)}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
              <Share2 size={18} />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
              <MessageCircle size={18} />
              <span>{post.comments}</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-3xl overflow-hidden shadow-lg">
          <img 
            src={post.thumbnail} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-8">
          <div 
            className="prose prose-lg max-w-none prose-emerald prose-headings:text-gray-800 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-emerald-600 prose-strong:text-gray-800 prose-ul:text-gray-700 prose-blockquote:border-emerald-500 prose-blockquote:text-emerald-800 prose-blockquote:bg-emerald-50 prose-blockquote:p-4 prose-blockquote:rounded-lg"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>

        {/* Tags */}
        <div className="mb-8">
          <h3 className="font-semibold text-gray-800 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm hover:bg-emerald-200 transition-colors cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-start space-x-4">
            <img 
              src={post.authorAvatar} 
              alt={post.authorID}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{post.authorID}</h3>
              <p className="text-gray-600 leading-relaxed">
                Environmental scientist and sustainability advocate with over 10 years of experience in climate research and conservation initiatives. Passionate about making environmental science accessible to everyone.
              </p>
              <div className="flex space-x-4 mt-4">
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">Follow</button>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">More Articles</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// Export both components
export { BlogList, BlogPost };