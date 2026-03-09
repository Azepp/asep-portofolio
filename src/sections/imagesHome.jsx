import { useRef, useEffect } from "react";
import imagesHomeList from "../constants/imagesHomeList";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import useIsInView from "../hooks/useInView";

const ImagesHome = ({ gap = "24px", cardHeight = "300px" }) => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  const { ref, hasBeenInView } = useIsInView(0.2);

  const items = [...imagesHomeList, ...imagesHomeList];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current -= speed;
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(posRef.current) >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const handleWheel = (e) => {
    e.preventDefault();
    const track = trackRef.current;
    if (!track) return;

    const delta = e.deltaX;
    if (delta === 0) return;
    posRef.current -= delta * 1.5;

    const halfWidth = track.scrollWidth / 2;
    if (posRef.current > 0) {
      posRef.current = -halfWidth + posRef.current;
    } else if (Math.abs(posRef.current) >= halfWidth) {
      posRef.current = posRef.current + halfWidth;
    }

    track.style.transform = `translateX(${posRef.current}px)`;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={hasBeenInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="overflow-hidden images-home"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onWheel={handleWheel}
    >
      <div ref={trackRef} className="flex w-max" style={{ willChange: "transform", gap }}>
        {items.map((work, index) => (
          <a
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="relative flex-shrink-0 overflow-hidden rounded-md group"
            style={{
              width: work.width ?? "400px",
              height: work.height ?? cardHeight,
              marginLeft: work.marginLeft ?? "0px",
              marginRight: work.marginRight ?? "0px",
              marginTop: work.offsetY ?? "0px",
            }}
          >
            <img src={work.image} alt={work.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="mt-4 border border-white text-white w-32 h-32 flex flex-col justify-center items-center font-medium rounded-full hover:bg-white hover:text-black transition-colors duration-200">
                <MdOutlineArrowOutward className="text-2xl" />
                Lihat Detail
              </span>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default ImagesHome;