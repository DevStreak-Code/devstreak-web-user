import { ROUTES } from "@/constants/routes";
import Login from "@/features/common/Login";
import Register from "../common/Register";
import ChangePassword from "../common/ChangePassword";
import ResetPassword from "../common/ResetPassword";
import RootPage from "./RootPage";
import DesignUI from "../common/DesignUI";

export const ROUTE_CONFIG = [
  {
    path: ROUTES.ROOT,
    component: <RootPage />,
    name: "Root",
  },
  {
    path: ROUTES.DESIGN_UI,
    component: <DesignUI />,
    name: "Design UI Components",
  },
  {
    path: ROUTES.LOGIN,
    component: <Login />,
    name: "Login ",
  },
  {
    path: ROUTES.REGISTER,
    component: <Register />,
    name: "Register",
  },
  {
    path: ROUTES.CHANGE_PASSWORD,
    component: <ChangePassword />,
    name: "Change Password",
  },
  {
    path: ROUTES.RESET_PASSWORD,
    component: <ResetPassword />,
    name: "Reset Password",
  },
];

const useRouterManager = () => {
  return {
    ROUTE_CONFIG,
  };
};

export default useRouterManager;
