import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold ">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Hadi Shouman</span>
        </h1>
        <h2 className="text-4xl font-bold ">
          a <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#0E8388"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As an enthusiastic learner passionate about all facets of development,
          I bring one year of hands-on experience in React. Eager to expand my
          expertise across various domains of development while contributing to
          innovative projects and teams.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
