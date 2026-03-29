import { useState } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars
import containerVariants from "../animations/containerVariants";
import slideDownVariants from "../animations/slideDownVariants";
import slideUpVariants from "../animations/slideUpVariants";
import buttonVariants from "../animations/buttonVariants";
import useIsInView from "../hooks/useInView";
import workList from "../constants/workList";

const Work = () => {
  const { ref, hasBeenInView } = useIsInView(0.3);
  const [showAll, setShowAll] = useState(false);
  const visibleWork = showAll ? workList : workList.slice(0, 4);

  return (
    <Element name="work" id="work" className="pt-[80px]">
      <motion.div ref={ref} className="flex flex-col gap-8 items-center" variants={containerVariants} initial="hidden" animate={hasBeenInView ? "visible" : "hidden"}>
        <div className="title flex flex-col gap-4">
          <motion.h1 variants={slideDownVariants} className="text-center text-3xl md:text-5xl font-semibold tracking-tighter">
            Project yang <br className="block md:hidden" /> Telah Kami Kerjakan
          </motion.h1>
          <motion.p className="text-sm md:text-lg text-center" variants={slideUpVariants}>
            Kami membantu berbagai bisnis membangun website yang memperkuat <br className="hidden md:block" /> brand mereka dan meningkatkan kepercayaan pelanggan.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 w-full">
          <AnimatePresence initial={false}>
            {visibleWork.map((work, index) => (
              <motion.a
                href={work.link}
                target="_blank"
                key={work.name + index}
                className={`${work.col} py-4.5 px-4 flex flex-col justify-end bg-no-repeat bg-center bg-cover h-[278px] md:h-[400px] rounded-md`}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 66.76%, #000 100%), url(${work.image})`,
                }}
                variants={slideUpVariants}
              >
                <div className="text-neutral-50">
                  <h1 className="text-xl md:text-3xl font-semibold">{work.name}</h1>
                  <p className="text-sm md:text-base">{work.category}</p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {workList.length > 4 && !showAll && (
          <motion.button
            onClick={() => setShowAll(true)}
            className="cursor-pointer py-4 px-6 border border-black text-black font-medium md:text-md rounded-full hover:text-black hover:bg-yellow-400 w-fit"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Lihat Lebih Banyak
          </motion.button>
        )}
      </motion.div>
    </Element>
  );
};

export default Work;
