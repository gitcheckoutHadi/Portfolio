import {
  Bikes,
  Bikes0,
  Bikes1,
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
      "I worked on a project that makes every web element customizable via an admin panel, connected to JSON for data management. I handled all details, both small and large",
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
      "I manage the CRUD operations for all personnel involved in the movie, including actors and directors, and track their contributions projects",
    src: Xproject,
  },
  {
    id: 3,
    title: "E-commerce WebsiteE",
    description:
      "I am responsible for delivering a bike search feature that matches users' preferences, utilizing PHP, HTML, CSS, and JavaScript as a full-stack developer",
    src: [Bikes, Bikes0, Bikes1],
  },
];
