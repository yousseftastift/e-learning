
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { MOCK_TEACHERS } from '../constants'; // For team section
import { LightBulbIcon, RocketLaunchIcon, UsersIcon, EyeIcon, CheckIcon } from '../components/IconComponents';

const AboutUsPage: React.FC = () => {
  const teamMembers = MOCK_TEACHERS.slice(0, 4); // Show a few team members

  const values = [
    { icon: <LightBulbIcon className="h-8 w-8 text-primary" />, title: "Innovation", description: "We constantly seek new ways to enhance learning." },
    { icon: <UsersIcon className="h-8 w-8 text-primary" />, title: "Community", description: "Fostering a supportive network of learners and educators." },
    { icon: <RocketLaunchIcon className="h-8 w-8 text-primary" />, title: "Excellence", description: "Striving for the highest quality in content and delivery." },
    { icon: <EyeIcon className="h-8 w-8 text-primary" />, title: "Accessibility", description: "Making education available to everyone, everywhere." }
  ];

  const milestones = [
    { year: "2020", event: "EduPlatform Founded", description: "Our journey began with a vision to revolutionize online education." },
    { year: "2021", event: "Launched First 10 Courses", description: "Successfully onboarded our initial set of expert instructors and courses." },
    { year: "2022", event: "Reached 10,000 Students", description: "Celebrated a major milestone in our growing community of learners." },
    { year: "2023", event: "Introduced Interactive Workshops", description: "Expanded our offerings to include live, hands-on learning experiences." },
    { year: "2024", event: "Global Expansion Initiatives", description: "Working towards making our platform accessible in new regions." }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">About EduPlatform</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We are passionate about empowering individuals through accessible, high-quality online education. Learn more about our journey and vision.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center" alt="Our Mission" className="rounded-xl shadow-interactive w-full" />
            </div>
            <div>
              <SectionTitle title="Our Mission" subtitle="What Drives Us" />
              <p className="text-neutral leading-relaxed mb-4">
                Our mission is to make transformative learning experiences accessible to everyone, everywhere. We believe education is a powerful tool for personal and professional growth, and we are committed to providing high-quality, engaging, and flexible online courses.
              </p>
              <SectionTitle title="Our Vision" subtitle="Looking Ahead" />
              <p className="text-neutral leading-relaxed">
                We envision a world where anyone can learn new skills, advance their careers, and achieve their full potential through innovative and supportive online education. We aim to be a leading global platform for lifelong learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 lg:py-24 bg-neutral-light">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Core Values" centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(value => (
              <div key={value.title} className="bg-white p-6 rounded-xl shadow-subtle text-center transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-center items-center mb-4 h-16 w-16 rounded-full bg-primary/10 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-2">{value.title}</h3>
                <p className="text-sm text-neutral">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / How it Works Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Story" subtitle="The Journey of EduPlatform" centered/>
          <div className="max-w-3xl mx-auto text-neutral leading-relaxed space-y-4 text-center">
            <p>EduPlatform was founded by a group of educators and tech enthusiasts who saw the potential of online learning to break down barriers to education. Frustrated by the limitations of traditional systems and inspired by the possibilities of technology, we set out to create a platform that is not only informative but also engaging, interactive, and supportive.</p>
            <p>Since our inception, we've grown into a vibrant community of learners and instructors from around the globe. We continuously strive to improve our platform, expand our course offerings, and ensure that every student has the tools and support they need to succeed.</p>
          </div>
        </div>
      </section>
      
      {/* Milestones / Timeline Section */}
      <section className="py-16 lg:py-24 bg-neutral-light">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Milestones" centered />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`mb-8 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2"></div>
                <div className="md:w-1/2 md:pl-8 relative">
                  <div className={`absolute -left-4 top-1/2 -mt-4 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-md hidden md:flex ${index % 2 === 0 ? 'md:left-auto md:-right-4' : ''}`}>
                    <CheckIcon className="w-5 h-5"/>
                  </div>
                   <div className={`p-6 bg-white rounded-xl shadow-subtle ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <p className="text-primary font-bold text-xl mb-1">{milestone.year}</p>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-2">{milestone.event}</h4>
                    <p className="text-sm text-neutral">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Meet Our Team" subtitle="The People Behind EduPlatform" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white p-6 rounded-xl shadow-subtle text-center transform hover:shadow-interactive hover:-translate-y-1 transition-all duration-300">
                <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
                <h3 className="text-xl font-semibold text-neutral-dark">{member.name}</h3>
                <p className="text-primary text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
