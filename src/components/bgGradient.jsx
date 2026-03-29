import { useState, useEffect } from "react";

export default function AnimatedBgWrapper() {
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi ukuran layar
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px adalah breakpoint md di Tailwind
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    const center = window.innerWidth / 2;
    setDirection(e.clientX > center ? -1 : 1);
  };

  const handleMouseLeave = () => {
    setDirection(0);
  };

  // Tentukan jarak transform berdasarkan ukuran layar
  const transformDistance = isMobile ? 148 : 548;

  return (
    <>
      {/* Ini bagian yang bisa di-hover (tanpa z-index negatif) */}
      <div className="absolute inset-0 z-10" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}></div>

      {/* Ini background yang bergerak (z-index rendah) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full h-full -z-40 flex items-center justify-center pointer-events-none">
        <div
          className="h-1/4 w-1/2 bg-yellow-400 mb-36 blur-[128px] transition-transform duration-500"
          style={{
            transform: `translateX(${direction * transformDistance}px)`,
            transitionDuration: "1500ms",
          }}
        ></div>
      </div>
    </>
  );
}
