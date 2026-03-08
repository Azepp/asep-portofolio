import { useEffect, useState } from "react";
import navLinks from "../constants/navLinks";
import { Link } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setIsScrolled(scrollTop > 50);
      setIsBottom(scrollTop + windowHeight >= fullHeight - 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      {/* Dekstop Navbar */}
      <nav className={`sm:h-fit fixed top-0 w-full px-4 md:px-6 lg:px-18 transition-all duration-200 ${isBottom ? "bg-black text-white" : isScrolled ? "bg-white text-black" : "text-black"} flex justify-between items-center py-4 z-40`}>
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className={`${isBottom ? "text-custom-yellow" : "text-black"} cursor-pointer text-xl md:text-2xl font-bold`}>
          AsepStudio.
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                  activeClass="active"
                  className="cursor-pointer relative transition-colors duration-200
             text-sm md:text-base
             before:content-[''] before:absolute before:bottom-[-6px] before:left-0 
             before:w-0 before:h-[2px] before:bg-custom-yellow 
             hover:before:w-full before:transition-all before:duration-300
             hover:before:right-0 before:right-auto
             active:before:w-full
             active:before:left-0
            "
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className={`cursor-pointer py-3 flex gap-1 items-center px-6 font-semibold ${
              isBottom ? "bg-custom-yellow text-black hover:text-black hover:bg-yellow-400" : "bg-black text-white hover:text-black hover:bg-yellow-400"
            } md:text-md rounded-full hover:scale-105 hover:duration-150 hover:ease-in active:scale-100 `}
          >
            <FaWhatsapp className="text-2xl" />
            Konsultasi
          </Link>
        </div>
      </nav>

      <ul className={`md:hidden fixed bg-black text-white transition-all duration-200 ease-in-out ${isBottom ? "bottom-0 left-0 right-0" : "bottom-6 left-4 right-4 rounded-full"} flex justify-between px-7 py-3 z-40`}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link to={link.id} spy={true} smooth={true} offset={0} duration={500} activeClass="active" className="cursor-pointer flex flex-col items-center text-xs hover:text-custom-yellow active:text-custom-yellow">
              <span className="text-xl">{link.icon}</span>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
