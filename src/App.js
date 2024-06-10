import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { SkipBackward } from 'react-bootstrap-icons';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Education } from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
