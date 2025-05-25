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

const Contact = () => {
  const { ref, isInView } = useIsInView(0.3, false);

  return (
    <Element name="contact" id="contact" className="bg-black h-[100vh] mt-[80px] pt-[80px] flex justify-center items-center px-4 md:px-6 lg:px-18 relative">
      <motion.div className="flex flex-col gap-14" ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <motion.img variants={slideRightVariants} src={elipseTop} alt="" className="absolute top-0 right-0 w-[128px] md:w-[256px]" />
        <motion.img variants={slideLeftVariants} src={elipseBottom} alt="" className="absolute bottom-0 left-0 w-[128px] md:w-[256px]" />

        <motion.h1 variants={slideDownVariants} className="text-4xl md:text-7xl font-bold text-center text-custom-yellow">
          Let’s start <br /> Project Together?
        </motion.h1>

        <motion.p variants={fadeUpVariants} className="text-white text-base md:text-lg text-center">
          {`Feel free to reach out for collaborations, freelance work, or even just a friendly chat.`}
          <br />
          {` Appreciate your time stopping by — let’s create something amazing together.`}
        </motion.p>

        <motion.div variants={fadeUpVariants}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=zidanathallahwinata@gmail.com&su=Collaboration%20Inquiry&body=Dear%20Zidane%2C%0A%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20am%20reaching%20out%20to%20discuss%20a%20potential%20collaboration.%20Let%20me%20know%20your%20availability.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer z-20 flex justify-center"
          >
            <motion.div className="py-2.5 px-6 w-fit md:text-2xl font-semibold md:text-md rounded-full bg-custom-yellow text-black" variants={buttonVariants} whileHover="hover" whileTap="tap">
              zidanathallahwinata@gmail.com
            </motion.div>
          </a>
        </motion.div>

        <motion.div variants={fadeUpVariants} className="flex gap-10 md:gap-12 justify-center md:text-2xl">
          {contactList.map((contact, index) => (
            <a
              href={contact.url}
              target="_blank"
              key={index}
              className="cursor-pointer z-20 flex justify-center text-white relative transition-colors duration-200
             text-sm md:text-base 
             before:content-[''] before:absolute before:bottom-[-6px] before:left-0 
             before:w-0 before:h-[2px] before:bg-custom-yellow 
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
