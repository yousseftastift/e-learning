
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className={`text-base font-semibold uppercase tracking-wider text-primary mb-2 ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl lg:text-4xl font-bold font-serif text-neutral-dark ${centered ? 'mx-auto' : ''}`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
