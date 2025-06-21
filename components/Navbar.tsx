import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon, AcademicCapIcon, ShoppingBagIcon } from './IconComponents';
import { useCart } from '../contexts/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  const cartItemCount = cartItems.length;

  return (
    <nav className="bg-white shadow-subtle sticky top-0 z-50 animate-slideInDown">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group animate-fadeInLeft">
              <AcademicCapIcon className="h-10 w-10 text-primary group-hover:text-primary-dark transition-colors duration-300 animate-float" />
              <span className="ml-3 text-2xl font-bold text-neutral-dark group-hover:text-primary transition-colors duration-300 hover-scale">EduPlatform</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 animate-fadeInUp animate-stagger-2">
              {NAV_LINKS.map((link, index) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-out-expo hover:text-primary hover:bg-primary/10 hover-lift animate-fadeInUp animate-stagger-${index + 3} ${
                      isActive ? 'text-primary animate-pulse' : 'text-neutral-dark'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center animate-fadeInRight">
            <Link
              to="/courses"
              className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-opacity-80 transition-all duration-300 shadow-sm hover:shadow-interactive hover-scale animate-bounceIn animate-stagger-4 hover-glow"
            >
              Enroll Now
            </Link>
            <Link to="/cart" className="ml-4 relative p-2 text-neutral-dark hover:text-primary transition-colors duration-300 hover-scale animate-bounceIn animate-stagger-5">
              <ShoppingBagIcon className="h-6 w-6 animate-float" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white animate-pulse">
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only">View cart</span>
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden animate-fadeInRight">
            <Link to="/cart" className="mr-2 relative p-2 text-neutral-dark hover:text-primary transition-colors duration-300 hover-scale">
              <ShoppingBagIcon className="h-6 w-6 animate-float" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white animate-pulse">
                  {cartItemCount}
                </span>
              )}
               <span className="sr-only">View cart</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-neutral hover:text-neutral-dark hover:bg-neutral-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary transition-all duration-300 hover-scale"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <MenuIcon className="block h-6 w-6 animate-fadeIn" />
              ) : (
                <XIcon className="block h-6 w-6 animate-rotateIn" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden animate-slideInDown" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 stagger-children">
            {NAV_LINKS.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-out-expo hover:text-primary hover:bg-primary/10 hover-lift animate-fadeInLeft animate-stagger-${index + 1} ${
                    isActive ? 'text-primary bg-primary/5 animate-pulse' : 'text-neutral-dark'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
             <Link
              to="/courses"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-2 px-4 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-opacity-80 transition-all duration-300 shadow-sm hover:shadow-interactive text-center hover-scale animate-bounceIn animate-stagger-6"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;