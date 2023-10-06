import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import image from "./assets/solar.jpg";

function App() {
  return (
    <div className="back">
      <img src={image} alt="" className="back-img" />
      <Header />
      <Hero />

      <Footer />
    </div>
  );
}

export default App;
