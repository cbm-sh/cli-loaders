import { ToastContext } from "@/components/ToastProvider";
import { useContext } from "react";

export const useToast = () => {
  const toastContext = useContext(ToastContext);
  if (!toastContext) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return toastContext;
};
