// components/NewsSection.jsx
"use client";
import { useEffect, useState } from "react";
import {
  Newspaper,
  ExternalLink,
  Calendar,
  Clock,
  AlertCircle,
  Leaf,
  Globe,
} from "lucide-react";

export default function NewsSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiStatus, setApiStatus] = useState('');

  // Replace with your Guardian API key from: https://open-platform.theguardian.com/
  const GUARDIAN_API_KEY = "59cf59a4-359d-4592-9823-ffcf0c2c3244"

  useEffect(() => {
    async function fetchGuardianNews() {
      try {
        setLoading(true);
        setError(null);

        // Check if API key is configured
        if (GUARDIAN_API_KEY === "YOUR_GUARDIAN_API_KEY") {
          console.log("Guardian API key not configured, using demo data");
          setApiStatus("demo");
          setArticles(getDemoArticles());
          setLoading(false);
          return;
        }

        // Guardian API endpoints for environmental content
        const guardianEndpoints = [
          {
            name: "Environment Section",
            url: `https://content.guardianapis.com/search?section=environment&show-fields=headline,thumbnail,trailText,byline&show-tags=keyword&page-size=3&api-key=${GUARDIAN_API_KEY}`,
            description: "Latest from Guardian's Environment section"
          },
          {
            name: "Climate Change",
            url: `https://content.guardianapis.com/search?q=climate%20change&show-fields=headline,thumbnail,trailText,byline&show-tags=keyword&page-size=3&api-key=${GUARDIAN_API_KEY}`,
            description: "Climate change specific articles"
          },
          {
            name: "Biodiversity & Wildlife",
            url: `https://content.guardianapis.com/search?q=biodiversity%20OR%20wildlife%20OR%20species&show-fields=headline,thumbnail,trailText,byline&show-tags=keyword&page-size=3&api-key=${GUARDIAN_API_KEY}`,
            description: "Biodiversity and wildlife coverage"
          },
          {
            name: "Renewable Energy",
            url: `https://content.guardianapis.com/search?q=renewable%20energy%20OR%20solar%20OR%20wind%20power&show-fields=headline,thumbnail,trailText,byline&show-tags=keyword&page-size=3&api-key=${GUARDIAN_API_KEY}`,
            description: "Clean energy and sustainability"
          }
        ];

        let allArticles = [];
        let successfulEndpoint = '';

        // Try each endpoint
        for (const endpoint of guardianEndpoints) {
          try {
            console.log(`Fetching from: ${endpoint.name}`);
            const response = await fetch(endpoint.url);
            
            if (!response.ok) {
              console.log(`${endpoint.name} failed with status: ${response.status}`);
              if (response.status === 403) {
                throw new Error("Invalid API key. Please check your Guardian API key.");
              }
              continue;
            }

            const data = await response.json();
            console.log(`${endpoint.name} response:`, data);

            if (data.response && data.response.results) {
              const articles = data.response.results.map(article => ({
                title: article.webTitle,
                description: article.fields?.trailText || extractTextFromHtml(article.fields?.bodyText) || "Read the full article for more details...",
                url: article.webUrl,
                image: article.fields?.thumbnail,
                published_at: article.webPublicationDate,
                source: "The Guardian",
                author: article.fields?.byline,
                section: article.sectionName,
                tags: article.tags?.map(tag => tag.webTitle).slice(0, 3) || []
              }));

              allArticles = [...allArticles, ...articles];
              successfulEndpoint = endpoint.name;
              
              if (allArticles.length >= 3) break; // We have enough articles
            }
          } catch (endpointError) {
            console.log(`${endpoint.name} error:`, endpointError);
            continue;
          }
        }

        if (allArticles.length === 0) {
          throw new Error("No articles found from Guardian API");
        }

        // Remove duplicates and limit to 12 articles
        const uniqueArticles = allArticles.filter((article, index, self) => 
          index === self.findIndex(a => a.url === article.url)
        ).slice(0, 12);

        setApiStatus(`success - ${successfulEndpoint}`);
        setArticles(uniqueArticles);
        console.log(`Successfully loaded ${uniqueArticles.length} articles from Guardian API`);

      } catch (error) {
        console.error("Error fetching Guardian news:", error);
        setError(error.message);
        setApiStatus("error");
        
        // Fallback to demo data on error
        setArticles(getDemoArticles());
      } finally {
        setLoading(false);
      }
    }

    fetchGuardianNews();
  }, []);

  // Helper function to extract text from HTML
  const extractTextFromHtml = (html) => {
    if (!html) return null;
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  // Demo articles for when API key is not configured
  const getDemoArticles = () => [
    {
      title: "Climate crisis: Global temperatures hit record highs as urgent action needed",
      description: "Scientists warn that immediate action is required as global temperatures continue to break records, with severe implications for ecosystems worldwide.",
      url: "https://www.theguardian.com/environment",
      image: null,
      published_at: new Date().toISOString(),
      source: "The Guardian",
      section: "Environment",
      tags: ["Climate change", "Global warming", "Science"]
    },
    {
      title: "Biodiversity loss accelerating at unprecedented rate, major study finds",
      description: "New research reveals that species extinction rates are far higher than previously thought, with critical implications for ecosystem stability.",
      url: "https://www.theguardian.com/environment",
      image: null,
      published_at: new Date(Date.now() - 3600000).toISOString(),
      source: "The Guardian",
      section: "Environment",
      tags: ["Biodiversity", "Wildlife", "Conservation"]
    },
    {
      title: "Renewable energy investment reaches historic milestone globally",
      description: "Clean energy investments surpass fossil fuel funding for the first time, marking a significant shift in the global energy landscape.",
      url: "https://www.theguardian.com/environment",
      image: null,
      published_at: new Date(Date.now() - 7200000).toISOString(),
      source: "The Guardian",
      section: "Environment",
      tags: ["Renewable energy", "Solar power", "Investment"]
    },
    {
      title: "Ocean acidification threatens marine ecosystems, researchers warn",
      description: "Latest studies show alarming increases in ocean acidity levels, posing serious risks to coral reefs and marine biodiversity.",
      url: "https://www.theguardian.com/environment",
      image: null,
      published_at: new Date(Date.now() - 10800000).toISOString(),
      source: "The Guardian",
      section: "Environment",
      tags: ["Ocean", "Marine life", "Acidification"]
    },
    {
      title: "Sustainable agriculture practices show promise in carbon reduction",
      description: "Innovative farming techniques demonstrate significant potential for reducing agricultural carbon emissions while maintaining food security.",
      url: "https://www.theguardian.com/environment",
      image: null,
      published_at: new Date(Date.now() - 14400000).toISOString(),
      source: "The Guardian",
      section: "Environment",
      tags: ["Agriculture", "Sustainability", "Carbon"]
    },
    {
      title: "Reforestation efforts gain momentum as nations commit to tree planting",
      description: "International initiatives to restore forest cover show encouraging results, with multiple countries pledging significant reforestation targets.",
      url: "https://www.theguardian.com/environment",
      image: null,
      published_at: new Date(Date.now() - 18000000).toISOString(),
      source: "The Guardian",
      section: "Environment",
      tags: ["Reforestation", "Conservation", "Trees"]
    }
  ];

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getTimeAgo = (dateString) => {
    if (!dateString) return 'Unknown time';
    
    const now = new Date();
    const publishDate = new Date(dateString);
    const diffInHours = Math.floor((now - publishDate) / (1000 * 60 * 60));

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return formatDate(dateString);
  };

  if (loading) {
    return (
      <div className="p-6 bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 rounded-2xl mt-6">
        <div className="flex items-center mb-6">
          <Globe className="w-6 h-6 text-blue-600 mr-2 animate-spin" />
          <h2 className="text-2xl font-bold text-gray-800">
            🌍  Environmental News
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-blue-200 animate-pulse"
            >
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3 mb-3"></div>
              <div className="h-2 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error && apiStatus === 'error') {
    return (
      <div className="p-6 bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 rounded-2xl mt-6">
        <div className="flex items-center mb-6">
          <Globe className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">
            🌍 Environmental News
          </h2>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
          <p className="text-red-700 font-medium mb-2">Guardian API Error</p>
          <p className="text-red-600 text-sm mb-4">{error}</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
            <p className="font-medium text-blue-800 mb-2">To fix this:</p>
            <ol className="list-decimal list-inside text-blue-700 text-left space-y-1">
              <li>Get a free API key at <span className="font-mono">open-platform.theguardian.com</span></li>
              <li>Replace YOUR_GUARDIAN_API_KEY in the code</li>
              <li>Refresh this page</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 rounded-2xl mt-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Globe className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">
            🌍  Environmental News
          </h2>
        </div>
        <div className="text-sm text-gray-500 flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {apiStatus === 'demo' ? 'Demo Mode' : 'Live from Guardian'}
        </div>
      </div>

      {/* API Status Banner */}
      {apiStatus === 'demo' && (
        <div className="mb-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-amber-800 mb-1">Demo Mode Active</p>
              <p className="text-amber-700 text-sm mb-3">
                To get live Guardian environmental news, configure your API key:
              </p>
              <div className="bg-white rounded-lg p-3 text-sm">
                <ol className="list-decimal list-inside space-y-1 text-amber-800">
                  <li>Visit <span className="font-mono bg-amber-100 px-1 rounded">open-platform.theguardian.com</span></li>
                  <li>Register for a free developer key (5,000 calls/day)</li>
                  <li>Replace <span className="font-mono bg-amber-100 px-1 rounded">YOUR_GUARDIAN_API_KEY</span> in the code</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, idx) => (
          <a
            key={idx}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-xl p-6 border border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            {/* Article Image */}
            {article.image && (
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            )}

            {/* Article Content */}
            <div className="space-y-3">
              {/* Section & Tags */}
              {(article.section || article.tags) && (
                <div className="flex flex-wrap gap-2">
                  {article.section && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                      {article.section}
                    </span>
                  )}
                  {article.tags?.slice(0, 2).map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors line-clamp-2">
                {article.title}
              </h3>

              <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                {article.description}
              </p>

              {/* Author */}
              {article.author && (
                <p className="text-xs text-gray-500 italic">
                  By {article.author}
                </p>
              )}

              {/* Article Meta */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="w-3 h-3 mr-1" />
                  {getTimeAgo(article.published_at)}
                </div>

                <div className="flex items-center text-xs text-blue-600 font-medium">
                  <span className="truncate max-w-20">
                    {article.source}
                  </span>
                  <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* View More Button */}
      {/* <div className="mt-8 text-center">
        <a
          href="https://www.theguardian.com/environment"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 shadow-sm hover:shadow-md font-medium"
        >
          View More on Guardian Environment
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div> */}
    </div>
  );
}