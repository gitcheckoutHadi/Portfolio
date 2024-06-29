import { FeatureItemInterface } from "./featureInterface";
import {
  AiFillApi,
  AiFillAppstore,
  AiFillBug,
  AiFillCloud,
  AiFillCode,
  AiFillCodeSandboxCircle,
  AiFillDatabase,
  AiFillMobile,
  AiFillSecurityScan,
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
    des: "Expertise in building interactive and responsive user interfaces using HTML, CSS, and JavaScript frameworks like React.",
  },
  {
    id: 2,
    icon: <AiFillDatabase />,
    title: "Backend Development",
    des: "Proficiency in server-side programming and database management using Node.js, Express, and MongoDB.",
  },

  {
    id: 6,
    icon: <FaGlobe />,
    title: "Hosting Websites",
    des: "Hosting websites stores site files on servers, making them accessible online. Reliable hosting ensures good performance and uptime.",
  },
  {
    id: 4,
    icon: <AiFillApi />,
    title: "API Development",
    des: "Skilled in designing and implementing RESTful and GraphQL APIs to enable seamless communication between different services.",
  },

  {
    id: 6,
    icon: <AiFillBug />,
    title: "Testing & Debugging",
    des: "Proficient in writing unit, integration, and end-to-end tests using tools like Jest, Mocha, and Selenium to ensure code quality.",
  },
  // {
  //   id: 7,
  //   icon: <AiFillSecurityScan />,
  //   title: "Cybersecurity",
  //   des: "Knowledgeable in securing applications against common vulnerabilities and implementing best practices for data protection."
  // },
  // {
  //   id: 8,
  //   icon: <AiFillCodeSandboxCircle />,
  //   title: "DevOps",
  //   des: "Experience with CI/CD pipelines, containerization, and infrastructure as code using tools like Jenkins, Docker, and Terraform."
  // },
  {
    id: 9,
    icon: <SiAntdesign />,
    title: "UX Design",
    des: "UX Design ensures intuitive, engaging, and accessible user experiences by focusing on user needs and behaviors.",
  },
];
