import { FeatureItemInterface } from "./featureInterface";
import {
  AiFillAppstore,
  AiFillCode,
  AiOutlineApi,
  AiOutlineMobile,
} from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

// Features Data
export const featuresData: FeatureItemInterface[] = [
  {
    id: 1,
    icon: <AiFillCode />,
    title: "Frontend Development",
    des: "Expertise in building interactive and responsive user interfaces using HTML, CSS, and JavaScript framework like React.",
  },
  {
    id: 3,
    icon: <AiOutlineApi />,
    title: "API Development",
    des: "Experience in developing robust and scalable APIs using RESTful or GraphQL architectures, ensuring efficient communication between frontend and backend systems.",
  },
  {
    id: 6,
    icon: <AiOutlineMobile />,
    title: "Mobile Responsiveness",
    des: "Ensuring seamless user experience across various devices and screen sizes through responsive web design and mobile-first development strategies.",
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "Mobile Development",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "UX Design",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: "Hosting Websites",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  },
];
