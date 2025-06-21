import { toast, type ToastT } from "sonner";

export const toastSuccess = (message: string) => {
  toast.success(message, { duration: 1000 });
};

export const toastError = (message: string) => {
  toast.error(message, { duration: 1000 });
};

export const toastWarning = (message: string) => {
  toast.warning(message, { duration: 1000 });
};

// Type-safe variant
type ToastVariant = "success" | "error" | "warning";

export const showToast = (
  variant: ToastVariant,
  message: string,
  options?: Partial<ToastT>
) => {
  const baseOptions = { duration: 1000, ...options };

  switch (variant) {
    case "success":
      toast.success(message, baseOptions);
      break;
    case "error":
      toast.error(message, baseOptions);
      break;
    case "warning":
      toast.warning(message, baseOptions);
      break;
  }
};
