import slideLeftVariants from "../animations/slideLeftVariants";
import slideRightVariants from "../animations/slideRightVariants";
import clinico from "../assets/img/work/clinico.webp";
import itclub from "../assets/img/work/itclub.webp";
import smdapp from "../assets/img/work/smdapp.webp";
import smdprint from "../assets/img/work/smdprint.webp";

const workList = [
  {
    name: "Clinico",
    image: clinico,
    link: "https://clinico.site/",
    category: "Front End Development - 2025",
    col: "md:col-span-7",
    animation: slideLeftVariants,
  },
  {
    name: "SMDPrints",
    image: smdprint,
    link: "https://smdprints-azepp.vercel.app/",
    category: "Front End Development - 2023",
    col: "md:col-span-5",
    animation: slideRightVariants,
  },
  {
    name: "Semudah App",
    image: smdapp,
    link: "https://www.figma.com/design/4xDxeo0EcMPbzHQddZx216/Semudah-App?node-id=0-1&t=nKrUZFH2l6y74ulN-1",
    category: "Mobile App Design - 2023",
    col: "md:col-span-5",
    animation: slideLeftVariants,
  },
  {
    name: "IT Club",
    image: itclub,
    link: "https://www.figma.com/design/7KAUzFlMdl1jV2UODwFqnU/ITC?node-id=0-1&t=b71whuAKWs8m7SJA-1",
    category: "Design - 2023",
    col: "md:col-span-7",
    animation: slideRightVariants,
  },
];

export default workList;
