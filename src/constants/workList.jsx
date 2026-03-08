import slideLeftVariants from "../animations/slideLeftVariants";
import slideRightVariants from "../animations/slideRightVariants";
import itclub from "../assets/img/work/itclub.webp";
import smdapp from "../assets/img/work/semudah_phone.webp";
import smdprint from "../assets/img/work/smdprint.webp";
import barakahLaptop from "../assets/img/work/barakah_laptop.webp";
import luxtractorsTab from "../assets/img/work/luxtractors_tab_landscape.webp";
import sofaLaptop from "../assets/img/work/sofa_laptop.webp";

const workList = [
  {
    name: "Luxtractors",
    image: luxtractorsTab,
    link: "https://cecep.framer.website/",
    category: "Website Development",
    animation: slideRightVariants,
  },
  {
    name: "Barakah Safar Travel",
    image: barakahLaptop,
    link: "https://www.figma.com/design/OEY7c9IDrLAV7viiY6WtaC/AsepStudio-Portfolio?node-id=0-1&t=fpNYdcEH32jePBlQ-1",
    category: "Website Design",
    animation: slideRightVariants,
  },

  {
    name: "Sooofaaa",
    image: sofaLaptop,
    link: "https://www.figma.com/design/OEY7c9IDrLAV7viiY6WtaC/AsepStudio-Portfolio?node-id=0-1&t=fpNYdcEH32jePBlQ-1",
    category: "Website Development",
    animation: slideRightVariants,
  },

  {
    name: "SMDPrints",
    image: smdprint,
    link: "https://smdprints-azepp.vercel.app/",
    category: "Website Development",
    animation: slideRightVariants,
  },
  {
    name: "Semudah App",
    image: smdapp,
    link: "https://www.figma.com/design/4xDxeo0EcMPbzHQddZx216/Semudah-App?node-id=0-1&t=nKrUZFH2l6y74ulN-1",
    category: "Mobile App Design",
    animation: slideLeftVariants,
  },

  {
    name: "IT Club",
    image: itclub,
    link: "https://www.figma.com/design/OEY7c9IDrLAV7viiY6WtaC/AsepStudio-Portfolio?node-id=0-1&t=fpNYdcEH32jePBlQ-1",
    category: "Website Design",
    animation: slideLeftVariants,
  },
];

export default workList;
