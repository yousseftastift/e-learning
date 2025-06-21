
import React, { useState } from 'react';
import { ChevronDownIcon } from './IconComponents';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpenInitially?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpenInitially = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenInitially);

  return (
    <div className="border-b border-neutral-light">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 px-1 text-left font-medium text-neutral-dark hover:bg-neutral-light/50 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span>{title}</span>
          <ChevronDownIcon
            className={`w-5 h-5 transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </h2>
      {isOpen && (
        <div className="pb-5 px-1 text-neutral">
          {children}
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
    children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return <div className="divide-y divide-neutral-light rounded-lg border border-neutral-light shadow-sm bg-white">{children}</div>;
};

export default Accordion;
