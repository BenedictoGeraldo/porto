import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <About />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </>
  );
}

export default App;