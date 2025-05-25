import { Element } from "react-scroll";
import { motion } from "framer-motion";
import containerVariants from "../animations/containerVariants";
import slideDownVariants from "../animations/slideDownVariants";
import workList from "../constants/workList";

const Work = () => {
  return (
    <Element name="work" id="work" className="pt-[80px]">
      <motion.div className="flex flex-col gap-8" variants={containerVariants}>
        <motion.h1 variants={slideDownVariants} className="text-center text-3xl md:text-5xl font-semibold">
          Featured Work
        </motion.h1>

        <div className="grid grid-cols-12 gap-6">
          {workList.map((work, index) => (
            <a
              href={work.link}
              target="_blank"
              key={index}
              className={`col-span-12 ${work.col} py-4.5 px-4 flex flex-col justify-end bg-no-repeat bg-center bg-cover h-[278px] md:h-[400px] rounded-md`}
              style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 66.76%, #000 100%), url(${work.image})` }}
            >
              <div className="text-neutral-50">
                <h1 className="text-xl md:text-3xl font-semibold">{work.name}</h1>
                <p className="text-sm md:text-base">{work.category}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </Element>
  );
};

export default Work;
