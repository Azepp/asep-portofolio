import { useEffect, useState, useRef } from "react";
import navLinks from "../constants/navLinks";
import { Link } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";
import { HiBars2 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";

function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isBottom, setIsBottom] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const rafRef = useRef(null);
  const handleClick = () => window.open("https://wa.me/6281298298245?text=Halo%20Asep%2C%20saya%20tertarik%20dengan%20layanan%20pembuatan%20website%20untuk%20bisnis%20saya.%20Boleh%20konsultasi%3F", "_blank");

  useEffect(() => {
    const checkBreakpoint = () => {
      const w = window.innerWidth;
      setIsMobile(w < 640);
      setIsTablet(w >= 640 && w < 1024);
    };
    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        const progress = Math.min(scrollTop / 120, 1);
        setScrollProgress(progress);
        setIsBottom(scrollTop + windowHeight >= fullHeight - 10);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isMobile && !isTablet) setIsMenuOpen(false);
  }, [isMobile, isTablet]);

  const lerp = (a, b, t) => a + (b - a) * t;
  const isSmallNav = isMobile || isTablet;
  const bgColor = isBottom ? `rgba(234,179,8,1)` : `rgba(255,255,255,${scrollProgress})`;
  const shadow = `0 ${lerp(0, 8, scrollProgress)}px ${lerp(0, 32, scrollProgress)}px rgba(0,0,0,${lerp(0, 0.15, scrollProgress)})`;

  // ── Desktop: morph dari full-width ke pill ──
  const desktopStyles = !isSmallNav
    ? {
        width: `${lerp(100, 28, scrollProgress)}%`,
        top: `${lerp(0, 16, scrollProgress)}px`,
        left: "50%",
        transform: "translateX(-50%)",
        paddingLeft: `${lerp(72, 24, scrollProgress)}px`,
        paddingRight: `${lerp(72, 16, scrollProgress)}px`,
        paddingTop: "16px",
        paddingBottom: "16px",
        borderRadius: "3rem",
        backgroundColor: bgColor,
        boxShadow: shadow,
      }
    : {};

  // ── Tablet: morph dari full-width ke pill 40% ──
  const tabletStyles = isTablet
    ? {
        width: `${lerp(100, 40, scrollProgress)}%`,
        top: `${lerp(0, 12, scrollProgress)}px`,
        left: "50%",
        transform: "translateX(-50%)",
        paddingLeft: isMenuOpen ? "24px" : `${lerp(24, 16, scrollProgress)}px`,
        paddingRight: isMenuOpen ? "24px" : `${lerp(24, 16, scrollProgress)}px`,
        paddingTop: "16px",
        paddingBottom: "16px",
        borderRadius: "3rem",
        backgroundColor: isBottom
          ? `rgba(234,179,8,1)`
          : isMenuOpen
            ? `rgba(255,255,255,1)` // ← sama
            : `rgba(255,255,255,${scrollProgress})`,
        boxShadow: shadow,
      }
    : {};

  // ── Mobile: pill, width tetap 90% ──
  const mobileStyles = isMobile
    ? {
        width: `${lerp(100, 94, scrollProgress)}%`,
        top: `${lerp(4, 12, scrollProgress)}px`,
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "3rem",
        backgroundColor: isBottom
          ? `rgba(234,179,8,1)`
          : isMenuOpen
            ? `rgba(255,255,255,1)` // ← putih solid kalau menu terbuka
            : `rgba(255,255,255,${Math.max(scrollProgress, 0)})`,
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingTop: "16px",
        paddingBottom: "16px",
        boxShadow: shadow,
      }
    : {};

  const navStyle = isMobile ? mobileStyles : isTablet ? tabletStyles : desktopStyles;

  const fullNavOpacity = isSmallNav ? 0 : Math.max(0, 1 - scrollProgress * 2.5);
  const pillNavOpacity = isSmallNav ? 1 : Math.max(0, scrollProgress * 2.5 - 1);

  return (
    <div>
      <nav style={{ position: "fixed", zIndex: 50, ...navStyle }}>
        <div className="flex justify-between items-center w-full relative">
          {/* ── Logo ── */}
          <Link to="home" spy smooth offset={-70} duration={500} onClick={() => setIsMenuOpen(false)} className="cursor-pointer text-xl md:text-2xl font-bold flex-shrink-0 z-10 text-black">
            AsepStudio.
          </Link>

          {/* ── Desktop: Nav links tengah (fade out) ── */}
          {!isSmallNav && (
            <div
              style={{
                opacity: fullNavOpacity,
                pointerEvents: fullNavOpacity < 0.05 ? "none" : "auto",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                whiteSpace: "nowrap",
              }}
            >
              <ul className="flex gap-6">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.id}
                      spy
                      smooth
                      offset={-10}
                      duration={500}
                      activeClass="active"
                      className="cursor-pointer relative md:text-base text-black
                        before:content-[''] before:absolute before:bottom-[-6px] before:left-0
                        before:w-0 before:h-[2px] before:bg-custom-yellow
                        hover:before:w-full before:transition-all before:duration-300
                        active:before:w-full active:before:left-0"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ── Desktop: CTA (fade out) + Hamburger (fade in) ── */}
          {!isSmallNav && (
            <div className="flex items-center z-10">
              {/* CTA — fade out */}
              <div
                style={{
                  opacity: fullNavOpacity,
                  pointerEvents: fullNavOpacity < 0.05 ? "none" : "auto",
                  position: fullNavOpacity < 0.05 ? "absolute" : "relative",
                }}
              >
                <button
                  to="contact"
                  spy
                  smooth
                  offset={-10}
                  duration={500}
                  onClick={handleClick}
                  className={`cursor-pointer py-3 flex gap-1 items-center px-6 font-semibold rounded-full
                    hover:scale-105 transition-all duration-150
                    ${isBottom ? "bg-black text-white hover:bg-gray-800" : "bg-black text-white hover:text-black hover:bg-yellow-400"}`}
                >
                  <FaWhatsapp className="text-xl" />
                  Konsultasi
                </button>
              </div>

              {/* Hamburger — fade in */}
              <div
                style={{
                  opacity: pillNavOpacity,
                  pointerEvents: pillNavOpacity < 0.05 ? "none" : "auto",
                  position: pillNavOpacity < 0.05 ? "absolute" : "relative",
                }}
              >
                <button className="cursor-pointer p-1" onClick={() => setIsMenuOpen((prev) => !prev)} aria-label="Toggle menu">
                  {isMenuOpen ? <CgClose className="text-3xl text-black" /> : <HiBars2 className="text-3xl text-black" />}
                </button>
              </div>
            </div>
          )}

          {/* ── Mobile & Tablet: Hamburger ── */}
          {isSmallNav && (
            <button className="cursor-pointer p-1" onClick={() => setIsMenuOpen((prev) => !prev)} aria-label="Toggle menu">
              {isMenuOpen ? <CgClose className="text-3xl text-black" /> : <HiBars2 className="text-3xl text-black" />}
            </button>
          )}
        </div>

        {/* ── Dropdown menu ── */}
        <div
          style={{
            overflow: "hidden",
            maxHeight: isMenuOpen ? "400px" : "0px",
            opacity: isMenuOpen ? 1 : 0,
            marginTop: isMenuOpen ? "16px" : "0px",
            transition: "max-height 0.4s ease, opacity 0.3s ease, margin-top 0.3s ease",
          }}
        >
          <hr className="border-black/20 mb-4" />
          <ul className="flex flex-col gap-3 mb-4">
            {navLinks.map((link, i) => (
              <li
                key={link.id}
                style={{
                  transitionDelay: isMenuOpen ? `${i * 60}ms` : "0ms",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transform: isMenuOpen ? "translateY(0)" : "translateY(-8px)",
                  opacity: isMenuOpen ? 1 : 0,
                }}
              >
                <Link
                  to={link.id}
                  spy
                  smooth
                  offset={-10}
                  duration={500}
                  activeClass="active"
                  onClick={() => setIsMenuOpen(false)}
                  className={`cursor-pointer font-medium relative
                    before:content-[''] before:absolute before:bottom-[-4px] before:left-0
                    before:w-0 before:h-[2px] before:bg-black
                    hover:before:w-full before:transition-all before:duration-300
                    active:before:w-full
                    ${isBottom ? "text-black" : "text-black"}`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            to="contact"
            spy
            smooth
            offset={-10}
            duration={500}
            onClick={handleClick}
            className={`cursor-pointer w-full py-3 flex gap-2 items-center justify-center
              font-semibold rounded-full transition-all duration-150
              ${isBottom ? "bg-white text-black hover:bg-black hover:text-white" : "bg-black text-white hover:bg-yellow-400 hover:text-black"}`}
          >
            <FaWhatsapp className="text-xl" />
            Konsultasi
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
