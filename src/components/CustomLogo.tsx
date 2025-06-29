import type React from "react";

interface ICustomLogoProps {
  alignment?: "start" | "center" | "end";
}

const CustomLogo: React.FC<ICustomLogoProps> = (props) => {
  const { alignment = "center" } = props;
  return (
    <div className={`flex  items-center justify-${alignment}`}>
      <span className="text-2xl font-semibold text-primary m-1">DevStreak</span>
    </div>
  );
};

export default CustomLogo;
