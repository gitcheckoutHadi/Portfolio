import React from "react";
import { bannerImg } from "../../assets/index";
import { themeMode } from "../../theme/Webtheme";
const RightBanner = () => {
  const card = `absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px]
  ${
    themeMode === "light"
      ? "bg-gradient-to-r from-[#bdbec1] to-[#ecececde]"
      : "bg-gradient-to-r from-[#1e2024] to-[#202327]"
  }
  shadow-shadowOne flex justify-center items-center`;
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className={card}></div>
    </div>
  );
};

export default RightBanner;
