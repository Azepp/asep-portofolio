import { Element, Link } from "react-scroll";
import { motion } from "framer-motion";
import imgZidane from "../assets/img/zidane.png";
import AnimatedBg from "../components/bgGradient";
import waveEmoji from "../assets/icon/waving-hand-emoji.png";
import containerVariants from "../animations/containerVariants";
import fadeUpVariants from "../animations/fadeUpVariants";
import buttonVariants from "../animations/buttonVariants";
import waveVariants from "../animations/waveVariants";
import slideLeftVariants from "../animations/slideLeftVariants";
import slideRightVariants from "../animations/slideRightVariants";
import scaleUpVariants from "../animations/scaleUpVariants";
import useIsInView from "../hooks/useInView";

const Home = () => {
  const { ref, isInView } = useIsInView(0.3, false);

  return (
    <Element name="home" id="home" className="relative h-[100vh] py-4 flex justify-center items-center pt-[80px] scroll-mt-[80px]">
      <motion.div ref={ref} className="flex flex-col justify-between h-full items-stretch w-full" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        {/* Top Text Section */}
        <motion.div className="top-text flex justify-between" variants={fadeUpVariants}>
          <motion.h1 className="text-2xl sm:text-3xl md:text-4xl" variants={slideLeftVariants}>
            FRONT END <br /> DEVELOPER
          </motion.h1>
          <motion.h1 className="text-2xl sm:text-3xl md:text-4xl text-right" variants={slideRightVariants}>
            UI/UX & <br /> WEB DESIGN
          </motion.h1>
        </motion.div>

        <AnimatedBg />

        {/* Zidane Image */}
        <motion.img src={imgZidane} alt="" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[378px] md:w-[478px]" variants={scaleUpVariants} />

        {/* Middle Text Section - Hey There & I'm Zidane */}
        <motion.div className="top-text flex items-center justify-between mb-72 md:mb-24" variants={fadeUpVariants}>
          <motion.h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold flex items-center" variants={slideLeftVariants}>
            Hey There{" "}
            <motion.span variants={waveVariants}>
              <img src={waveEmoji} alt="" className="md:ms-2 w-8 md:w-16" />
            </motion.span>
          </motion.h1>
          <motion.h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold" variants={slideRightVariants}>
            I'm Zidane
          </motion.h1>
        </motion.div>

        {/* Bottom Section */}
        <motion.div className="top-text flex justify-end md:justify-between items-end" variants={fadeUpVariants}>
          <motion.h1 className="hidden lg:inline md:text-sm" variants={slideLeftVariants}>
            Turning ideas into pixel-perfect <br /> websites, Based in Indonesia, <br /> focused on UI/UX & front-end dev.
          </motion.h1>
          <Link to="work" spy={true} smooth={true} offset={-10} duration={500} className="cursor-pointer z-20">
            <motion.div className="py-2.5 px-6 bg-black text-white md:text-md rounded-full hover:text-black hover:bg-yellow-400" variants={buttonVariants} whileHover="hover" whileTap="tap">
              Check My Work 🚀
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </Element>
  );
};

export default Home;
