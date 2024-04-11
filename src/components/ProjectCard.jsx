import React from 'react';

export const ProjectCard = ({ projectContent }) => {
  return (
    <div>
      <div className="mb-4">
        <img
          src={projectContent.image}
          alt={`Screenshot of the ${projectContent.heading} project`}
        />
      </div>
      <div>
        <p className="uppercase font-bold  tracking-wider text-lg  mb-4">
          {projectContent.skills}
        </p>
        <h3 className="text-500 text-[#5851db] text-2xl font-bold mb-4">
          {projectContent.heading}
        </h3>
        <p className="text-base  mb-4">{projectContent.description}</p>
        {projectContent.links.map((link, index) => (
          <div className="inline-block  px-4">
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="button "
            >
              {index === 0 ? 'Live Site' : 'GitHub Repo'}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
