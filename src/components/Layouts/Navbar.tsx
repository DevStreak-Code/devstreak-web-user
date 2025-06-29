import CustomLogo from "../CustomLogo";

interface INavbarProps {
  isShowLogo?: boolean;
}

const Navbar: React.FC<INavbarProps> = (props) => {
  const { isShowLogo = false } = props;
  return (
    <div className="pt-2 pb-2 pl-4 border-b bg-white shadow-xs">
      {isShowLogo && <CustomLogo alignment="start" />}
    </div>
  );
};

export default Navbar;
