"use client";

import type { ToastContextProps, ToastProps } from "@/types";
import { createContext, memo, useState, type ReactNode } from "react";

export const ToastContext = createContext<ToastContextProps | undefined>(
  undefined,
);

ToastContext.displayName = "ToastContext";

export const ToastProvider = memo(({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (message: string) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message }]);
    setTimeout(() => removeToast(id), 5000);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
});

ToastProvider.displayName = "ToastProvider";
