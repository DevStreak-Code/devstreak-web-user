import React from 'react';

interface ICustomCardProps {
  imgUrl: string;
  alt: string;
}

const CustomCard: React.FC<ICustomCardProps> = (props) => {
  const { imgUrl, alt } = props;
  return (
   <div>
      <img
        src={imgUrl}
        alt={alt}
        className="max-w-full h-auto"
      />
    </div>
  );
};
export default CustomCard;
