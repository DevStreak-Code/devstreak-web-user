import Navbar from "./Navbar";

interface IPrivateLayoutProps {
  children: React.ReactNode;
}
export const PrivateLayout: React.FC<IPrivateLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="p-2 pl-4 pr-4">{children}</div>
    </div>
  );
};
