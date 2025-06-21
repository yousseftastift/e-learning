
import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../types';
import Button from './Button';
import { CalendarDaysIcon, MapPinIcon, ClockIconSolid } from './IconComponents';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="group bg-white rounded-xl shadow-subtle hover:shadow-interactive overflow-hidden flex flex-col md:flex-row transition-all duration-300 ease-out-expo transform hover:-translate-y-1">
      <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          src={event.imageUrl} 
          alt={event.title} 
        />
      </div>
      <div className="p-6 md:w-3/5 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-neutral-dark group-hover:text-primary transition-colors duration-300 mb-2">
            <Link to={`/events/${event.id}`} className="hover:underline">{event.title}</Link>
          </h3>
          <div className="flex items-center text-sm text-neutral mb-1">
            <CalendarDaysIcon className="h-4 w-4 mr-1.5 text-neutral" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-neutral mb-1">
            <ClockIconSolid className="h-4 w-4 mr-1.5 text-neutral" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-neutral mb-3">
            <MapPinIcon className="h-4 w-4 mr-1.5 text-neutral" />
            <span>{event.location}</span>
          </div>
          <p className="text-neutral text-sm mb-4 leading-relaxed">
            {event.shortDescription}
          </p>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 sm:space-x-3">
          <Button to={`/events/${event.id}`} variant="outline" size="sm">
            View Details
          </Button>
          <Button href={event.registrationLink} target="_blank" rel="noopener noreferrer" variant="primary" size="sm">
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
