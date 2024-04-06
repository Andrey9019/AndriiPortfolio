export const Contacts = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center">
      <h2 className="text-3xl text-white mb-4">Contact Me</h2>
      <p className="text-white text-center mb-8">by email or social media</p>
      <div className="flex space-x-4">
        <a
          href="mailto:youremail@example.com"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          Telegram
        </a>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};
