import { useState } from "react";

const MOCK_EVENTS = [
  {
    id: 1,
    name: "Global AI Summit 2026",
    category: "Workshop",
    date: "June 15-17",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    color: "#3b82f6"
  },
  {
    id: 2,
    name: "Design Systems Bootcamp",
    category: "Masterclass",
    date: "July 22",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    color: "#a855f7"
  },
  {
    id: 3,
    name: "Future of Fintech",
    category: "Conference",
    date: "August 10",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    color: "#ec4899"
  },
  {
    id: 4,
    name: "Cloud Architecture Days",
    category: "Workshop",
    date: "Sept 5-6",
    image: "https://images.unsplash.com/photo-1451187530220-a095f9738740?auto=format&fit=crop&w=800&q=80",
    color: "#06b6d4"
  }
];

export default function EventList({ onSelect }) {
  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">Featured Events</h2>
          <p className="text-muted opacity-60">Hand-picked experiences just for you.</p>
        </div>
        <button className="btn-secondary" style={{ padding: '0.5rem 1.2rem' }}>View All</button>
      </div>

      <div className="event-grid">
        {MOCK_EVENTS.map((event, index) => (
          <div 
            key={event.id} 
            className="glass-card event-card animate-fade-in"
            style={{ animationDelay: `${0.1 * index}s`, cursor: 'pointer' }}
            onClick={() => onSelect?.(event)}
          >
            <div className="event-card-image">
              <img 
                src={event.image} 
                alt={event.name} 
              />
              <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                <span 
                  className="category-badge"
                  style={{ backgroundColor: event.color }}
                >
                  {event.category}
                </span>
              </div>
            </div>
            <div className="event-card-body">
              <div className="text-sm mb-2 opacity-60">{event.date}</div>
              <h3 className="text-xl font-bold mb-4">{event.name}</h3>
              <button 
                className="btn-secondary w-full mt-auto"
                style={{ fontSize: '0.875rem' }}
              >
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}