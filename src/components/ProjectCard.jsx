import React from 'react';

export const ProjectCard = ({ projectContent }) => {
  return (
    <>
      <div className="flex flex-col mx-auto sm:mb-48 lg:flex-row lg:items-center lg:space-x-8 lg:mb-96">
        <div className="w-full lg:w-3/5 lg:flex-shrink-0">
          <img
            src={projectContent.image}
            alt={`Screenshot of the ${projectContent.heading} project`}
            className="w-full h-full object-cover"
            style={{ maxHeight: '500px' }}
          />
        </div>
        <div className="mt-8 lg:mt-0 lg:flex-grow lg:w-auto">
          <p className="uppercase font-bold tracking-wider text-lg mb-4 sm:text-3xl">
            {projectContent.skills}
          </p>
          <h3 className="text-500 text-[#5851db] text-2xl font-bold mb-4 sm:text-4xl">
            {projectContent.heading}
          </h3>
          <p className="text-base sm:text-2xl mb-4">
            {projectContent.description}
          </p>
          <div className="flex flex-wrap">
            {projectContent.links.map((link, index) => (
              <div key={index} className="inline-block  px-4">
                <a
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
      </div>
    </>
  );
};

export default ProjectCard;
