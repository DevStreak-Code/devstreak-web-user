import type React from "react";

interface ICustomLogoProps {
  width?: string;
  height?: string;
}

const CustomLogo: React.FC<ICustomLogoProps> = (props) => {
  const { width = "h-full", height = "w-full" } = props;
  return (
    <div className={`${width} ${height}`}>
      <span className="text-2xl font-semibold text-primary">DevStreak</span>
    </div>
  );
};

export default CustomLogo;
