import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/header';
import Quotes from './components/Quotes';
import Skills from './components/Skills';
import Projects from './components/Projects';
import NumberWrapper from './components/NumberWrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <Header/>
      </section>
      <section className = "intro">
        <Intro/>
      </section>
      <section className = "aboutMe" id = "about">
        <AboutMe/>
      </section>
      <section className = "numberWrapper">
      <NumberWrapper/>
      </section>
      <section className = "skills" id = "skills">
        <Skills/>
      </section>
      <section>
        <Projects/>
      </section>
      <section className = "quotes" id = "quotes" >
        <Quotes/>
      </section>
      <section className = "footer" id="coffee">
        <Footer/>
      </section>
    </div>
  );
}

export default App;
