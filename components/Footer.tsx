import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { AcademicCapIcon, FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from './IconComponents';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, url: '#' },
    { name: 'Twitter', icon: TwitterIcon, url: '#' },
    { name: 'LinkedIn', icon: LinkedInIcon, url: '#' },
    { name: 'Instagram', icon: InstagramIcon, url: '#' },
  ];

  return (
    <footer className="bg-neutral-dark text-neutral-light animate-fadeInUp">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
          <div className="animate-fadeInLeft">
            <Link to="/" className="flex items-center group mb-4">
              <AcademicCapIcon className="h-10 w-10 text-primary group-hover:text-primary-light transition-colors duration-300 animate-float" />
              <span className="ml-3 text-2xl font-bold text-white group-hover:text-primary-light transition-colors duration-300 hover-scale">EduPlatform</span>
            </Link>
            <p className="text-sm text-neutral-300 animate-fadeInUp animate-stagger-2">
              Empowering individuals through accessible and quality education.
            </p>
            <div className="mt-6 flex space-x-4 animate-fadeInUp animate-stagger-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-neutral-300 hover:text-primary transition-all duration-300 hover-scale animate-bounceIn animate-stagger-${index + 4}`}
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-6 w-6 hover-rotate" />
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fadeInUp animate-stagger-2">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase animate-fadeInDown">Quick Links</h3>
            <ul className="mt-4 space-y-2 stagger-children">
              {NAV_LINKS.slice(0, 5).map((link, index) => (
                <li key={link.name} className={`animate-fadeInLeft animate-stagger-${index + 1}`}>
                  <Link to={link.path} className="text-base text-neutral-300 hover:text-primary transition-colors duration-300 hover-lift">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fadeInUp animate-stagger-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase animate-fadeInDown">Resources</h3>
            <ul className="mt-4 space-y-2 stagger-children">
              <li className="animate-fadeInLeft animate-stagger-1"><Link to="/blog" className="text-base text-neutral-300 hover:text-primary transition-colors duration-300 hover-lift">Blog</Link></li>
              <li className="animate-fadeInLeft animate-stagger-2"><Link to="#" className="text-base text-neutral-300 hover:text-primary transition-colors duration-300 hover-lift">Help Center</Link></li>
              <li className="animate-fadeInLeft animate-stagger-3"><Link to="#" className="text-base text-neutral-300 hover:text-primary transition-colors duration-300 hover-lift">Terms of Service</Link></li>
              <li className="animate-fadeInLeft animate-stagger-4"><Link to="#" className="text-base text-neutral-300 hover:text-primary transition-colors duration-300 hover-lift">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="animate-fadeInUp animate-stagger-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase animate-fadeInDown">Newsletter</h3>
            <p className="mt-4 text-base text-neutral-300 animate-fadeInUp animate-stagger-2">Stay updated with our latest courses and news.</p>
            <form className="mt-4 sm:flex sm:max-w-md animate-fadeInUp animate-stagger-3">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm placeholder-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:border-primary sm:max-w-xs text-sm text-neutral-dark transition-all duration-300 focus:scale-105 hover-glow"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-primary flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-dark focus:ring-primary transition-all duration-300 hover-scale hover-glow animate-pulse"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-700 pt-8 animate-fadeInUp animate-stagger-5">
          <p className="text-base text-neutral-400 text-center animate-fadeIn">
            &copy; {new Date().getFullYear()} EduPlatform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;