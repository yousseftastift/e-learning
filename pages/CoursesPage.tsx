
import React, { useState, useMemo } from 'react';
import { MOCK_COURSES } from '../constants';
import { Course } from '../types';
import CourseCard from '../components/CourseCard';
import SectionTitle from '../components/SectionTitle';
import { AcademicCapIcon } from '../components/IconComponents';

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('relevance'); // 'relevance', 'price_asc', 'price_desc', 'rating'

  const categories = useMemo(() => {
    const allCategories = MOCK_COURSES.map(course => course.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);

  const filteredAndSortedCourses = useMemo(() => {
    let courses = MOCK_COURSES;

    if (selectedCategory !== 'All') {
      courses = courses.filter(course => course.category === selectedCategory);
    }

    if (searchTerm) {
      courses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sorting
    switch (sortBy) {
        case 'price_asc':
            courses.sort((a, b) => a.price - b.price);
            break;
        case 'price_desc':
            courses.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            courses.sort((a, b) => b.rating - a.rating);
            break;
        // Default 'relevance' or no sort for now
    }


    return courses;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AcademicCapIcon className="h-16 w-16 mx-auto mb-4 text-white" />
          <h1 className="text-4xl font-bold font-serif">Explore Our Courses</h1>
          <p className="mt-2 text-lg">Find the perfect course to advance your skills and career.</p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="mb-10 p-6 bg-white rounded-xl shadow-subtle">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-neutral-dark">Search Courses</label>
              <input
                type="text"
                id="search"
                placeholder="e.g. Digital Marketing"
                className="mt-1 block w-full px-3 py-2 border-2 border-primary rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-neutral-dark">Category</label>
              <select
                id="category"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm rounded-md shadow-md"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-neutral-dark">Sort By</label>
              <select
                id="sort"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm rounded-md shadow-md"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="relevance">Relevance</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        {filteredAndSortedCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredAndSortedCourses.map((course: Course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <img src="https://via.placeholder.com/300x200/F3F4F6/9CA3AF?text=No+Courses+Found" alt="No courses found" className="mx-auto mb-8 rounded-lg" />
            <h3 className="text-2xl font-semibold text-neutral-dark">No Courses Found</h3>
            <p className="text-neutral mt-2">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
