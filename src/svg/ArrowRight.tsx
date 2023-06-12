import { Ref, SVGProps, forwardRef } from "react";

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="none"
      d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"
    />
  </svg>
);
const ArrowRight = forwardRef(SvgComponent);
export default ArrowRight;
