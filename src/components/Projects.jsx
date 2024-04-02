import React from 'react';
import ProjectCard from './ProjectCard';

import MovieSearchImg from '../img/trendingMovie.jpg';

export const Projects = () => {
  const allProjects = [
    {
      image: MovieSearchImg,
      heading: 'Trending movies',
      skills: 'React - React Router DOM - Axios', // Додайте список технологій/навичок, використаних у проекті
      description:
        "This website is your guide to the world of cinema. You can easily find the latest movies, read reviews and cast lists, and quickly find the film you want by searching. For all film lovers, it's the best way to learn about and watch new releases!", // Додайте короткий опис проекту
      links: [
        'https://andrey9019.github.io/goit-react-hw-05-movies/',
        'https://github.com/Andrey9019/goit-react-hw-05-movies',
      ],
    },
    {
      image: MovieSearchImg,
      heading: 'Trending movies',
      skills: 'React - React Router DOM - Axios', // Додайте список технологій/навичок, використаних у проекті
      description:
        "This website is your guide to the world of cinema. You can easily find the latest movies, read reviews and cast lists, and quickly find the film you want by searching. For all film lovers, it's the best way to learn about and watch new releases!", // Додайте короткий опис проекту
      links: [
        'https://andrey9019.github.io/goit-react-hw-05-movies/',
        'https://github.com/Andrey9019/goit-react-hw-05-movies',
      ],
    },
    {
      image: MovieSearchImg,
      heading: 'Trending movies',
      skills: 'React - React Router DOM - Axios', // Додайте список технологій/навичок, використаних у проекті
      description:
        "This website is your guide to the world of cinema. You can easily find the latest movies, read reviews and cast lists, and quickly find the film you want by searching. For all film lovers, it's the best way to learn about and watch new releases!", // Додайте короткий опис проекту
      links: [
        'https://andrey9019.github.io/goit-react-hw-05-movies/',
        'https://github.com/Andrey9019/goit-react-hw-05-movies',
      ],
    },
    {
      image: MovieSearchImg,
      heading: 'Trending movies',
      skills: 'React - React Router DOM - Axios', // Додайте список технологій/навичок, використаних у проекті
      description:
        "This website is your guide to the world of cinema. You can easily find the latest movies, read reviews and cast lists, and quickly find the film you want by searching. For all film lovers, it's the best way to learn about and watch new releases!", // Додайте короткий опис проекту
      links: [
        'https://andrey9019.github.io/goit-react-hw-05-movies/',
        'https://github.com/Andrey9019/goit-react-hw-05-movies',
      ],
    },
  ];

  return (
    <section className="container p-4">
      <h2 className="text-3xl font-bold mb-8 uppercase  text-center">
        Projects
      </h2>
      <p className="text-lg  mb-4  text-center">Curious What I've Done?</p>
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
