import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';
import { UserIcon, ClockIcon, StarIconSolid } from './IconComponents'; 

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link 
      to={`/courses/${course.id}`} 
      className="group bg-white rounded-xl shadow-subtle hover:shadow-interactive overflow-hidden flex flex-col transition-all duration-300 ease-out-expo transform hover:-translate-y-2 hover-scale border-2 border-transparent hover:border-primary/20 animate-scaleIn hover-glow"
    >
      <div className="relative overflow-hidden">
        <img 
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110 animate-fadeIn" 
          src={course.thumbnailUrl} 
          alt={course.title} 
        />
        <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-semibold px-2 py-1 rounded animate-slideInRight animate-stagger-2 hover-scale transition-transform duration-300">
          {course.category}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-neutral-dark group-hover:text-primary transition-colors duration-300 mb-2 truncate animate-fadeInUp animate-stagger-3">
          {course.title}
        </h3>
        <div className="flex items-center text-sm text-neutral mb-3 animate-fadeInUp animate-stagger-4">
          <UserIcon className="h-4 w-4 mr-1.5 text-neutral animate-float" />
          <span>{course.instructor}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-neutral mb-4 animate-fadeInUp animate-stagger-5">
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1.5 text-neutral animate-pulse" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center hover-scale transition-transform duration-300">
             <StarIconSolid className="h-4 w-4 mr-1 text-amber-400 animate-pulse" />
            <span>{course.rating.toFixed(1)} ({course.reviewCount})</span>
          </div>
        </div>
        <div className="mt-auto pt-4 border-t border-neutral-light flex items-baseline justify-between animate-fadeInUp animate-stagger-6">
          <p className="text-2xl font-bold text-primary hover-scale transition-transform duration-300">
            ${course.price}
            {course.originalPrice && (
              <span className="ml-2 text-sm line-through text-neutral animate-fadeIn">${course.originalPrice}</span>
            )}
          </p>
          <span className="text-sm font-medium text-primary group-hover:underline animate-bounce">View Details</span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;