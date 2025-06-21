
import React from 'react';
import Button from '../components/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center px-4 bg-neutral-light">
      <img 
        src="https://picsum.photos/seed/404page/400/300" 
        alt="Page not found illustration" 
        className="w-full max-w-sm h-auto rounded-lg shadow-lg mb-8"
      />
      <h1 className="text-6xl font-bold font-serif text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-neutral-dark mb-3">Oops! Page Not Found.</h2>
      <p className="text-neutral max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button to="/" size="lg">
        Go to Homepage
      </Button>
    </div>
  );
};

export default NotFoundPage;
