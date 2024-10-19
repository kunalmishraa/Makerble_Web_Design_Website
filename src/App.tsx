import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import ContactsPage from './pages/ContactsPage';
import ProjectsPage from './pages/ProjectsPage';
import BoardsPage from './pages/BoardsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/boards" element={<BoardsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;