
import Test from "./Test";
import "./app.scss"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">
      <Parallax type="services"/>
    </section>
    <section id="About">
      <Services/>
    </section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    {/* <section>Portfolio1</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section> */}
    <section id="Contact">
      <Contact/>
    </section>



  </div>;
};

export default App;
