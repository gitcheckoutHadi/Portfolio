import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
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
    </div>
  );
};

export default Media;
