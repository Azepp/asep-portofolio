import Navbar from "./components/navbar";
import About from "./sections/about";
import Contact from "./sections/contact";
import Home from "./sections/home";
import ImagesHome from "./sections/imagesHome";
import Service from "./sections/service";
import Work from "./sections/work";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="layout mx-4 md:mx-6 lg:mx-18">
        <Home />
      </div>
      <ImagesHome />
      <div className="layout mx-4 md:mx-6 lg:mx-18">
        <About />
        <Service />
        <Work />
      </div>
      <Contact />
    </div>
  );
}

export default App;
