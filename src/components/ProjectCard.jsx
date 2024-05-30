import React from 'react';

export const ProjectCard = ({ projectContent }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row mx-auto relative lg:mb-96">
        <div className=" lg:w-3/5">
          <img
            src={projectContent.image}
            alt={`Screenshot of the ${projectContent.heading} project`}
            className="w-full h-full object-cover"
            style={{ maxHeight: '500px' }}
          />
        </div>
        <div className="lg:w-2/5 lg:absolute lg:top-1/2 rounded-lg lg:-translate-y-1/2 lg:right-20 lg:bg-[#020d19] border-t-2 border-l-2 border-[#5851db]">
          <p className="uppercase font-bold tracking-wider text-lg mb-4 sm:text-3xl">
            {projectContent.skills}
          </p>
          <h3 className="text-500 text-[#5851db] text-2xl font-bold mb-4 sm:text-4xl">
            {projectContent.heading}
          </h3>
          <p className="text-base sm:text-2xl mb-4 ">
            {projectContent.description}
          </p>
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
    </>
  );
};

export default ProjectCard;
