import { AboutSkills } from './AboutSkills';
import face from '../img/face.jpg';
export const About = () => {
  return (
    <section id="about" className="container ">
      <div className="flex flex-col items-center mb-4 mt-16 lg:flex-row lg:items-start lg:justify-center">
        <img
          src={face}
          alt="my face"
          className="w-32 h-32 rounded-full sm:w-48 sm:h-48 lg:w-96 lg:h-96 lg:mr-8"
        />
        <div className="block text-center lg:text-left">
          <h2 className="text-lg font-semibold mb-2 uppercase">About me</h2>
          <h3 className="text-2xl text-700 text-[#5851db] font-bold mb-4">
            Hey, I'm Andrey
          </h3>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            Aspiring to thrive in the dynamic IT world, I am poised to embrace
            the challenges of a new field. Fueled by a relentless passion for
            learning and a knack for solving complex problems, my journey has
            been marked by successful projects. These experiences have equipped
            me for the exhilarating path of a front-end developer.
          </p>
          <a
            href="https://drive.google.com/file/d/1ONE2ZJNtkV8SLCepO07LXRO07Wpy55oe/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            View Resume
          </a>
          <a
            href="https://drive.google.com/file/d/1R_2b_nAOdj6Rnyx7mfENnX2CNef14I8N/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button "
          >
            Сertificate of training
          </a>
        </div>
      </div>
      <AboutSkills />
    </section>
  );
};
