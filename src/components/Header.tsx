import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, Users, Briefcase, Layout, Bell, Mail, Shield, Plus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Layout className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Makerble</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link to="/events" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Calendar className="w-5 h-5" />
              <span>Events</span>
            </Link>
            <Link to="/contacts" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Users className="w-5 h-5" />
              <span>Contacts</span>
            </Link>
            <Link to="/projects" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Briefcase className="w-5 h-5" />
              <span>Projects</span>
            </Link>
            <Link to="/boards" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Layout className="w-5 h-5" />
              <span>Boards</span>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600">
              <Bell className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              <Mail className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              <Shield className="w-6 h-6" />
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center space-x-1 hover:bg-red-600">
              <Plus className="w-5 h-5" />
              <span>Create</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;