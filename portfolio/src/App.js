import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/header';
import Quotes from './components/Quotes';
import Skills from './components/Skills';
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
      <section className = "aboutMe">
        <AboutMe/>
      </section>
      <section className = "skills">
        <Skills/>
      </section>
      <section className = "quotes">
        <Quotes/>
      </section>
      <section className = "skills"></section>
      <section className = "footer">
        <Footer/>
      </section>
    </div>
  );
}

export default App;
