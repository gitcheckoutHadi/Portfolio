import { color } from "framer-motion";
import styled from "styled-components";

export const TextInputContainer = styled.div`
  width: 100%;
  /* max-width: 280px; */
  margin: auto;
  border-radius: 3px;
  overflow: hidden;
`;

export const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
`;

export const Input = styled.input<{color?:string}>`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 16px 12px 0 12px;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  background: #191B1E;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
  color: white;
  transition: all 0.15s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    box-shadow: inset 0 -1px 0 #0E8388;
  }

  &:not(:placeholder-shown) + span {
    /* color: #0E8388 !important; */
    color: ${props => props.color ||" #0E8388"} ;
    transform: translate3d(0, -12px, 0) scale(0.75);
  }

  &:focus {
    background: rgba(0, 0, 0, 0.05);
    outline: none;

    /* color: #0E8388 !important; */
    & + span {
  
      transform: translate3d(0, -12px, 0) scale(0.75);
      color: #0E8388 !important;
    }

    & + span + .focus-bg {
      background: #007bff !important; /* Ensure the focus background is blue */
      transform: scaleX(1);
      transition: all 0.1s ease;
      
    }
  }
`;

export const LabelText = styled.span<{color?:string}>`
  position: absolute;
  top: 20px;
  left: 12px;
  font-size: 16px;

  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
  ////////////////////////////// question
  /* ww */
  color: ${props => props.color || "#ffffff70"} ;
`;

export const FocusBg = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent; /* Initially transparent */
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
  transition: all 0.1s ease; /* Ensure smooth transition */
`;

