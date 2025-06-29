import Navbar from "./Navbar";
import Sidebar from "./sidebar";

interface IPrivateLayoutProps {
  children: React.ReactNode;
  isShowNavbarLogo?: boolean;
  isShowSidebar?: boolean;
}
export const PrivateLayout: React.FC<IPrivateLayoutProps> = (props) => {
  const { children, isShowNavbarLogo = false, isShowSidebar = true } = props;
  return (
    <div className="w-full h-screen flex">
      {/* Sidebar */}
      {isShowSidebar && (
        <div className="w-[200px] h-full border-r">
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 h-full flex flex-col ">
        <Navbar isShowLogo={isShowNavbarLogo} />
        <div className="flex-1 p-2 pl-4 pr-4  overflow-auto">{children}</div>
      </div>
    </div>
  );
};
