
import { Route, Router } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blogs from './components/Blogs';
// import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Hero></Hero>
      {/* <Brands></Brands> */}
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Services></Services>
      <Testimonials></Testimonials>

      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
