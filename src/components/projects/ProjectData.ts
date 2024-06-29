import {
  Screenshot1,
  Screenshot2,
  Screenshot3,
  Screenshot4,
  Screenshot5,
  Screenshot6,
  Xproject,
} from "../../assets/index";

interface ProjectsDataInterface {
  id: number;
  title: string;
  description: string;
  src?: any | any[];
}

export const ProjectsData: ProjectsDataInterface[] = [
  {
    id: 1,
    title: "Smart Esa",
    description:
      "Explore a comprehensive website illustrating effective strategies for company personnel to manage information and enhance user interface development",
    src: [
      Screenshot1,
      Screenshot2,
      Screenshot3,
      Screenshot4,
      Screenshot5,
      Screenshot6,
    ],
  },
  {
    id: 2,
    title: "Movie Platform",
    description:
      "Our Movie Platform project is set to redefine how viewers experience cinema, offering a diverse catalog of films with intuitive navigation and personalized recommendations",
    src: Xproject,
  },
  {
    id: 3,
    title: "E-commerce WebsiteE",
    description:
      "Explore a curated selection and sell your future bike effortlessly on our specialized e-commerce site, dedicated to cycling enthusiasts worldwide.",
    src: Xproject,
  },
];
