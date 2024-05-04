import { projectOne, projectTwo, projectThree } from "../../assets/index";

interface ProjectsDataInterface {
  id: number;
  title: string;
  description: string;
  src?: any;
}

export const ProjectsData: ProjectsDataInterface[] = [
  {
    id: 1,
    title: "SOCIAL MEDIA CLONE",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    src: projectOne,
  },
  {
    id: 2,
    title: "E-commerce WebsiteE",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    src: projectTwo,
  },
  {
    id: 3,
    title: "Chatting App",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    src: projectThree,
  },
  {
    id: 4,
    title: "SOCIAL MEDIA CLONE",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    src: projectTwo,
  },
  {
    id: 5,
    title: "E-commerce WebsiteE",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    src: projectThree,
  },
  {
    id: 6,
    title: "Chatting App",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    src: projectOne,
  },
];
