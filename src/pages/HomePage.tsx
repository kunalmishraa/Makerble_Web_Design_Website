import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, MessageSquare } from 'lucide-react';

const HomePage: React.FC = () => {
  const [newsFeed, setNewsFeed] = useState([
    {
      id: 1,
      author: 'Demo Sports Coach',
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      content: 'Indoor Cricket Session witnessed',
      timestamp: '8 hours ago',
      likes: 0,
      comments: 0,
      expanded: false,
    },
    {
      id: 2,
      author: 'Sportykids Admin',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      content: '10 Attendances (Sessions) by Sportykids Admin',
      timestamp: '1 day ago',
      likes: 0,
      comments: 0,
      expanded: false,
    },
  ]);

  const [newStory, setNewStory] = useState('');

  const handleExpandStory = (id: number) => {
    setNewsFeed(newsFeed.map(story => 
      story.id === id ? { ...story, expanded: !story.expanded } : story
    ));
  };

  const handleLike = (id: number) => {
    setNewsFeed(newsFeed.map(story => 
      story.id === id ? { ...story, likes: story.likes + 1 } : story
    ));
  };

  const handleNewStorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newStory.length < 3) {
      alert('Story must be at least 3 characters long.');
      return;
    }
    const newStoryObj = {
      id: newsFeed.length + 1,
      author: 'Current User',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: newStory,
      timestamp: 'Just now',
      likes: 0,
      comments: 0,
      expanded: false,
    };
    setNewsFeed([newStoryObj, ...newsFeed]);
    setNewStory('');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">News Feed</h2>
        <form onSubmit={handleNewStorySubmit} className="mb-6">
          <textarea
            className="w-full p-2 border rounded-md"
            rows={3}
            placeholder="Share some progress..."
            value={newStory}
            onChange={(e) => setNewStory(e.target.value)}
          ></textarea>
          <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Post
          </button>
        </form>
        {newsFeed.map(story => (
          <div key={story.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center mb-2">
              <img src={story.avatar} alt={story.author} className="w-10 h-10 rounded-full mr-2" />
              <div>
                <h3 className="font-semibold">{story.author}</h3>
                <p className="text-sm text-gray-500">{story.timestamp}</p>
              </div>
            </div>
            <p className={`mb-2 ${story.expanded ? '' : 'line-clamp-3'}`}>{story.content}</p>
            {!story.expanded && (
              <button
                onClick={() => handleExpandStory(story.id)}
                className="text-blue-500 hover:underline flex items-center"
              >
                Read more <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            )}
            {story.expanded && (
              <button
                onClick={() => handleExpandStory(story.id)}
                className="text-blue-500 hover:underline flex items-center"
              >
                Show less <ChevronUp className="w-4 h-4 ml-1" />
              </button>
            )}
            <div className="flex items-center mt-4">
              <button
                onClick={() => handleLike(story.id)}
                className="flex items-center text-gray-500 hover:text-red-500 mr-4"
              >
                <Heart className="w-5 h-5 mr-1" />
                {story.likes}
              </button>
              <button className="flex items-center text-gray-500 hover:text-blue-500">
                <MessageSquare className="w-5 h-5 mr-1" />
                {story.comments}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Personal Progress</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Ability to cook a variety of meals that...</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Amount Awarded</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Arrest and charge</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;