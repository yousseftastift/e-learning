import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Reset animations for fade-in sections
    setTimeout(() => {
      const fadeElements = document.querySelectorAll('.fade-in-section');
      fadeElements.forEach(el => {
        el.classList.remove('is-visible');
      });

      // Reinitialize animations
      setTimeout(() => {
        import('../utils/animations.js').then(({ initScrollAnimations, forceShowAllSections }) => {
          initScrollAnimations();
          // Force show all sections as fallback after a delay
          setTimeout(forceShowAllSections, 1000);
        });
      }, 100);
    }, 50);
  }, [pathname]);

  return null;
};

export default ScrollToTop;