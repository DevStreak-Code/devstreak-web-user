export const SAMPLE_CODE_ROUTE = {
  SAMPLE_FORM: "/sample-form",
  SAMPLE_FORM_YUP: "/sample-form-yup",
  SAMPLE_FORM_ZOD: "/sample-form-zod",
};

export const COMMON_ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  CHANGE_PASSWORD: "/change-password",
  REGISTER: "/register",
  RESET_PASSWORD: "/reset-password",
  FORGOT_PASSWORD: "/forgot-password",
  DESIGN_UI: "/design-ui",

  //   NOT_FOUND: "/not-found",
};

export const ROUTES = {
  ...SAMPLE_CODE_ROUTE,
  ...COMMON_ROUTES,
};
