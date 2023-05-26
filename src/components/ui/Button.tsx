import { Fragment } from "react";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  className?: string;
}

export default function Button({ text, disabled, className }: ButtonProps) {
  return (
    <Fragment>
      <button
        className={`${className} btn block mx-auto rounded-md bg-[#04512A] border-none text-white sm:max-w-[612px] max-w-[280px] w-full disabled:bg-[#04512A4D] disabled:text-white font-normal`}
        disabled={disabled}
      >
        {text}
      </button>
    </Fragment>
  );
}
