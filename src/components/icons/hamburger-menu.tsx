import { SVGProps } from "react";

const HamburgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="35"
    height="21"
    viewBox="0 0 35 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.34778 2H32.6521"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M2.34778 10.8691H32.6521"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M2.34778 19H32.6521"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default HamburgerMenu;
