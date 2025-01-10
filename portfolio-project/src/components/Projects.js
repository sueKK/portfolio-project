// Projects.js
import React from "react";
import project1 from "../assets/images/project1.jpg"; 
import project2 from "../assets/images/project2.jpg"; 

const Projects = () => {
  const projects = [
    { id: 1, image: project1, title: "Websites" },
    { id: 2, image: project2, title: "Digital Marketing" },
  ];

  return (
    <div className="p-8 bg-[#f4e7ce]">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold p-4">{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
