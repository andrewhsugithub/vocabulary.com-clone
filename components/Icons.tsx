import Hamburger from "hamburger-react";
import { LayoutGrid, List, LucideProps, Search, X } from "lucide-react";

// this makes the icons/img accessible to svg attributes
export const Icons = {
  learn: LayoutGrid,
  search: Search,
  list: List,
  trainer: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_15_29)">
        <path
          d="M0 13.75C0 13.3358 0.335786 13 0.75 13H3.25C3.66421 13 4 13.3358 4 13.75V15.25C4 15.6642 3.66421 16 3.25 16H0.75C0.335786 16 0 15.6642 0 15.25V13.75Z"
          fill={props.color}
        />
        <path
          d="M6 10.75C6 10.3358 6.33579 10 6.75 10H9.25C9.66421 10 10 10.3358 10 10.75V15.25C10 15.6642 9.66421 16 9.25 16H6.75C6.33579 16 6 15.6642 6 15.25V10.75Z"
          fill={props.color}
        />
        <path
          d="M12 7.75C12 7.33579 12.3358 7 12.75 7H15.25C15.6642 7 16 7.33579 16 7.75V15.25C16 15.6642 15.6642 16 15.25 16H12.75C12.3358 16 12 15.6642 12 15.25V7.75Z"
          fill={props.color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4685 1.41435C12.792 1.6731 12.8444 2.14507 12.5857 2.46852L8.1561 8.00545L5.09556 5.96509L1.53033 9.53033C1.23744 9.82322 0.762563 9.82322 0.46967 9.53033C0.176777 9.23743 0.176777 8.76256 0.46967 8.46967L4.90444 4.0349L7.8439 5.99454L11.4143 1.53148C11.6731 1.20803 12.1451 1.15559 12.4685 1.41435Z"
          fill={props.color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 0.5L13 5L9 1.5L13.5 0.5Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="clip0_15_29">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  // hamburger: (props: LucideProps) => <Hamburger {...props} />,
  close: X,
};
