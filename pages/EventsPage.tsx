
import React from 'react';
import { MOCK_EVENTS } from '../constants';
import { Event } from '../types';
import EventCard from '../components/EventCard';
import SectionTitle from '../components/SectionTitle';
import { CalendarDaysIcon } from '../components/IconComponents';

const EventsPage: React.FC = () => {
  // Simple sort by date (assuming date strings are comparable or convert them)
  // For robust sorting, use a date library like date-fns or moment
  const upcomingEvents = MOCK_EVENTS.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-accent to-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CalendarDaysIcon className="h-16 w-16 mx-auto mb-4 text-white" />
          <h1 className="text-4xl font-bold font-serif">Upcoming Events</h1>
          <p className="mt-2 text-lg">Join our workshops, webinars, and Q&A sessions.</p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {upcomingEvents.length > 0 ? (
          <div className="space-y-12">
            {upcomingEvents.map((event: Event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <img src="https://via.placeholder.com/300x200/F3F4F6/9CA3AF?text=No+Upcoming+Events" alt="No events" className="mx-auto mb-8 rounded-lg" />
            <h3 className="text-2xl font-semibold text-neutral-dark">No Upcoming Events</h3>
            <p className="text-neutral mt-2">Please check back soon for our schedule.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
