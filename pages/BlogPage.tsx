import React, { useState, useMemo } from 'react';
import { MOCK_BLOG_ARTICLES } from '../constants';
import { BlogArticle } from '../types';
import BlogCard from '../components/BlogCard';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { TagIcon, CalendarIcon } from '../components/IconComponents';


const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleArticles, setVisibleArticles] = useState(6); // For "Load More"

  const categories = useMemo(() => {
    const allCategories = MOCK_BLOG_ARTICLES.map(article => article.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);

  const filteredArticles = useMemo(() => {
    return MOCK_BLOG_ARTICLES.filter(article => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch = searchTerm === '' ||
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const articlesToShow = filteredArticles.slice(0, visibleArticles);

  const loadMoreArticles = () => {
    setVisibleArticles(prev => prev + 6);
  };

  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-accent to-secondary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle title="Our Blog" subtitle="Insights & News" centered />
          <p className="mt-2 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends in education, career advice, and platform news.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="mb-10 p-6 bg-white rounded-xl border-2 border-primary/20 shadow-lg sticky top-20 z-40"> {/* Sticky filter bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div>
              <label htmlFor="search-blog" className="block text-sm font-medium text-neutral-dark">Search Articles</label>
              <input
                type="text"
                id="search-blog"
                placeholder="e.g. Remote Learning"
                className="mt-1 block w-full px-3 py-2 border-2 border-primary rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="blog-category" className="block text-sm font-medium text-neutral-dark">Filter by Category</label>
              <select
                id="blog-category"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm rounded-md shadow-md"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        {articlesToShow.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesToShow.map((article: BlogArticle) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center" alt="No articles found" className="mx-auto mb-8 rounded-lg opacity-60" />
            <h3 className="text-2xl font-semibold text-neutral-dark">No Articles Found</h3>
            <p className="text-neutral mt-2">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Load More Button */}
        {visibleArticles < filteredArticles.length && (
          <div className="text-center mt-12">
            <Button onClick={loadMoreArticles} variant="secondary">
              Load More Articles
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;