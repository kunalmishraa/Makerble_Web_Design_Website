import React, { useState } from 'react';
import { User, Search } from 'lucide-react';

const ContactsPage: React.FC = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Adriana Jones', lastUpdate: '1 day ago' },
    { id: 2, name: 'Adolescent Wellbeing Scale respondent 9', lastUpdate: '21 days ago' },
    { id: 3, name: 'Becky', lastUpdate: '11 days ago' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddContact = () => {
    const newContact = {
      id: contacts.length + 1,
      name: 'New Contact',
      lastUpdate: 'Just now',
    };
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      <div className="mb-4 flex">
        <div className="relative flex-grow mr-2">
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full p-2 pl-10 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
        <button
          onClick={handleAddContact}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Contact
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        {filteredContacts.map(contact => (
          <div key={contact.id} className="flex items-center p-4 border-b last:border-b-0">
            <User className="w-10 h-10 text-gray-400 mr-4" />
            <div>
              <h3 className="font-semibold">{contact.name}</h3>
              <p className="text-sm text-gray-500">Last update: {contact.lastUpdate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsPage;