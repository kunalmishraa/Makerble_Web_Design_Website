import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const BoardsPage: React.FC = () => {
  const [boards, setBoards] = useState([
    { id: 1, name: 'All Hubs', icon: '🌐' },
    { id: 2, name: 'Birmingham - Attendance Record', icon: '📊' },
    { id: 3, name: 'Birmingham - Outcomes Star', icon: '⭐' },
  ]);

  const handleAddBoard = () => {
    const newBoard = {
      id: boards.length + 1,
      name: 'New Board',
      icon: '📌',
    };
    setBoards([...boards, newBoard]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Boards</h2>
        <button
          onClick={handleAddBoard}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
        >
          <Plus className="w-5 h-5 mr-1" /> New Board
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {boards.map(board => (
          <div key={board.id} className="bg-white rounded-lg shadow-md p-4 flex items-center">
            <span className="text-2xl mr-2">{board.icon}</span>
            <h3 className="font-semibold">{board.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardsPage;
