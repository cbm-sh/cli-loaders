"use client";

import { useToast } from "@/hooks/use-toast";
import type { ToastProps } from "@/types";
import { memo } from "react";
import { Toast } from "./Toast";

export const ToastWrapper = memo(() => {
  const { toasts, removeToast } = useToast();

  const handleClose = (id: number) => {
    removeToast(id);
  };

  return (
    <div className="fixed z-50 flex w-full max-w-3xl flex-col items-center justify-center">
      {toasts.map(({ message, id }: ToastProps) => (
        <Toast
          isOpen={true}
          key={`toast_${id}`}
          id={id}
          message={message}
          onClose={() => handleClose(id)}
        />
      ))}
    </div>
  );
});

ToastWrapper.displayName = "ToastWrapper";
