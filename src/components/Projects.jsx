import React from 'react';
import ProjectCard from './ProjectCard';

import MovieSearchImg from '../img/movies.jpg';

export const Projects = () => {
  const allProjects = [
    {
      image: MovieSearchImg, // Додайте URL до зображення проекту
      heading: '', // Додайте назву вашого проекту
      skills: '', // Додайте список технологій/навичок, використаних у проекті
      description: '', // Додайте короткий опис проекту
      links: ['', ''], // Додайте посилання на живу сторінку та GitHub репозиторій
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      <p>Curious What I've Done?</p>
      <ul>
        {allProjects.map((project, index) => (
          <li key={index}>
            <ProjectCard projectContent={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
