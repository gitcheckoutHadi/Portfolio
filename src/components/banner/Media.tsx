import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { openNewWindow } from "../../utils/functions";
import { themeMode } from "../../theme/Webtheme";
import { BannerBox } from "../../theme.style";

interface MediaInterface {
  ShowTile?: boolean;
}

const Media = ({ ShowTile = true }: MediaInterface) => {
  const [currentTheme, setCurrentTheme] = useState<string>(themeMode);

  useEffect(() => {
    setCurrentTheme(themeMode);
    console.log(`bannerIcon-${currentTheme}`);
    // alert(`bannerIcon-${currentTheme}`);
  }, [themeMode]);

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        {ShowTile && (
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
        )}
        <div className="flex gap-4">
          <BannerBox
            theme={themeMode}
            onClick={() =>
              openNewWindow("https://linkedin.com/in/hadi-shouman-241066236/")
            }
          >
            <FaLinkedinIn />
          </BannerBox>
          <span
            className={`bannerIcon-${currentTheme}`}
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
