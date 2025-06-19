import { BrowserRouter, Route, Router } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Route>
            <Navbar />
          </Route>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
