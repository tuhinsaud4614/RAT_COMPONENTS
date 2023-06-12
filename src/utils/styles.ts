import { twMerge } from "tailwind-merge";

import type { Color, Variant } from "./types";

const className = {
  btn: {
    root: "text-sm px-5 py-2.5 text-center select-none flex items-center justify-center font-medium gap-3",
    spin: (variant: Variant, color: Color) => {
      const base = "animate-spin ml-2 w-[1.15em] h-[1.15em]";
      const v =
        variant === "contained"
          ? "[&>:first-child]:fill-base-100/80 [&>:last-child]:fill-base-100"
          : "[&>:first-child]:fill-muted-2 dark:[&>:first-child]:fill-muted-dark";
      switch (color) {
        case "primary":
          return twMerge(
            base,
            v,
            variant !== "contained" && "[&>:last-child]:fill-primary"
          );
        case "secondary":
          return twMerge(
            base,
            v,
            variant !== "contained" && "[&>:last-child]:fill-secondary"
          );
        case "error":
          return twMerge(
            base,
            v,
            variant !== "contained" && "[&>:last-child]:fill-error"
          );
        case "success":
          return twMerge(
            base,
            v,
            variant !== "contained" && "[&>:last-child]:fill-success"
          );
        case "warning":
          return twMerge(
            base,
            v,
            variant !== "contained" && "[&>:last-child]:fill-warning"
          );
        case "info":
          return twMerge(
            base,
            v,
            variant !== "contained" && "[&>:last-child]:fill-info"
          );
        case "neutral":
          return twMerge(
            base,
            v,
            variant !== "contained" && "[&>:last-child]:fill-neutral"
          );
        default:
          return twMerge(
            base,
            v,
            variant === "contained"
              ? "[&>:first-child]:fill-neutral/80 [&>:last-child]:fill-neutral dark:[&>:first-child]:fill-neutral-dark/80 dark:[&>:last-child]:fill-neutral-dark"
              : "[&>:first-child]:fill-muted-2 [&>:last-child]:fill-muted-1 dark:[&>:first-child]:fill-muted-dark group-hover:[&>:first-child]:fill-neutral/80 group-hover:[&>:last-child]:fill-neutral dark:group-hover:[&>:first-child]:fill-neutral-dark/80 dark:group-hover:[&>:last-child]:fill-neutral-dark"
          );
      }
    },
  },
};

const STYLES = className;

export default STYLES;
