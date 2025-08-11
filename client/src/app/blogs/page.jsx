// 'use client'
// import React, { useState, useEffect } from 'react';
// import { Calendar, Clock, BookOpen, User, ArrowLeft, Share2, Download, Heart, MessageCircle, Eye, Tag, Search, Filter, Mail, ChevronRight,Leaf,ArrowRight, Facebook, Twitter, Linkedin, Copy, ThumbsUp, Bookmark } from 'lucide-react';

// // Extended blog data with detailed content
// const blogData = {
//   posts: [
//     {
//       id: "climate-action-youth-nepal-2024",
//       slug: "climate-action-youth-nepal-2024",
//       title: "Empowering Youth for Climate Action in Nepal: A Path Forward",
//       excerpt: "Exploring how young Nepalese climate activists are driving change in their communities through innovative grassroots initiatives and sustainable practices.",
//       thumbnail: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=600&h=400&fit=crop",
//       category: "Climate Action",
//       publishDate: "2024-11-15",
//       readTime: "8 min read",
//       authorID: "Bibek Khanal",
//       authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//       authorBio: "Environmental researcher and climate advocate with over 5 years of experience in community-based climate action programs across Nepal.",
//       tags: ["youth", "climate", "nepal", "activism", "sustainability"],
//       views: 1250,
//       likes: 89,
//       comments: 23,
      
//       // Detailed content
//       content: {
//         introduction: "Nepal, a country nestled in the heart of the Himalayas, faces unique climate challenges that disproportionately affect its young population. From melting glaciers to unpredictable monsoons, the impacts of climate change are reshaping the landscape and livelihoods of millions. However, amidst these challenges, a powerful force for change is emerging: Nepal's youth.",
        
//         sections: [
//           {
//             heading: "The Climate Challenge in Nepal",
//             content: "Nepal is experiencing climate change at twice the global average rate. The country's diverse geography – from the plains of Terai to the peaks of the Himalayas – creates a complex web of climate vulnerabilities. Young people, who make up over 40% of Nepal's population, are bearing the brunt of these changes through disrupted education, limited economic opportunities, and health impacts.",
//             image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
//           },
//           {
//             heading: "Youth-Led Climate Initiatives",
//             content: "Across Nepal, young people are not waiting for solutions to come from above. They are creating their own. From school-based tree plantation drives to community waste management programs, youth are demonstrating that age is not a barrier to environmental leadership. Organizations like Climate Care Network are providing platforms for these young voices to be heard and their actions to be amplified.",
//             image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop"
//           },
//           {
//             heading: "Success Stories from the Ground",
//             content: "In Dakshinkali Municipality, over 200 students participated in the Climate Creativity Context program, developing innovative solutions to local environmental challenges. These young climate champions created art installations from recycled materials, organized community clean-up drives, and even influenced local policy discussions. Their creativity and passion are proving that youth engagement is not just beneficial – it's essential.",
//             image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop"
//           },
//           {
//             heading: "Building Climate Resilience Through Education",
//             content: "Education plays a crucial role in building climate resilience. By integrating climate science into curricula and providing hands-on learning opportunities, we can prepare young people to both adapt to and mitigate climate change. The key is making climate education relevant, engaging, and action-oriented.",
//             image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=400&fit=crop"
//           }
//         ],
        
//         conclusion: "The youth of Nepal are not just the leaders of tomorrow – they are the leaders of today. Their energy, creativity, and determination are driving meaningful climate action at the grassroots level. By supporting youth-led initiatives, providing platforms for their voices, and investing in their education and capacity building, we can harness this powerful force for positive environmental change. The future of Nepal's environment – and indeed, our planet – depends on empowering these young climate champions to continue their vital work.",
        
//         keyTakeaways: [
//           "Youth in Nepal are disproportionately affected by climate change but are also leading innovative solutions",
//           "Community-based climate action programs are more effective when youth are actively involved",
//           "Creative expression and art can be powerful tools for climate communication and engagement",
//           "Policy makers need to create more opportunities for meaningful youth participation in climate governance",
//           "Investment in climate education and youth capacity building is crucial for long-term resilience"
//         ],
        
//         relatedLinks: [
//           { title: "Climate Care Network Projects", url: "/projects" },
//           { title: "Join Our Youth Climate Program", url: "/joinus" },
//           { title: "Nepal Climate Adaptation Plans", url: "#" }
//         ]
//       },
      
//       relatedPosts: ["sustainable-agriculture-techniques", "renewable-energy-rural-nepal"]
//     },
//     {
//       id: "sustainable-agriculture-techniques",
//       slug: "sustainable-agriculture-techniques", 
//       title: "Sustainable Agriculture Techniques for Small-Scale Farmers",
//       excerpt: "Learn about innovative farming methods that increase yields while protecting the environment and promoting biodiversity.",
//       thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
//       category: "Agriculture",
//       publishDate: "2024-11-10",
//       readTime: "6 min read",
//       authorID: "Namrata Khatiwada",
//       authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=100&h=100&fit=crop&crop=face",
//       authorBio: "Agricultural specialist and environmental educator focused on sustainable farming practices in rural communities.",
//       tags: ["agriculture", "sustainability", "farming", "biodiversity"],
//       views: 890,
//       likes: 67,
//       comments: 15,
      
//       content: {
//         introduction: "As global populations grow and climate change intensifies, the need for sustainable agriculture has never been more urgent. Small-scale farmers, who produce much of the world's food, are on the frontlines of this challenge. This article explores practical, accessible techniques that can help farmers increase productivity while protecting the environment.",
        
//         sections: [
//           {
//             heading: "Understanding Sustainable Agriculture",
//             content: "Sustainable agriculture is farming that meets our current food needs without compromising the ability of future generations to meet theirs. It encompasses practices that are environmentally sound, economically viable, and socially responsible. For small-scale farmers, this means techniques that work within limited resources while maximizing long-term benefits.",
//             image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=400&fit=crop"
//           },
//           {
//             heading: "Crop Rotation and Diversification",
//             content: "One of the most effective sustainable practices is crop rotation. By alternating different crops in the same field across seasons, farmers can improve soil health, reduce pest problems, and increase biodiversity. Legumes, for example, fix nitrogen in the soil, reducing the need for synthetic fertilizers when rotated with grain crops.",
//             image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=400&fit=crop"
//           }
//         ],
        
//         conclusion: "Sustainable agriculture is not just about protecting the environment – it's about creating resilient farming systems that can thrive in a changing world. By adopting these techniques, small-scale farmers can improve their livelihoods while contributing to global food security and environmental health.",
        
//         keyTakeaways: [
//           "Crop rotation improves soil health and reduces pest problems naturally",
//           "Composting transforms waste into valuable soil amendments",
//           "Water conservation techniques can significantly reduce irrigation needs",
//           "Integrated pest management reduces reliance on harmful chemicals"
//         ]
//       }
//     },
//     {
//       id: "renewable-energy-rural-nepal",
//       slug: "renewable-energy-rural-nepal",
//       title: "Renewable Energy Solutions for Rural Nepal",
//       excerpt: "Exploring how solar, micro-hydro, and wind energy are transforming remote communities and reducing carbon emissions.",
//       thumbnail: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop",
//       category: "Energy",
//       publishDate: "2024-11-05",
//       readTime: "7 min read",
//       authorID: "Avash Thakur",
//       authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
//       authorBio: "Renewable energy engineer specializing in off-grid solutions for remote and rural communities.",
//       tags: ["renewable", "energy", "rural", "solar", "hydro"],
//       views: 1100,
//       likes: 92,
//       comments: 31,
      
//       content: {
//         introduction: "Rural Nepal's challenging terrain and dispersed settlements have historically made grid connection difficult and expensive. However, the country's abundant natural resources – from strong solar radiation to flowing rivers – present enormous opportunities for renewable energy development.",
        
//         sections: [
//           {
//             heading: "Solar Power Potential",
//             content: "Nepal receives over 300 sunny days per year, making solar energy a highly viable option for rural electrification. Solar home systems and mini-grids are already transforming communities, providing clean electricity for lighting, communication, and small businesses.",
//             image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=400&fit=crop"
//           }
//         ],
        
//         conclusion: "Renewable energy is not just transforming how rural Nepal accesses power – it's creating new economic opportunities and improving quality of life while reducing environmental impact.",
        
//         keyTakeaways: [
//           "Solar energy is highly viable in Nepal's sunny climate",
//           "Micro-hydro systems can provide reliable power for entire communities",
//           "Renewable energy creates local economic opportunities"
//         ]
//       }
//     }
//   ]
// };

// const BlogCard = ({ post, onPostClick }) => {
//   const [isLiked, setIsLiked] = useState(false);
  
//   return (
//     <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer">
//       <div className="relative h-48 overflow-hidden" onClick={() => onPostClick(post)}>
//         <img 
//           src={post.thumbnail} 
//           alt={post.title}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         <div className="absolute top-4 left-4">
//           <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
//             {post.category}
//           </span>
//         </div>
        
//         {/* Hover Overlay */}
//         <div className="absolute inset-0 bg-emerald-600/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
//           <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//             <div className="text-lg font-semibold mb-2">Read Article</div>
//             <ChevronRight className="mx-auto" size={24} />
//           </div>
//         </div>
//       </div>
      
//       <div className="p-6">
//         <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-1">
//               <Calendar size={14} />
//               <span>{new Date(post.publishDate).toLocaleDateString()}</span>
//             </div>
//             <div className="flex items-center space-x-1">
//               <Clock size={14} />
//               <span>{post.readTime}</span>
//             </div>
//           </div>
//           <div className="flex items-center space-x-3 text-gray-400">
//             <div className="flex items-center space-x-1">
//               <Eye size={14} />
//               <span>{post.views}</span>
//             </div>
//             <div className="flex items-center space-x-1">
//               <MessageCircle size={14} />
//               <span>{post.comments}</span>
//             </div>
//           </div>
//         </div>
        
//         <h2 
//           className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 mb-3 line-clamp-2 cursor-pointer"
//           onClick={() => onPostClick(post)}
//         >
//           {post.title}
//         </h2>
        
//         <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
//           {post.excerpt}
//         </p>
        
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <img 
//               src={post.authorAvatar} 
//               alt={post.authorID}
//               className="w-8 h-8 rounded-full object-cover"
//             />
//             <span className="text-sm font-medium text-gray-700">{post.authorID}</span>
//           </div>
          
//           <div className="flex items-center space-x-2">
//             <button 
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsLiked(!isLiked);
//               }}
//               className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-colors ${
//                 isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
//               }`}
//             >
//               <Heart size={14} className={isLiked ? 'fill-current' : ''} />
//               <span className="text-sm">{post.likes + (isLiked ? 1 : 0)}</span>
//             </button>
//           </div>
//         </div>
        
//         <div className="flex flex-wrap gap-2 mt-4">
//           {post.tags.slice(0, 3).map(tag => (
//             <span key={tag} className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-xs">
//               #{tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </article>
//   );
// };

// const BlogDetailPage = ({ post, onBack }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [showShareMenu, setShowShareMenu] = useState(false);
  
//   const shareOptions = [
//     { name: 'Facebook', icon: Facebook, color: 'text-blue-600' },
//     { name: 'Twitter', icon: Twitter, color: 'text-sky-500' },
//     { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-700' },
//     { name: 'Copy Link', icon: Copy, color: 'text-gray-600' }
//   ];
  
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <div className="bg-white shadow-sm sticky top-0 z-50">
//         <div className="max-w-4xl mx-auto px-8 py-4">
//           <button 
//             onClick={onBack}
//             className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
//           >
//             <ArrowLeft size={20} />
//             <span>Back to Blog</span>
//           </button>
//         </div>
//       </div>
      
//       {/* Article Header */}
//       <div className="bg-white">
//         <div className="max-w-4xl mx-auto px-8 py-12">
//           {/* Category and Meta */}
//           <div className="flex items-center space-x-4 mb-6">
//             <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//               {post.category}
//             </span>
//             <div className="flex items-center space-x-4 text-sm text-gray-500">
//               <div className="flex items-center space-x-1">
//                 <Calendar size={14} />
//                 <span>{new Date(post.publishDate).toLocaleDateString()}</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <Clock size={14} />
//                 <span>{post.readTime}</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <Eye size={14} />
//                 <span>{post.views} views</span>
//               </div>
//             </div>
//           </div>
          
//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
//             {post.title}
//           </h1>
          
//           {/* Author and Actions */}
//           <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
//             <div className="flex items-center space-x-4">
//               <img 
//                 src={post.authorAvatar} 
//                 alt={post.authorID}
//                 className="w-12 h-12 rounded-full object-cover"
//               />
//               <div>
//                 <div className="font-semibold text-gray-800">{post.authorID}</div>
//                 <div className="text-sm text-gray-500">{post.authorBio}</div>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-3">
//               <button 
//                 onClick={() => setIsLiked(!isLiked)}
//                 className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
//                   isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
//                 }`}
//               >
//                 <Heart size={18} className={isLiked ? 'fill-current' : ''} />
//                 <span>{post.likes + (isLiked ? 1 : 0)}</span>
//               </button>
              
//               <button 
//                 onClick={() => setIsBookmarked(!isBookmarked)}
//                 className={`p-2 rounded-full transition-colors ${
//                   isBookmarked ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600 hover:bg-yellow-50 hover:text-yellow-500'
//                 }`}
//               >
//                 <Bookmark size={18} className={isBookmarked ? 'fill-current' : ''} />
//               </button>
              
//               <div className="relative">
//                 <button 
//                   onClick={() => setShowShareMenu(!showShareMenu)}
//                   className="p-2 bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-full transition-colors"
//                 >
//                   <Share2 size={18} />
//                 </button>
                
//                 {showShareMenu && (
//                   <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border p-2 min-w-48 z-10">
//                     {shareOptions.map((option) => {
//                       const IconComponent = option.icon;
//                       return (
//                         <button
//                           key={option.name}
//                           className="flex items-center space-x-3 w-full px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors text-left"
//                         >
//                           <IconComponent size={18} className={option.color} />
//                           <span className="text-gray-700">{option.name}</span>
//                         </button>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Hero Image */}
//       <div className="relative h-96 overflow-hidden">
//         <img 
//           src={post.thumbnail}
//           alt={post.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//       </div>
      
//       {/* Article Content */}
//       <div className="bg-white">
//         <div className="max-w-4xl mx-auto px-8 py-12">
//           <div className="prose prose-lg max-w-none">
//             {/* Introduction */}
//             <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
//               {post.content.introduction}
//             </p>
            
//             {/* Content Sections */}
//             {post.content.sections.map((section, index) => (
//               <div key={index} className="mb-12">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">{section.heading}</h2>
//                 <p className="text-gray-700 leading-relaxed mb-6">{section.content}</p>
//                 {section.image && (
//                   <div className="my-8">
//                     <img 
//                       src={section.image}
//                       alt={section.heading}
//                       className="w-full h-64 object-cover rounded-2xl shadow-lg"
//                     />
//                   </div>
//                 )}
//               </div>
//             ))}
            
//             {/* Conclusion */}
//             <div className="bg-emerald-50 p-8 rounded-2xl my-12">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusion</h2>
//               <p className="text-gray-700 leading-relaxed">{post.content.conclusion}</p>
//             </div>
            
//             {/* Key Takeaways */}
//             {post.content.keyTakeaways && (
//               <div className="my-12">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Takeaways</h2>
//                 <ul className="space-y-3">
//                   {post.content.keyTakeaways.map((takeaway, index) => (
//                     <li key={index} className="flex items-start space-x-3">
//                       <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
//                       <span className="text-gray-700">{takeaway}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
            
//             {/* Tags */}
//             <div className="my-8">
//               <div className="flex flex-wrap gap-2">
//                 {post.tags.map(tag => (
//                   <span key={tag} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
//                     #{tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Related Articles */}
//       <div className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-8">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Related Articles</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* This would show related posts - for demo, showing placeholder */}
//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <div className="text-center text-gray-500">
//                 <BookOpen size={48} className="mx-auto mb-4 text-gray-300" />
//                 <p>Related articles would appear here based on tags and categories</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const BlogList = () => {
//   const [posts] = useState(blogData.posts);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [filteredPosts, setFilteredPosts] = useState(posts);
//   const [email, setEmail] = useState("");

//   const categories = ['All', ...new Set(posts.map(post => post.category))];

//   useEffect(() => {
//     let filtered = posts;
    
//     if (searchTerm) {
//       filtered = filtered.filter(post => 
//         post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
//       );
//     }
    
//     if (selectedCategory !== 'All') {
//       filtered = filtered.filter(post => post.category === selectedCategory);
//     }
    
//     setFilteredPosts(filtered);
//   }, [searchTerm, selectedCategory, posts]);

//   const handleSubscription = async (e) => {
//     e.preventDefault();
//     // Subscription logic here
//     console.log('Subscription email:', email);
//     setEmail("");
//   };

//   const handlePostClick = (post) => {
//     setSelectedPost(post);
//   };

//   const handleBackToBlog = () => {
//     setSelectedPost(null);
//   };

//   // If a post is selected, show the detail page
//   if (selectedPost) {
//     return <BlogDetailPage post={selectedPost} onBack={handleBackToBlog} />;
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden pt-20 pb-16">
//         <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>
//         <div className="relative max-w-7xl mx-auto px-8 pt-20">
//           <div className="text-center">
//             <div className="inline-flex items-center space-x-2 bg-emerald-500/10 px-4 py-2 rounded-full mb-6">
//               <BookOpen className="text-emerald-600" size={20} />
//               <span className="text-emerald-700 font-semibold">Environmental Blog</span>
//             </div>
//             <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
//               Green Insights
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
//               Discover the latest insights, research, and stories about environmental conservation, 
//               sustainability, and our planet's future.
//             </p>
            
//             {/* Search and Filter */}
//             <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-8">
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type="text"
//                   placeholder="Search articles..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                 />
//               </div>
//               <div className="relative">
//                 <select
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                   className="appearance-none bg-white px-6 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent pr-10"
//                 >
//                   {categories.map(category => (
//                     <option key={category} value={category}>{category}</option>
//                   ))}
//                 </select>
//                 <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Blog Grid */}
//       <div className="max-w-7xl mx-auto px-8 pb-16">
//         {filteredPosts.length === 0 ? (
//           <div className="text-center py-16">
//             <div className="text-6xl mb-4">🌱</div>
//             <h3 className="text-2xl font-bold text-gray-600 mb-2">No articles found</h3>
//             <p className="text-gray-500">Try adjusting your search or filter criteria</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredPosts.map((post) => (
//               <BlogCard key={post.id} post={post} onPostClick={handlePostClick} />
//             ))}
//           </div>
//         )}
//       </div>


//       {/* Newsletter CTA */}
//       <div className="max-w-7xl mx-auto px-8 pb-16">
//         <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-12 text-white text-center">
//           <Leaf className="mx-auto mb-4" size={48} />
//           <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
//           <p className="text-emerald-100 mb-6 text-lg max-w-2xl mx-auto">
//             Get the latest environmental news, tips, and insights delivered directly to your inbox
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="px-6 py-3 rounded-xl text-gray-800 flex-1"
//             />
//             <button onClick={handleSubscription} className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors duration-300 flex items-center justify-center space-x-2">
//               <span>Subscribe</span>
//               <ArrowRight size={16} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default BlogList
import React from "react";

function BlogsComingSoon() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
      {/* Big Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bounce">
        📚 Blogs Coming Soon!
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-lg">
        We’re working hard to bring you amazing articles and insights. Stay tuned!
      </p>

      {/* Decorative Loader */}
      {/* <div className="mt-8 w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div> */}
    </div>
  );
}

export default BlogsComingSoon;
