
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_TEACHERS, MOCK_COURSES } from '../constants';
import { Course } from '../types';
import CourseCard from '../components/CourseCard';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { LinkedInIcon, TwitterIcon, GlobeAltIcon, PlayIcon, AcademicCapIcon, ChatBubbleLeftEllipsisIcon } from '../components/IconComponents';

const TeacherDetailPage: React.FC = () => {
  const { teacherId } = useParams<{ teacherId: string }>();

  const teacher = useMemo(() => MOCK_TEACHERS.find(t => t.id === teacherId), [teacherId]);
  const coursesTaught = useMemo(() => 
    MOCK_COURSES.filter(course => teacher?.coursesTaughtIds.includes(course.id)), 
    [teacher]
  );

  if (!teacher) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold">Teacher not found.</h1>
        <Link to="/teachers" className="text-primary hover:underline mt-4 inline-block">
          Back to Teachers
        </Link>
      </div>
    );
  }

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin': return <LinkedInIcon className="h-6 w-6" />;
      case 'twitter': return <TwitterIcon className="h-6 w-6" />;
      case 'website': return <GlobeAltIcon className="h-6 w-6" />;
      case 'github': return <AcademicCapIcon className="h-6 w-6" />; // Placeholder for GitHub
      case 'dribbble': return <AcademicCapIcon className="h-6 w-6" />; // Placeholder for Dribbble
      default: return null;
    }
  };


  return (
    <div className="animate-fadeIn">
      {/* Teacher Profile Header */}
      <section className="bg-neutral-light py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
              <img 
                src={teacher.imageUrl} 
                alt={teacher.name} 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto md:mx-0 object-cover shadow-xl border-4 border-white"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold font-serif text-neutral-dark mb-2">{teacher.name}</h1>
              <p className="text-xl text-primary font-medium mb-4">{teacher.role}</p>
              <p className="text-neutral leading-relaxed mb-6">{teacher.bio}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {teacher.expertise.map(skill => (
                  <span key={skill} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
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
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="lg:flex lg:space-x-12">
          {/* Left Column: Full Bio, Video Intro/Quote */}
          <div className="lg:w-2/3">
            <section className="mb-12 p-6 bg-white rounded-lg shadow-subtle">
              <h2 className="text-2xl font-semibold font-serif text-neutral-dark mb-4">About {teacher.name}</h2>
              <p className="text-neutral leading-relaxed whitespace-pre-line">{teacher.longBio}</p>
            </section>

            {(teacher.videoIntroUrl || teacher.quote) && (
              <section className="mb-12">
                {teacher.videoIntroUrl && (
                  <div className="aspect-video bg-neutral-dark rounded-lg shadow-xl mb-8 flex items-center justify-center text-white relative group">
                    <PlayIcon className="h-24 w-24 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-4 left-4 text-sm bg-black/50 px-2 py-1 rounded">Watch Intro Video</span>
                    {/* In a real app, this would be an embedded video player */}
                  </div>
                )}
                {teacher.quote && (
                  <blockquote className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg italic text-neutral-dark">
                    <ChatBubbleLeftEllipsisIcon className="h-8 w-8 text-primary/50 mb-2" />
                    <p className="text-xl">"{teacher.quote}"</p>
                  </blockquote>
                )}
              </section>
            )}
          </div>

          {/* Right Column (Sidebar): Contact/Book, Credentials (Optional) */}
          <aside className="lg:w-1/3 lg:sticky lg:top-24 h-fit">
            <div className="p-6 bg-white rounded-lg shadow-subtle">
              <h3 className="text-xl font-semibold font-serif text-neutral-dark mb-4">Connect with {teacher.name}</h3>
              <p className="text-sm text-neutral mb-4">Interested in learning more or booking a session? Get in touch!</p>
              <Button to="/contact" fullWidth>Contact Instructor</Button>
              {/* Add more credentials or contact info if available */}
            </div>
          </aside>
        </div>

        {/* Courses Taught Section */}
        {coursesTaught.length > 0 && (
          <section className="mt-12 pt-12 border-t border-neutral-light">
            <SectionTitle title={`Courses by ${teacher.name}`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesTaught.map((course: Course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default TeacherDetailPage;
