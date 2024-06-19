import React, { useState } from "react";

import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";
import Title from "../layouts/Title";
import { ResumeData } from "./ResumeData";

const Resume = () => {
  const [SelectedIndex, setSelectedIndex] = useState<number>(0);
  const SaveItemIndex = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {ResumeData.map((val, index) => (
            <li
              key={val.id}
              onClick={() => {
                SaveItemIndex(index);
              }}
              className={`${
                SelectedIndex === index
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              {val.text}
            </li>
          ))}
        </ul>
      </div>
      {SelectedIndex === 0 ? (
        <Education />
      ) : SelectedIndex === 1 ? (
        <Skills />
      ) : (
        <Experience />
      ) }
    </section>
  );
};

export default Resume;
