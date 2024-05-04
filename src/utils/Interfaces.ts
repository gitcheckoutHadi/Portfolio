
export interface CardProps {
  item: {
    title: string;
    des: string;
    icon?: JSX.Element;
    src?:any;
    key?:any;
  };
}

export interface simpleProps {
  id:number;
  text:string;
}

export interface ResumeCardProps {
mainId:number;
MainTitle:string;
Date:string;
Data:{
  id:number;
  title:string;
  subTitle:string;
  result:string;
  des:string
}[]
}

export interface skillsInterface {
  mainId:number;
  MainTitle:string;
  Features?:string; 
  Data:{
    id:number;
    title:string;
  Grade:string;
  }[]
  }