// Intersection Observer for scroll-triggered animations
export const initScrollAnimations = () => {
  // Check if IntersectionObserver is supported
  if (!window.IntersectionObserver) {
    return;
  }

  // Reset all fade-in-section elements first
  const fadeElements = document.querySelectorAll('.fade-in-section');
  fadeElements.forEach(el => {
    el.classList.remove('is-visible');
  });

  // Options for the observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Don't unobserve - keep watching for re-entry
      } else {
        // Remove is-visible when element goes out of view (optional)
        // entry.target.classList.remove('is-visible');
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in-section class
  fadeElements.forEach(el => observer.observe(el));

  // Staggered animations for children
  const staggerContainers = document.querySelectorAll('.stagger-children');
  staggerContainers.forEach(container => {
    const children = container.children;
    Array.from(children).forEach((child, index) => {
      child.style.animationDelay = `${index * 0.1}s`;
    });
  });

  // Return observer for cleanup
  return observer;
};

// Smooth scroll to element
export const smoothScrollTo = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Add loading animation
export const showLoading = (element) => {
  if (element) {
    element.classList.add('loading');
  }
};

export const hideLoading = (element) => {
  if (element) {
    element.classList.remove('loading');
  }
};

// Animate number counting
export const animateNumber = (element, start, end, duration = 2000) => {
  if (!element) return;

  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 16);
};

// Parallax effect
export const initParallax = () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length === 0) return;

  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const rate = scrolled * -0.5;
      element.style.transform = `translateY(${rate}px)`;
    });
  };

  window.addEventListener('scroll', handleScroll);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Typing animation
export const typeWriter = (element, text, speed = 100) => {
  if (!element) return;

  element.textContent = '';
  let i = 0;

  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};

// Shake animation for errors
export const shakeElement = (element) => {
  if (!element) return;

  element.classList.add('animate-shake');
  setTimeout(() => {
    element.classList.remove('animate-shake');
  }, 500);
};

// Pulse animation for notifications
export const pulseElement = (element, duration = 1000) => {
  if (!element) return;

  element.classList.add('animate-pulse');
  setTimeout(() => {
    element.classList.remove('animate-pulse');
  }, duration);
};

// Force show all sections (fallback)
export const forceShowAllSections = () => {
  const fadeElements = document.querySelectorAll('.fade-in-section');
  fadeElements.forEach(el => {
    el.classList.add('is-visible');
  });
};

// Initialize all animations when DOM is loaded
export const initAllAnimations = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        initScrollAnimations();
        initParallax();
        // Force show sections after a delay as fallback
        setTimeout(forceShowAllSections, 1000);
      }, 100);
    });
  } else {
    setTimeout(() => {
      initScrollAnimations();
      initParallax();
      // Force show sections after a delay as fallback
      setTimeout(forceShowAllSections, 1000);
    }, 100);
  }
};

// Auto-initialize animations
initAllAnimations();