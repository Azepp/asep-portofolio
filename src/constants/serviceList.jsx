import fadeUpVariants from "../animations/fadeUpVariants";
import slideLeftVariants from "../animations/slideLeftVariants";
import slideRightVariants from "../animations/slideRightVariants";

const serviceList = [
  {
    title: "Front End Development",
    description: "I build fast, responsive, and accessible websites with clean code and modern frameworks.",
    animation: slideLeftVariants,
  },

  {
    title: "UI/UX",
    description: "I design intuitive and user-centered interfaces that look great and feel smooth to use.",
    animation: fadeUpVariants,
  },

  {
    title: "Web Design",
    description: "I craft aesthetic and functional layouts that bring your brand and message to life online.",
    animation: slideRightVariants,
  },
];

export default serviceList;
