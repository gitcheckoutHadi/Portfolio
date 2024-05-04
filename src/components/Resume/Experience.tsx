import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { ExperienceData } from "./Data/ExperienceData";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {ExperienceData.map((val, index) => (
        <div key={val.mainId}>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">
              {val.Date}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">{val.MainTitle}</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            {val.Data &&
              val.Data.map((item, idx) => (
                <ResumeCard
                  key={item.id}
                  item={item} // Pass the entire item object as prop
                />
              ))}
            {/* <ResumeCard item={item} key={item.id} /> */}
            {/* <ResumeCard
                  item={{
                    title: item.title,
                    subTitle: item.subTitle,
                    result: item.result,
                    des: item.des,
                  }}
                /> */}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Education;
