import React, { useEffect } from 'react';
import { MOCK_COURSES, MOCK_TESTIMONIALS } from '../constants';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { AcademicCapIcon, LightBulbIcon, RocketLaunchIcon, UsersIcon, ArrowRightIcon } from '../components/IconComponents';
 
const HomePage: React.FC = () => {
  const popularCourses = MOCK_COURSES.slice(0, 4);

  // Ensure page scrolls to top when component mounts and reset animations
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Reset and reinitialize animations
    setTimeout(() => {
      // Import and call animation functions
      import('../utils/animations.js').then(({ initScrollAnimations, forceShowAllSections }) => {
        initScrollAnimations();
        // Force show all sections as fallback
        setTimeout(forceShowAllSections, 500);
      });
    }, 100);
  }, []);

  const features = [
    {
      icon: <AcademicCapIcon className="h-10 w-10 text-primary animate-float" />,
      title: 'Expert Instructors',
      description: 'Learn from industry leaders and certified professionals.',
    },
    {
      icon: <LightBulbIcon className="h-10 w-10 text-primary animate-pulse" />,
      title: 'Flexible Learning',
      description: 'Study at your own pace, anytime, anywhere.',
    },
    {
      icon: <RocketLaunchIcon className="h-10 w-10 text-primary animate-bounce" />,
      title: 'Career Growth',
      description: 'Acquire in-demand skills to advance your career.',
    },
    {
      icon: <UsersIcon className="h-10 w-10 text-primary animate-float" />,
      title: 'Supportive Community',
      description: 'Connect with peers and mentors for support.',
    },
  ];


  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/80 to-secondary/80 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
            <img src="https://picsum.photos/seed/hero/1920/1080" alt="Hero background" className="w-full h-full object-cover opacity-30 animate-scaleIn"/>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight animate-fadeInUp">
            Unlock Your Potential. <br className="hidden sm:inline"/> Start Learning Today.
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fadeInUp animate-stagger-2">
            Explore a wide range of courses taught by industry experts. Achieve your personal and professional goals with our flexible online learning platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp animate-stagger-3">
            <Button 
              to="/courses" 
              size="lg" 
              variant="outline" 
              className="!bg-white !text-primary !border-white hover:!bg-primary hover:!text-white shadow-xl animate-bounceIn animate-stagger-4"
            >
              Explore Courses
            </Button>
            <Button 
              to="/about" 
              size="lg" 
              variant="outline" 
              className="!bg-transparent !text-white !border-white hover:!bg-white hover:!text-primary shadow-xl animate-bounceIn animate-stagger-5"
              rightIcon={<ArrowRightIcon className="h-5 w-5" />}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-16 lg:py-24 bg-white fade-in-section is-visible">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fadeInUp">
            <SectionTitle title="Most Popular Courses" subtitle="Discover Our Top Picks" centered />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {popularCourses.map((course, index) => (
              <div key={course.id} className={`animate-fadeInUp animate-stagger-${index + 1} hover-lift`}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fadeInUp animate-stagger-5">
            <Button to="/courses" variant="secondary" size="lg" className="hover-scale animate-pulse">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-16 lg:py-24 bg-neutral-light fade-in-section is-visible">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fadeInUp">
            <SectionTitle title="Why Choose EduPlatform?" subtitle="Our Advantages" centered />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
            {features.map((feature, index) => (
              <div key={feature.title} className={`bg-white p-8 rounded-xl shadow-subtle hover:shadow-interactive transition-all duration-300 transform hover:-translate-y-2 hover-scale animate-fadeInUp animate-stagger-${index + 1} hover-glow`}>
                <div className="flex justify-center items-center mb-6 h-16 w-16 rounded-full bg-primary/10 mx-auto hover-rotate">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-2">{feature.title}</h3>
                <p className="text-neutral">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white fade-in-section is-visible">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fadeInUp">
            <SectionTitle title="What Our Students Say" subtitle="Testimonials" centered />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {MOCK_TESTIMONIALS.map((testimonial, index) => (
              <div key={testimonial.id} className={`bg-neutral-light p-8 rounded-xl shadow-subtle hover:shadow-interactive transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp animate-stagger-${index + 1} hover-lift`}>
                <p className="text-neutral-dark italic text-lg mb-6 relative">
                  <span className="absolute -top-3 -left-3 text-6xl text-primary/20 font-serif animate-pulse">&ldquo;</span>
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <img src={testimonial.imageUrl} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover hover-scale transition-transform duration-300"/>
                  <div>
                    <h4 className="font-semibold text-neutral-dark">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Newsletter Signup Section */}
      <section className="py-16 lg:py-24 bg-primary text-white fade-in-section is-visible">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif mb-4 animate-fadeInUp">Stay Ahead with EduPlatform</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto animate-fadeInUp animate-stagger-2">
            Subscribe to our newsletter for the latest course updates, educational tips, and special offers.
          </p>
          <form className="max-w-lg mx-auto sm:flex sm:justify-center animate-fadeInUp animate-stagger-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-auto flex-grow px-4 py-3 rounded-md sm:rounded-r-none border-0 text-neutral-dark placeholder-neutral transition-all duration-300 focus:scale-105 hover-glow"
              required
            />
            <Button type="submit" size="lg" variant="secondary" className="mt-3 sm:mt-0 sm:rounded-l-none w-full sm:w-auto hover-scale animate-pulse">
              Subscribe Now
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;