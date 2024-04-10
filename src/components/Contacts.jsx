import { FaEnvelope, FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa';

export const Contacts = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center">
      <h2 className="text-3xl  mb-4">Contact Me</h2>
      <p className=" text-center mb-8">by email or social media</p>
      <div className="flex space-x-4 ">
        <a
          href="mailto:youremail@example.com"
          className=" hover:text-gray-400 transition duration-300"
        >
          Email
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-gray-400 transition duration-300"
        >
          LinkedIn
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-gray-400 transition duration-300"
        >
          Telegram
          <FaTelegram />
        </a>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-gray-400 transition duration-300"
        >
          GitHub
          <FaGithub />
        </a>
      </div>
    </section>
  );
};
