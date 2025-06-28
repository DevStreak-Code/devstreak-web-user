import { useMutation } from "@tanstack/react-query";
import { toastSuccess } from "@/components/CustomToast/utils";
import type { RegisterFormData } from "./useRegister";
import { ApiService } from "@/services/api/apiService";

const useRegisterQuery = () => {
  const apiService = new ApiService({
    baseURL: "https://devstreak-be.onrender.com",
  });
  const { mutate: registerAsync, isPending } = useMutation({
    mutationFn: (payload: RegisterFormData) => {
      return apiService.post<RegisterFormData>("/register", payload);
    },
    onSuccess: () => {
      toastSuccess("Registered in successfully");
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
