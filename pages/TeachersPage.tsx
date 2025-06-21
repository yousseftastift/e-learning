
import React from 'react';
import { MOCK_TEACHERS } from '../constants';
import { Teacher } from '../types';
import TeacherCard from '../components/TeacherCard';
import SectionTitle from '../components/SectionTitle';
import { UsersIcon } from '../components/IconComponents';

const TeachersPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-secondary to-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <UsersIcon className="h-16 w-16 mx-auto mb-4 text-white" />
          <h1 className="text-4xl font-bold font-serif">Meet Our Instructors</h1>
          <p className="mt-2 text-lg">Learn from the best. Our instructors are experts in their fields.</p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {MOCK_TEACHERS.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {MOCK_TEACHERS.map((teacher: Teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-neutral-dark">No Instructors Available</h3>
            <p className="text-neutral mt-2">Please check back later for our list of expert instructors.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeachersPage;
