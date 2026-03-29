import { Element } from "react-scroll";
import serviceList from "../constants/serviceList";
import useIsInView from "../hooks/useInView";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import containerVariants from "../animations/containerVariants";
import slideUpVariants from "../animations/slideUpVariants";
import slideDownVariants from "../animations/slideDownVariants";
import buttonVariants from "../animations/buttonVariants";
import { FaWhatsapp } from "react-icons/fa";

const Service = () => {
  const { ref, hasBeenInView } = useIsInView(0.2);
  const handleClick = () => window.open("https://wa.me/6281298298245?text=Halo%20Asep%2C%20saya%20tertarik%20dengan%20layanan%20pembuatan%20website%20untuk%20bisnis%20saya.%20Boleh%20konsultasi%3F", "_blank");

  return (
    <Element name="service" id="service" className="scroll-mt-[280px] pt-[80px]">
      <motion.div className="flex flex-col gap-8 lg:gap-20" ref={ref} variants={containerVariants} initial="hidden" animate={hasBeenInView ? "visible" : "hidden"}>
        <div className="title flex flex-col gap-4">
          <motion.h1 variants={slideDownVariants} className="text-center text-3xl md:text-5xl font-semibold tracking-tighter">
            Pricelist Layanan Kami
          </motion.h1>
          <motion.p className="text-sm md:text-lg text-center" variants={slideUpVariants}>
            Kami menyediakan berbagai paket pembuatan website yang dirancang untuk <br className="hidden md:block" /> kebutuhan bisnis modern. transparan, jelas, dan fokus membantu brand kamu berkembang secara digital.{" "}
          </motion.p>
        </div>

        <motion.div variants={slideUpVariants} className="grid lg:grid-cols-3 gap-10 lg:gap-6 items-stretch">
          {serviceList.map((service, index) => (
            <div key={index} className="flex flex-col justify-center items-center relative">
              {service.bestSeller && (
                <div className="bg-custom-yellow rounded-t-lg px-5 pt-3 pb-3 text-center absolute top-2 md:top-0 lg:-top-12 w-[calc(100%-1.2rem)] md:w-2/3 lg:w-full">
                  <span className=" font-medium tracking-tight text-lg">Paling Banyak Dipesan</span>
                </div>
              )}

              <motion.div
                variants={service.animation}
                className={`flex flex-col flex-1 px-5 py-7 md:w-2/3 lg:w-full
          ${service.bestSeller ? "border-4 border-custom-yellow rounded-lg shadow-md mt-12 lg:mt-0" : "border border-neutral-300 rounded-lg shadow-md"}`}
              >
                <div className="flex flex-col gap-2 flex-1">
                  <h2 className="text-3xl font-semibold tracking-tight">{service.title}</h2>

                  <div className="price">
                    <p>Mulai dari:</p>
                    <h1 className="text-3xl font-semibold tracking-tight">{service.price}</h1>
                  </div>

                  <motion.button
                    className="py-4 px-6 bg-black flex gap-1 text-white font-medium cursor-pointer md:text-md rounded-full hover:text-black hover:bg-yellow-400 w-full items-center justify-center mt-2"
                    variants={buttonVariants}
                    whileHover="hover"
                    onClick={handleClick}
                    whileTap="tap"
                  >
                    <FaWhatsapp className="text-2xl" />
                    Pesan Sekarang
                  </motion.button>
                  <hr className="my-4" />

                  <p className="md:text-lg">Pelayanan yang didapat:</p>
                  <div className="description md:text-lg font-medium">{service.description}</div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Element>
  );
};

export default Service;
