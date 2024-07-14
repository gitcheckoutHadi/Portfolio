import React from "react";
import { TextAr } from "./TextArea.style";

interface TextAreaInterface {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  error: string;
  name: string; // added name prop to the TextArea component to allow for controlled input
}

const TextArea = ({
  value,
  onChange,
  placeholder,
  error,
  name,
}: TextAreaInterface) => {
  return (
    <TextAr
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      color={error && "red"}
      name={name}
    />
  );
};

export default TextArea;
