import { skillsInterface } from "../../../utils/Interfaces";

export const SkillsData: skillsInterface[] = [
  {
    mainId: 1,
    MainTitle: "FrontEnd",
    Features: "Development Skills",
    Data: [
      { id: 1, title: "React", Grade: "100%" },
      { id: 2, title: "Html, CSS", Grade: "100%" },
      { id: 12, title: "JavaScript, TypeScript", Grade: "90%" },
      { id: 3, title: "styled Component", Grade: "100%" },
      { id: 11, title: "Tailwind CSS", Grade: "60%" },
    ],
  },

  {
    mainId: 12,
    MainTitle: "BackEnd & DataBase",
    // Features:"FEATURES",
    Data: [
      { id: 11, title: "Node JS", Grade: "70%" },
      { id: 1, title: "MYSQL", Grade: "70%" },
      { id: 2, title: "MONGO", Grade: "70%" },
    ],
  },
  {
    mainId: 12,
    MainTitle: "Data Analysis",
    // Features:"FEATURES",
    Data: [
      { id: 1, title: "UML", Grade: "80%" },
      { id: 2, title: "Merise", Grade: "80%" },
    ],
  },
];
