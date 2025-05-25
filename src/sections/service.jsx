import { Element } from "react-scroll";
import serviceList from "../constants/serviceList";
import useIsInView from "../hooks/useInView";
import { motion } from "framer-motion";
import containerVariants from "../animations/containerVariants";
import slideUpVariants from "../animations/slideUpVariants";
import slideDownVariants from "../animations/slideDownVariants";

const Service = () => {
  const { ref, isInView } = useIsInView(0.2, false);

  return (
    <Element name="service" id="service" className="scroll-mt-[280px] pt-[80px]">
      <motion.div className="flex flex-col gap-16" ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <motion.h1 variants={slideDownVariants} className="text-center text-3xl md:text-5xl font-semibold">
          What can I do for you
        </motion.h1>

        <motion.div variants={slideUpVariants} className="grid lg:grid-cols-3 gap-6">
          {serviceList.map((service, index) => (
            <motion.div variants={service.animation} key={index} className="flex flex-col gap-42 border-s-3 border-neutral-400 ps-4 py-4">
              <h1 className="text-5xl font-semibold text-neutral-400">0{index + 1}</h1>

              <div className="bottom">
                <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Element>
  );
};

export default Service;
