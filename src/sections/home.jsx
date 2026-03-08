import { Element, Link } from "react-scroll";
import { motion } from "framer-motion";
import AnimatedBg from "../components/bgGradient";
import containerVariants from "../animations/containerVariants";
import fadeUpVariants from "../animations/fadeUpVariants";
import buttonVariants from "../animations/buttonVariants";
import useIsInView from "../hooks/useInView";
import { FaWhatsapp } from "react-icons/fa";
import slideUpVariants from "../animations/slideUpVariants";
import slideDownVariants from "../animations/slideDownVariants";

const Home = () => {
  const { ref, hasBeenInView } = useIsInView(0.3);

  return (
    <Element name="home" id="home" className="relative h-[80vh] py-4 flex justify-center items-center pt-[100px] scroll-mt-[80px]">
      <motion.div ref={ref} className="flex flex-col justify-center h-full items-stretch w-full" variants={containerVariants} initial="hidden" animate={hasBeenInView ? "visible" : "hidden"}>
        <AnimatedBg />

        <motion.div className="top-text flex flex-col gap-6 items-center justify-center mb-12" variants={fadeUpVariants}>
          <motion.h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold flex items-center tracking-tighter" variants={slideDownVariants}>
            Website Profesional untuk <br /> Bisnis yang Ingin Naik Level{" "}
          </motion.h1>
          <motion.p className="  md:text-lg text-center" variants={slideUpVariants}>
            AsepStudio membantu bisnis dan brand membangun website modern <br className="hidden md:inline"/> yang meningkatkan kepercayaan pelanggan dan memperkuat kehadiran digital mereka.{" "}
          </motion.p>
        </motion.div>

        {/* Bottom Section */}
        <motion.div className="top-text flex gap-4 justify-center items-end" variants={fadeUpVariants}>
          <Link to="work" spy={true} smooth={true} offset={-10} duration={500} className="cursor-pointer z-20">
            <motion.div className="py-4 px-6 bg-black flex gap-1 text-white font-medium md:text-md rounded-full hover:text-black hover:bg-yellow-400" variants={buttonVariants} whileHover="hover" whileTap="tap">
              <FaWhatsapp className="text-2xl" />
              Konsultasi Sekarang
            </motion.div>
          </Link>
          <Link to="work" spy={true} smooth={true} offset={-10} duration={500} className="cursor-pointer z-20">
            <motion.div className="py-4 px-6 border border-black text-black font-medium md:text-md rounded-full hover:text-black hover:bg-yellow-400" variants={buttonVariants} whileHover="hover" whileTap="tap">
              🚀 Lihat Portofolio
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </Element>
  );
};

export default Home;
