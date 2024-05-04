import React from "react";

// Define the type of props object
interface TitleProps {
  title?: string;
  des?: string;
}

// Provide default props using destructuring assignment
const Title: React.FC<TitleProps> = ({ title = "", des = "" }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        {des}
      </h1>
    </div>
  );
};

export default Title;
