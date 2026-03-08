import { BiHomeAlt2, BiLayer, BiBriefcaseAlt2 } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

const navLinks = [
  {
    id: "home",
    title: "Beranda",
    icon: <BiHomeAlt2 />,
  },
  {
    id: "about",
    title: "Tentang",
    icon: <AiOutlineInfoCircle />,
  },
  {
    id: "service",
    title: "Layanan",
    icon: <BiLayer />,
  },
  {
    id: "work",
    title: "Portofolio",
    icon: <BiBriefcaseAlt2 />,
  },
];

export default navLinks;
