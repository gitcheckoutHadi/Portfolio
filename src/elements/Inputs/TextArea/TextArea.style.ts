import styled from "styled-components";

export const TextAr = styled.textarea<{color?:string}>`
width:100%;
background: #191B1E;
min-height:10rem;
max-height:17rem;
resize:none;
color: ${props => props.color ||" #fff"} ;
overflow-y:auto;
border-radius: 3px;
padding:0.875rem;
&::-webkit-scrollbar {
  width: 0.5rem;
}

&::-webkit-scrollbar-thumb {
  background-image: linear-gradient(180deg, #0E8388 0%, #1b3b2e 100%);
  border-radius: 0.625rem;
  box-shadow: -10px 0px 10px 0px rgba(0, 0, 0, 0.25);
}

&::-webkit-scrollbar-track {
  background-color:  ${props => props.color || "#212428"};
  border-radius: 0.625rem;
}

&::placeholder{
    color:${props => props.color || "#ffffff50"};  
}
&:focus{
    outline:none;
    border:1px solid ${props => props.color || "#212428"};
}
&:hover{
    background: rgba(0, 0, 0, 0.04);
    box-shadow: inset 0 -1px 0 #0E8388;
}
`;