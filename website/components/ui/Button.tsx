import { BUTTON_VARIANTS } from "@/lib/config/variants";
import type { ButtonProps } from "@/types";
import { createElement, memo } from "react";

export const Button = memo(
  ({ as, icon, iconAlt, className, variant, ...props }: ButtonProps) => {
    const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");
    const cn =
      BUTTON_VARIANTS[variant as keyof typeof BUTTON_VARIANTS].className;
    const tag = as ? "span" : "button";

    return createElement(
      tag,
      {
        className: cx(
          cn,
          className ?? "",
          "group inline-flex cursor-pointer items-center justify-center overflow-hidden text-neutral-50 transition ease-in-out",
        ),
        ...props,
      },
      createElement(
        "span",
        {
          className:
            "ease absolute inset-0 flex size-full -translate-x-full items-center justify-center bg-neutral-900 text-neutral-50 transition group-hover:translate-x-0",
        },
        iconAlt ?? icon,
      ),
      createElement(
        "span",
        {
          className:
            "ease absolute flex size-full transform items-center justify-center text-neutral-50 transition group-hover:translate-x-full",
        },
        icon,
      ),
      createElement(
        "span",
        {
          className: "invisible relative",
        },
        icon,
      ),
    );
  },
);

Button.displayName = "Button";
