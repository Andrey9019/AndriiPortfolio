import React from 'react';
import ProjectCard from './ProjectCard';

import MovieSearch from '../img/trendingMovie.png';
import ImageSearch from '../img/searchImages.png';
// import CatsSearch from '../img/searchCats.png';
// import weatherWidget from '../img/weather.png';
import taskPro from '../img/taskPro.png';
import tastyTreats from '../img/tastyTreats.png';
export const Projects = () => {
  const allProjects = [
    {
      image: MovieSearch,
      heading: 'Trending movies',
      skills: 'React - React Router DOM - Axios',
      description:
        "This website is your guide to the world of cinema. You can easily find the latest movies, read reviews and cast lists, and quickly find the film you want by searching. For all film lovers, it's the best way to learn about and watch new releases!", // Додайте короткий опис проекту
      links: [
        'https://andrey9019.github.io/goit-react-hw-05-movies/',
        'https://github.com/Andrey9019/goit-react-hw-05-movies',
      ],
    },
    {
      image: taskPro,
      heading: 'Task Pro',
      skills: 'TypeScript - React - Tailwind ',
      description: `This was a team project where I was a front-end developer and performed the following tasks on the backend.  Welcome to Task Pro, the final project of the Fullstack Development Bootcamp. This web app allows users to manage tasks efficiently, similar to popular task management tools like Trello.
      `,
      links: [
        'https://taskpro.uk/',
        'https://github.com/chertik77/final-project-frontend',
      ],
    },
    {
      image: ImageSearch,
      heading: 'Search Images',
      skills: 'React - Axios - react-modal - react-hot-toast',
      description:
        'This site is an interface for searching for images using keywords. The user can enter their query in the search field and the site will display images that match this query. The search results can be simply viewed and downloaded for further use.',
      links: [
        'https://andrey9019.github.io/goit-react-hw-04-images/',
        'https://github.com/Andrey9019/goit-react-hw-04-images',
      ],
    },
    {
      image: tastyTreats,
      heading: 'Tasty Treats',
      skills: 'JavaScript  - Vite - Axios ',
      description: `"TastyTreats" is a project developed in a team collaboration, where my role was a front-end developer. The project's goal is to provide customers with the ability to find dishes by searching or filtering, as well as watch video cooking instructions and add dishes to their favourites. "TastyTreats is a handy tool for those who want to find ideas for dishes and see how to cook them, all with ease and convenience.
 `,
      links: [
        'https://valeriia-trytiak.github.io/project_01_Taste_Masters_Team/',
        'https://github.com/Valeriia-Trytiak/project_01_Taste_Masters_Team',
      ],
    },
    // {
    //   image: CatsSearch,
    //   heading: 'Cat breeds',
    //   skills: 'Java script - Modern Normalize - Parcel - Slim Select',
    //   description:
    //     'This is a website that allows you to search and learn about different cat breeds. The user can select a breed from a predefined list, and an image of the breed is displayed on the screen, along with a short description.',
    //   links: [
    //     'https://andrey9019.github.io/goit-js-hw-10/',
    //     'https://github.com/Andrey9019/goit-js-hw-10',
    //   ],
    // },
    // {
    //   image: weatherWidget,
    //   heading: 'weather widget',
    //   skills: 'Java script - css',
    //   description: 'A small widget about the weather in my home place.',
    //   links: ['https://andrey9019.github.io/weather-widget/'],
    // },
  ];

  return (
    <section id="projects" className=" container ">
      <h2 className="text-lg font-bold mb-4 uppercase  text-center">
        Projects
      </h2>
      <p className=" text-3xl mb-16 sm:text-5xl text-center">
        Curious What I've Done?
      </p>
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
