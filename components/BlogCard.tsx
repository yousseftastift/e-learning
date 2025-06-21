import React from 'react';
import { Link } from 'react-router-dom';
import { BlogArticle } from '../types';
import { CalendarIcon, UserCircleIcon, TagIcon } from './IconComponents';

interface BlogCardProps {
  article: BlogArticle;
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  return (
    <Link 
      to={`/blog/${article.id}`} 
      className="group bg-white rounded-xl border-2 border-neutral-light hover:border-primary shadow-subtle hover:shadow-interactive overflow-hidden flex flex-col transition-all duration-300 ease-out-expo transform hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <img 
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" 
          src={article.imageUrl} 
          alt={article.title} 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold px-2.5 py-0.5 rounded-full border border-secondary/20">
            {article.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-neutral-dark group-hover:text-primary transition-colors duration-300 mb-2">
          {article.title}
        </h3>
        <div className="flex items-center text-xs text-neutral mb-3 space-x-3">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1.5 text-neutral" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center">
            <UserCircleIcon className="h-4 w-4 mr-1.5 text-neutral" />
            <span>{article.author}</span>
          </div>
        </div>
        <p className="text-neutral text-sm mb-4 flex-grow">
          {article.excerpt}
        </p>
        <div className="mt-auto pt-3 border-t-2 border-primary/20">
          <span className="text-sm font-medium text-primary group-hover:underline">Read More &rarr;</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;