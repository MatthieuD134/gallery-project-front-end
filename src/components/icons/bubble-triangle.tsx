import { SVGProps } from "react";

const BubbleTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="39"
    height="29"
    viewBox="0 0 39 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 28.5L17.5 0.5L38.5 14.5L0 28.5Z" fill="currentColor" />
  </svg>
);

export default BubbleTriangle;
