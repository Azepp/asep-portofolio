import { Element } from "react-scroll";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import containerVariants from "../animations/containerVariants";
import slideDownVariants from "../animations/slideDownVariants";
import slideUpVariants from "../animations/slideUpVariants";
import imgAbout from "../assets/img/zidane.png";
import { FaRegCircleCheck } from "react-icons/fa6";
import useIsInView from "../hooks/useInView";

const About = () => {
  const { ref, hasBeenInView } = useIsInView(0.2);

  return (
    <Element name="about" id="about" className="pt-[120px]">
      <motion.div ref={ref} className="flex flex-col gap-6 lg:grid grid-cols-2" variants={containerVariants} initial="hidden" animate={hasBeenInView ? "visible" : "hidden"}>
        <motion.div variants={slideUpVariants} className="flex justify-center h-[300px] md:h-[40vh] lg:h-[90vh]">
          <img src={imgAbout} alt="About AsepStudio" className="object-contain rounded-md" />
        </motion.div>

        <div className="title flex flex-col justify-center gap-4 lg:pe-16">
          <motion.h1 variants={slideDownVariants} className="text-3xl md:text-5xl font-semibold tracking-tighter">
            Tentang AsepStudio.
          </motion.h1>
          <motion.p className="text-sm md:text-lg text-justify" variants={slideUpVariants}>
            AsepStudio adalah layanan pembuatan website yang didirikan oleh Zidane Athallah Winata, seorang Web Designer dan Developer yang berfokus membantu bisnis membangun kehadiran digital yang profesional.
            <br />
            <br />
            Kami membantu berbagai bisnis dan brand memiliki website yang modern, jelas, dan mudah dipahami oleh pelanggan. Setiap website dirancang tidak hanya untuk terlihat menarik, tetapi juga untuk memperkuat kepercayaan terhadap brand
            di dunia online.
            <br />
            <br />
            Dengan pengalaman membangun berbagai jenis website seperti company profile, landing page, dan website bisnis, AsepStudio siap membantu Anda memiliki website yang:
          </motion.p>
          <motion.ul variants={slideUpVariants} className="flex flex-col gap-2 mt-2 md:text-lg">
            <li className="flex items-center gap-2">
              <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Desain modern dan profesional
            </li>
            <li className="flex items-center gap-2">
              <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Responsif di semua perangkat
            </li>
            <li className="flex items-center gap-2">
              <FaRegCircleCheck className="shrink-0 text-lg text-green-600" /> Dibangun sesuai kebutuhan bisnis Anda
            </li>
          </motion.ul>
        </div>
      </motion.div>
    </Element>
  );
};

export default About;
