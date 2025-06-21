
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_EVENTS, MOCK_COURSES } from '../constants'; // Assuming related events might be other events or courses
import { Event } from '../types';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import EventCard from '../components/EventCard'; // Re-use for related events
import { CalendarDaysIcon, ClockIconSolid, MapPinIcon, UserCircleIcon, UsersIcon } from '../components/IconComponents';

const EventDetailPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();

  const event = useMemo(() => MOCK_EVENTS.find(e => e.id === eventId), [eventId]);
  // Example: Find other events, or could be related courses based on category/topic
  const relatedEvents = useMemo(() => MOCK_EVENTS.filter(e => e.id !== eventId).slice(0, 2), [eventId]);


  if (!event) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold">Event not found.</h1>
        <Link to="/events" className="text-primary hover:underline mt-4 inline-block">
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      {/* Event Header */}
      <section className="relative py-10 md:py-10">
         <div className="absolute inset-0">
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover opacity-20"/>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-light via-neutral-light/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-8">
            <div className="max-w-3xl mx-auto text-center bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
                 <h1 className="text-3xl md:text-4xl font-bold font-serif text-neutral-dark mb-4">{event.title}</h1>
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-neutral-dark mb-6">
                    <div className="flex items-center">
                        <CalendarDaysIcon className="h-5 w-5 mr-1.5 text-primary"/> {event.date}
                    </div>
                    <div className="flex items-center">
                        <ClockIconSolid className="h-5 w-5 mr-1.5 text-primary"/> {event.time}
                    </div>
                    <div className="flex items-center">
                        <MapPinIcon className="h-5 w-5 mr-1.5 text-primary"/> {event.location}
                    </div>
                </div>
                 <Button href={event.registrationLink} target="_blank" rel="noopener noreferrer" size="lg" className="shadow-lg">
                    Register for this Event
                </Button>
            </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="lg:flex lg:space-x-12">
          {/* Left Column: Full Description, Speaker Info, Schedule */}
          <div className="lg:w-2/3">
            <section className="mb-12 p-6 bg-white rounded-lg shadow-subtle">
              <h2 className="text-2xl font-semibold font-serif text-neutral-dark mb-4">About this Event</h2>
              <p className="text-neutral leading-relaxed whitespace-pre-line">{event.fullDescription}</p>
            </section>

            {event.speakerInfo && (
              <section className="mb-12 p-6 bg-white rounded-lg shadow-subtle">
                <h2 className="text-2xl font-semibold font-serif text-neutral-dark mb-4">Speaker</h2>
                <div className="flex items-center space-x-4">
                  <UserCircleIcon className="h-16 w-16 text-primary" /> {/* Replace with actual image if available */}
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-dark">{event.speakerInfo.name}</h3>
                    <p className="text-sm text-neutral">{event.speakerInfo.title}</p>
                  </div>
                </div>
              </section>
            )}

            {event.schedule && event.schedule.length > 0 && (
              <section className="mb-12 p-6 bg-white rounded-lg shadow-subtle">
                <h2 className="text-2xl font-semibold font-serif text-neutral-dark mb-4">Event Schedule</h2>
                <ul className="space-y-4">
                  {event.schedule.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary text-white text-sm font-medium w-20 text-center py-1.5 rounded-md mr-4 flex-shrink-0">{item.time}</div>
                      <p className="text-neutral-dark">{item.activity}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Right Column (Sidebar): Quick Info, Registration CTA again */}
          <aside className="lg:w-1/3 lg:sticky lg:top-24 h-fit">
            <div className="p-6 bg-white rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold font-serif text-neutral-dark mb-4">Event Details</h3>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center"><CalendarDaysIcon className="h-5 w-5 mr-3 text-primary"/><strong>Date:</strong> <span className="ml-1 text-neutral">{event.date}</span></li>
                <li className="flex items-center"><ClockIconSolid className="h-5 w-5 mr-3 text-primary"/><strong>Time:</strong> <span className="ml-1 text-neutral">{event.time}</span></li>
                <li className="flex items-center"><MapPinIcon className="h-5 w-5 mr-3 text-primary"/><strong>Location:</strong> <span className="ml-1 text-neutral">{event.location}</span></li>
                {event.speakerInfo && <li className="flex items-center"><UserCircleIcon className="h-5 w-5 mr-3 text-primary"/><strong>Speaker:</strong> <span className="ml-1 text-neutral">{event.speakerInfo.name}</span></li>}
              </ul>
              <Button href={event.registrationLink} target="_blank" rel="noopener noreferrer" fullWidth>
                Register Now
              </Button>
            </div>
          </aside>
        </div>

        {/* Related Events Section */}
        {relatedEvents.length > 0 && (
          <section className="mt-16 pt-12 border-t border-neutral-light">
            <SectionTitle title="Related Events" />
            <div className="space-y-12">
                {relatedEvents.map((relatedEvent) => (
                    <EventCard key={relatedEvent.id} event={relatedEvent} />
                ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default EventDetailPage;
