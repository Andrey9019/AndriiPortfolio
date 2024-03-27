import { AboutSkills } from './AboutSkills';

export const About = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
          alt="my face"
          className="w-32 h-32 rounded-full"
        />
      </div>
      <h2 className="text-center text-lg font-semibold mb-2 uppercase">
        About me
      </h2>
      <h3 className="text-center text-2xl text-700 text-[#f4d000] font-bold mb-4">
        Hey, I'm Andrey
      </h3>
      <p className="text-center text-sm  mb-4">
        Aspiring to thrive in the dynamic IT world, I am poised to embrace the
        challenges of a new field. Fueled by a relentless passion for learning
        and a knack for solving complex problems, my journey has been marked by
        successful projects. These experiences have equipped me for the
        exhilarating path of a front-end developer.
      </p>
      <a
        href="/"
        className="block self-start text-center bg-blue-500 py-2 px-4 rounded-md mx-auto mb-4 hover:bg-blue-600 focus:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        View Resume
      </a>
      <AboutSkills />
    </div>
  );
};
