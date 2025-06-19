import type React from "react";

interface ICustomLogoProps {
  width?: string;
  height?: string;
}

const CustomLogo: React.FC<ICustomLogoProps> = (props) => {
  const { width = "h-full", height = "w-full" } = props;
  return (
    <div className={`${width} ${height}`}>
      <img src="/assets/images/logo.svg" alt="logo" className="w-full h-full" />
    </div>
  );
};

export default CustomLogo;
