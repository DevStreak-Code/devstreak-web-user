import { useMutation } from "@tanstack/react-query";
import type { LoginFormData } from "./useLogin";
import { ApiService } from "@/services/api/apiService";
import { toastSuccess } from "@/components/CustomToast/utils";

const useLoginQuery = () => {
  const apiService = new ApiService({
    baseURL: "https://devstreak-be.onrender.com",
  });
  const { mutate: loginAsync, isPending } = useMutation({
    mutationFn: (payload: LoginFormData) =>
      apiService.post<LoginFormData>("/login", payload),
    onSuccess: () => {
      toastSuccess("Logged in successfully");
    },
  });
  return {
    handlers: {
      loginAsync,
    },
    state: {
      isPending,
    },
  };
};

export default useLoginQuery;
