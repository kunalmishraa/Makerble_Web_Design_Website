import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'A Training Project', expanded: false },
    { id: 2, name: 'Adoption Applications', expanded: false },
    { id: 3, name: 'Birmingham Youth', expanded: false },
  ]);

  const handleToggleProject = (id: number) => {
    setProjects(projects.map(project =>
      project.id === id ? { ...project, expanded: !project.expanded } : project
    ));
  };

  const handleAddProject = () => {
    const newProject = {
      id: projects.length + 1,
      name: 'New Project',
      expanded: false,
    };
    setProjects([...projects, newProject]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <button
          onClick={handleAddProject}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          New Project
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        {projects.map(project => (
          <div key={project.id} className="border-b last:border-b-0">
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => handleToggleProject(project.id)}
            >
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-blue-500" />
                <h3 className="font-semibold">{project.name}</h3>
              </div>
              {project.expanded ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>
            {project.expanded && (
              <div className="p-4 bg-gray-50">
                <p>Project details and tasks would go here.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;