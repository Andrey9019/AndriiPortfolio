import React from 'react';

export const ProjectCard = ({ projectContent }) => {
  return (
    <div>
      <div>
        <img
          src={projectContent.image}
          alt={`Screenshot of the ${projectContent.heading} project`}
        />
      </div>
      <div>
        <p>{projectContent.skills}</p>
        <h3>{projectContent.heading}</h3>

        <div>
          {projectContent.links.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="button" // Додайте класи для стилізації кнопок, якщо потрібно
            >
              {index === 0 ? 'Live Site' : 'GitHub Repo'}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
