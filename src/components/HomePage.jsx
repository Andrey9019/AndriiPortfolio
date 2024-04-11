import { Header } from './Header';
import { About } from './About';
import { Projects } from './Projects';
import { Contacts } from './Contacts';

export const HomePage = () => {
  return (
    <main>
      <Header />
      <About />
      <Projects />
      <Contacts />
    </main>
  );
};
