import styles from './App.module.css';
import { About } from './components/About/About';
import Experiance from './components/Experience/Experience';
import { Hello } from './components/Hello/Hello';
import { Navbar } from './components/Navbar/Navbar';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hello />
      <About />
      <Experiance />
    </div>
  );
}

export default App;
