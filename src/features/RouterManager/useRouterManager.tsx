import { ROUTES } from "@/constants/routes";
import Login from "@/features/common/Login";
import Register from "../common/Register";
import ChangePassword from "../common/ChangePassword";
import ResetPassword from "../common/ResetPassword";
import RootPage from "./RootPage";
import SampleForm from "../sample/SampleForm";
import SampleFormZod from "../sample/SampleFormZod";
import SampleFormYup from "../sample/SampleFormYup";
import RecruiterOnboarding from "../recruiter/onboarding";
import SampleTodoApi from "../sample/SampleTodoAPI";
import DesignUI from "../sample/DesignUI";

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
  {
    path: ROUTES.SAMPLE_FORM,
    component: <SampleForm />,
    name: "Sample Form | With React FORM Hook (without YUP/ZOD)",
  },
  {
    path: ROUTES.SAMPLE_FORM_YUP,
    component: <SampleFormYup />,
    name: "Sample Form | With React FORM Hook with yup",
  },
  {
    path: ROUTES.SAMPLE_FORM_ZOD,
    component: <SampleFormZod />,
    name: "Sample Form | With React FORM Hook zod",
  },
  {
    path: ROUTES.RECRUITER_ONBOARDING,
    component: <RecruiterOnboarding />,
    name: "Recruiter Onboarding",
  },
  {
    path: ROUTES.SAMPLE_TODO_CRUD,
    component: <SampleTodoApi />,
    name: "Sample Todo Crud | With React Query",
  },
];

const useRouterManager = () => {
  return {
    ROUTE_CONFIG,
  };
};

export default useRouterManager;
