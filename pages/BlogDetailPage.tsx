import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_BLOG_ARTICLES } from '../constants';
import { CalendarIcon, UserCircleIcon, TagIcon, ArrowLeftIcon } from '../components/IconComponents';
import Button from '../components/Button';

const BlogDetailPage: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const article = MOCK_BLOG_ARTICLES.find(article => article.id === blogId);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-neutral-dark mb-4">Article Not Found</h1>
        <p className="text-neutral mb-8">The article you're looking for doesn't exist.</p>
        <Button to="/blog" variant="primary">
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Blog
        </Button>
      </div>
    );
  }

  const relatedArticles = MOCK_BLOG_ARTICLES
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/80 to-secondary/80 text-white py-16 md:py-24">
        <div className="absolute inset-0">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <span className="inline-block bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6">
              {article.title}
            </h1>
            <div className="flex items-center justify-center text-white/90 space-x-6 text-sm">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <UserCircleIcon className="h-5 w-5 mr-2" />
                <span>{article.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button to="/blog" variant="ghost" className="text-primary hover:bg-primary/10">
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back to Blog
              </Button>
            </div>

            {/* Article Excerpt */}
            <div className="bg-neutral-light/50 p-6 rounded-xl mb-8">
              <p className="text-lg text-neutral-dark italic">
                {article.excerpt}
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-neutral leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-neutral-light">
              <div className="flex items-center flex-wrap gap-2">
                <TagIcon className="h-5 w-5 text-neutral mr-2" />
                {article.tags.map(tag => (
                  <span 
                    key={tag}
                    className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-neutral-dark mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map(relatedArticle => (
                  <Link
                    key={relatedArticle.id}
                    to={`/blog/${relatedArticle.id}`}
                    className="group bg-white rounded-xl shadow-subtle hover:shadow-interactive overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        src={relatedArticle.imageUrl} 
                        alt={relatedArticle.title} 
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {relatedArticle.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-dark group-hover:text-primary transition-colors duration-300 mb-2">
                        {relatedArticle.title}
                      </h3>
                      <div className="flex items-center text-xs text-neutral mb-3">
                        <CalendarIcon className="h-4 w-4 mr-1.5" />
                        <span>{relatedArticle.date}</span>
                      </div>
                      <p className="text-neutral text-sm">
                        {relatedArticle.excerpt.substring(0, 100)}...
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetailPage;