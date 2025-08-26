import { useToast } from "@/hooks/use-toast";
import { useCallback, useState } from "react";

export const useCopy = (code: string | string[], copyText: string) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);
  const { addToast } = useToast();

  const handleMouseDown = useCallback(() => {
    navigator.clipboard.writeText(code as string);
    setHasCheckIcon(true);
    addToast(copyText);
    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  }, [copyText, addToast]);

  return { handleMouseDown, hasCheckIcon };
};
