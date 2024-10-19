import React from 'react';
import { Calendar } from 'lucide-react';

const EventsPage: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'Indoor Cricket',
      date: '10:00 21/11/23 - 13:00 21/11/23',
      participants: '1 Manager, 2 Workers, 2 Guests',
    },
    {
      id: 2,
      title: 'Indoor Cricket',
      date: '10:00 22/11/23 - 13:00 22/11/23',
      participants: '1 Manager, 2 Workers, 2 Guests',
    },
    {
      id: 3,
      title: 'Indoor Cricket',
      date: '10:00 23/11/23 - 13:00 23/11/23',
      participants: '1 Manager, 2 Workers, 2 Guests',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        {events.map(event => (
          <div key={event.id} className="mb-4 pb-4 border-b last:border-b-0">
            <div className="flex items-center mb-2">
              <Calendar className="w-5 h-5 mr-2 text-blue-500" />
              <h3 className="font-semibold text-lg">{event.title}</h3>
            </div>
            <p className="text-gray-600 mb-1">{event.date}</p>
            <p className="text-sm text-gray-500">{event.participants}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;