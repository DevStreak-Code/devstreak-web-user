import CustomLogo from "../CustomLogo";

interface IPublicLayoutProps {
  children: React.ReactNode;
}
export const PublicLayout: React.FC<IPublicLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="w-full h-full flex items-center justify-center relative p-4">
      <div className="absolute top-4 left-4">
        <CustomLogo width="w-30" height="h-10" />
      </div>
      <div
        className="absolute  z-0 h-80 w-80 left-0 bottom-0"
        style={{
          background: 'url("/assets/images/main.svg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-full sm:w-1/2 h-full   p-4 flex justify-center">
        {/* Content here */}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};
