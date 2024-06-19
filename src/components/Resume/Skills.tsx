import React from "react";
import { motion } from "framer-motion";
import { SkillsData } from "./Data/SkillsData";

const Skills = () => {
  const ManageGradeValue = (grade: string) => {
    switch (grade) {
      case "100%":
        return "w-full";
      case "90%":
        return "w-[90%]";
      case "80%":
        return "w-[80%]";
      case "70%":
        return "w-[70%]";
      case "60%":
        return "w-[60%]";
      default:
        return "w-0"; // or handle as needed
    }
  };

  const IndexMargin = (index: number) => {
    if (index === 0) return "mt-0";
    else return "mt-6";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {SkillsData.map((val, index) => (
        <div key={val.mainId} className="w-full lgl:w-1/2">
          <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px] uppercase">
              {val.Features}
            </p>
            <h2 className={`${IndexMargin(index)} text-3xl md:text-4xl font-bold`}>
              {val.MainTitle}
            </h2>
          </div>
          <div className="mt-14 w-full flex flex-col gap-6">
            {val.Data.map((item) => (
              <div key={item.id} className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">{item.title}</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`${ManageGradeValue(
                      item.Grade
                    )} h-full bg-gradient-to-r from-green-800 via-green-400 to-green-100 rounded-md relative`}
                  >
                    <span className="absolute -top-7 right-0">
                      {item.Grade}
                    </span>
                  </motion.span>
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
