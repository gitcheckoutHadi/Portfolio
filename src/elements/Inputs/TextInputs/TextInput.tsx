import React from "react";
import {
  TextInputContainer,
  Label,
  Input,
  LabelText,
  FocusBg,
} from "./TextInput.style";
interface TextInputInterface {
  text: string;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name?: string;
}
const TextInput = ({
  text,
  value,
  onChange,
  error,
  id,
  name,
}: TextInputInterface) => {
  console.log("error MessageIs " + error);

  return (
    <TextInputContainer>
      <Label htmlFor={id}>
        <Input
          name={name}
          color={error ? "red" : ""}
          type="text"
          id={id}
          placeholder="&nbsp;"
          value={value}
          onChange={onChange}
        />
        <LabelText color={error ? "red" : ""}>{error ? error : text}</LabelText>
        <FocusBg></FocusBg>
      </Label>
    </TextInputContainer>
  );
};

export default TextInput;
