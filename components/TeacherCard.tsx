
import React from 'react';
import { Link } from 'react-router-dom';
import { Teacher } from '../types';
import { LinkedInIcon, TwitterIcon, GlobeAltIcon } from './IconComponents'; // Assuming GlobeAltIcon for website

interface TeacherCardProps {
  teacher: Teacher;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin': return <LinkedInIcon className="h-5 w-5" />;
      case 'twitter': return <TwitterIcon className="h-5 w-5" />;
      case 'website': return <GlobeAltIcon className="h-5 w-5" />;
      default: return null;
    }
  };

  return (
    <div className="group bg-white rounded-xl shadow-subtle hover:shadow-interactive overflow-hidden text-center p-6 transition-all duration-300 ease-out-expo transform hover:-translate-y-1">
      <img 
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md group-hover:scale-105 transition-transform duration-300" 
        src={teacher.imageUrl} 
        alt={teacher.name} 
      />
      <h3 className="text-xl font-semibold text-neutral-dark group-hover:text-primary transition-colors duration-300 mb-1">
        <Link to={`/teachers/${teacher.id}`} className="hover:underline">{teacher.name}</Link>
      </h3>
      <p className="text-primary text-sm font-medium mb-3">{teacher.role}</p>
      <p className="text-neutral text-sm mb-4 h-16 overflow-hidden text-ellipsis">
        {teacher.bio}
      </p>
      <div className="flex justify-center space-x-3 mb-4">
        {teacher.socialLinks.map(link => (
          <a 
            key={link.platform} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral hover:text-primary transition-colors duration-300"
            title={link.platform}
          >
            {getSocialIcon(link.platform)}
          </a>
        ))}
      </div>
      <Link 
        to={`/teachers/${teacher.id}`}
        className="inline-block mt-2 text-sm font-medium text-primary hover:underline"
      >
        View Profile
      </Link>
    </div>
  );
};

export default TeacherCard;
