import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { openNewWindow } from "../../utils/functions";
interface MediaInterface {
  ShowTile?: boolean;
}
const Media = ({ ShowTile = true }: MediaInterface) => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        {ShowTile && (
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
        )}
        <div className="flex gap-4">
          {/* <span
            className="bannerIcon"
            onClick={() => openNewWindow("www.facebook.com/hadi.shouman.5")}
          >
            <FaFacebookF />
          </span> */}

          <span
            className="bannerIcon"
            onClick={() =>
              openNewWindow("linkedin.com/in/hadi-shouman-241066236/")
            }
          >
            <FaLinkedinIn />
          </span>
          <span
            className="bannerIcon"
            onClick={() => openNewWindow("https://github.com/gitcheckoutHadi")}
          >
            <FaGithub />
          </span>
        </div>
      </div>
      {/* <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Media;
