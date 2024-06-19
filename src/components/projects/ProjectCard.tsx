import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardProps } from "../../utils/Interfaces";
import "./projects.css";

// Define the ArrowProps interface
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
}

// Custom next arrow component
const CustomNextArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
  currentSlide,
  slideCount = 0, // Default to 0 if slideCount is undefined
}) => {
  const isLastSlide = currentSlide === slideCount - 1;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: 10,
        zIndex: 2,
        color: isLastSlide ? "gray" : "#0E8388",
      }}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-green-500"
      >
        <path
          d="M12 2L20 10L12 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

// Custom previous arrow component
const CustomPrevArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
  currentSlide,
}) => {
  const isFirstSlide = currentSlide === 0;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: 10,
        zIndex: 2,
        transform: "rotate(180deg)",
        color: isFirstSlide ? "gray" : "#0E8388",
      }}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-green-500"
      >
        <path
          d="M12 2L20 10L12 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

// Project card component
const ProjectsCard: React.FC<CardProps> = ({ item }) => {
  const { title, des, src, key } = item;

  // Slider settings
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds per image
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: function (i) {
      return <button className="dot"></button>;
    },
  };

  return (
    <div
      key={key}
      className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        {Array.isArray(src) ? (
          <Slider {...settings}>
            {src.map((image, index) => (
              <div key={index}>
                <img
                  className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
                  src={image}
                  alt={`Project ${title} Image ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <img
            className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={src}
            alt={`Project ${title}`}
          />
        )}
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            {/* <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <BsGithub />
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe />
              </span>
            </div> */}
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
