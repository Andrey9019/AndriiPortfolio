import React from 'react';
import ProjectCard from './ProjectCard';

import MovieSearch from '../img/trendingMovie.jpg';
import ImageSearch from '../img/searchImages.jpg';
import CatsSearch from '../img/searchCats.jpg';
import weatherWidget from '../img/weather.jpg';
import taskPro from '../img/taskPro.jpg';

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
      image: CatsSearch,
      heading: 'Cat breeds',
      skills: 'Java script - Modern Normalize - Parcel - Slim Select',
      description:
        'This is a website that allows you to search and learn about different cat breeds. The user can select a breed from a predefined list, and an image of the breed is displayed on the screen, along with a short description.',
      links: [
        'https://andrey9019.github.io/goit-js-hw-10/',
        'https://github.com/Andrey9019/goit-js-hw-10',
      ],
    },
    {
      image: weatherWidget,
      heading: 'weather widget',
      skills: 'Java script - css',
      description: 'A small widget about the weather in my home place.',
      links: ['https://andrey9019.github.io/weather-widget/'],
    },
    {
      image: taskPro,
      heading: 'Task Pro',
      skills: 'TypeScript - React - Tailwind ',
      description: 'A small widget about the weather in my home place.',
      links: [
        'https://andrey9019.github.io/weather-widget/',
        'https://andrey9019.github.io/weather-widget/',
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
