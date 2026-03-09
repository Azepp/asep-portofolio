import { Element, Link } from "react-scroll";
import { motion } from "framer-motion";
import useIsInView from "../hooks/useInView";
import containerVariants from "../animations/containerVariants";
import buttonVariants from "../animations/buttonVariants";
import contactList from "../constants/contactList";
import elipseTop from "../assets/img/contact/elipseTop.png";
import elipseBottom from "../assets/img/contact/elipseBottom.png";
import slideRightVariants from "../animations/slideRightVariants";
import slideLeftVariants from "../animations/slideLeftVariants";
import slideDownVariants from "../animations/slideDownVariants";
import fadeUpVariants from "../animations/fadeUpVariants";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const { ref, hasBeenInView } = useIsInView(0.3);
  const handleClick = () => window.open("https://wa.me/6281298298245?text=Halo%20Asep%2C%20saya%20tertarik%20dengan%20layanan%20web%20design%20untuk%20bisnis%20saya.%20Boleh%20konsultasi%3F", "_blank");

  return (
    <Element name="contact" id="contact" className="bg-black h-[100vh] mt-[80px] pt-[80px] flex justify-center items-center px-4 md:px-6 lg:px-18 relative">
      <motion.div className="flex flex-col gap-14" ref={ref} variants={containerVariants} initial="hidden" animate={hasBeenInView ? "visible" : "hidden"}>
        <motion.img variants={slideRightVariants} src={elipseTop} alt="" className="absolute top-0 right-0 w-[128px] md:w-[256px] hidden md:block" />
        <motion.img variants={slideLeftVariants} src={elipseBottom} alt="" className="absolute bottom-0 left-0 w-[128px] md:w-[256px] hidden md:block" />

        <motion.h1 variants={slideDownVariants} className="text-4xl md:text-7xl font-bold text-center text-custom-yellow">
          Siap Membangun <br className="hidden md:block" /> Website untuk Bisnis Anda?
        </motion.h1>

        <motion.p variants={fadeUpVariants} className="text-white text-base md:text-lg text-center">
          AsepStudio membantu bisnis membangun website modern yang <br className="hidden md:block" /> tidak hanya terlihat profesional, tetapi juga memperkuat brand <br className="hidden md:block" /> dan meningkatkan kepercayaan pelanggan.
        </motion.p>

        <motion.div variants={fadeUpVariants} className="flex justify-center">
          <button onClick={handleClick} className="cursor-pointer z-20">
            <motion.div className="flex gap-2 items-center py-4 px-6 w-fit md:text-xl font-semibold rounded-full bg-custom-yellow text-black" variants={buttonVariants} whileHover="hover" whileTap="tap">
              <FaWhatsapp className="text-3xl" />
              Konsultasi Sekarang
            </motion.div>
          </button>
        </motion.div>

        <motion.div variants={fadeUpVariants} className="flex gap-10 md:gap-12 justify-center text-base md:text-lg">
          {contactList.map((contact, index) => (
            <a
              href={contact.url}
              target="_blank"
              key={index}
              className="cursor-pointer z-20 flex justify-center text-white relative transition-colors duration-200
before:content-[''] before:absolute before:bottom-[-6px] before:left-0 
before:w-0 before:h-[3px] before:bg-custom-yellow 
hover:before:w-full before:transition-all before:duration-300
hover:before:right-0 before:right-auto
active:before:w-full
active:before:left-0"
            >
              {contact.name}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </Element>
  );
};

export default Contact;
