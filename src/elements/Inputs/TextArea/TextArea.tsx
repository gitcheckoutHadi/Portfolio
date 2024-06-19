import React from 'react'
import { TextAr } from './TextArea.style'

interface TextAreaInterface {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder: string;
    error:string;
}

const TextArea = ({ value, onChange, placeholder,error }: TextAreaInterface) => {
  return (
    <TextAr value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      color={error && "red"}
      />
  )
}

export default TextArea
