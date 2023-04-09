import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    // ...
  }
>;

export const Button = ({ children, ...props }: Props) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};
