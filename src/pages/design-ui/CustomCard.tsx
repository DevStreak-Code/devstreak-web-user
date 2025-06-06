import React from "react";

interface ICustomCardProps {
  src: string;
  alt: string;
}

const CustomCard: React.FC<ICustomCardProps> = (props) => {
  const { src, alt } = props;

  return (
    <>
      <div className="w-50 ">
        <div className="border border-black w-full ">
          <img className="h-full w-full" src={src} alt={alt} />
        </div>
      </div>
    </>
  );
};

export default CustomCard;
