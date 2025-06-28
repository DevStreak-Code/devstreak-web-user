import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toastSuccess } from "@/components/CustomToast/utils";
import type { RegisterFormData } from "./UseRegister";

const endPoint = "https://devstreak-be.onrender.com/register";

const registerUser = async (formData: RegisterFormData) => {
  const response = await axios.post(endPoint, formData);
  return response.data;
};

const useRegisterQuery = () => {
  const { mutate: registerAsync, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toastSuccess("Registered successfully");
    },
  });

  return {
    handlers: {
      registerAsync,
    },
    state: {
      isPending,
    },
  };
};

export default useRegisterQuery;
