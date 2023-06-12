import * as React from "react";

import { twMerge } from "tailwind-merge";

import ArrowRight from "../svg/ArrowRight";
import STYLES from "../utils/styles";
import { Color } from "../utils/types";

interface Props extends Omit<React.ComponentProps<"button">, "color"> {
  loading?: boolean;
  color?: Color;
}

export default function Button1({
  className,
  loading,
  color = "primary",
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={twMerge(
        STYLES.btn.root,
        "group rounded-xl bg-primary text-lg text-base-100 shadow transition-transform hover:scale-[1.02] active:scale-[0.99]",
        className
      )}
    >
      Button 1
      <ArrowRight className="h-[1.5em] w-[1.5em] text-inherit delay-0 group-hover:animate-bounce-x" />
    </button>
  );
}
