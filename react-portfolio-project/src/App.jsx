import styles from './App.module.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Hello } from './components/Hello/Hello';
import { Navbar } from './components/Navbar/Navbar';
import { Project } from './components/Project/Project';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hello />
      <About />
      <Experience />
      <Project />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
