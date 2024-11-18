import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Title from "../utils/Title";
import { ButtonProps } from "../types/types";

export const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      dark: ["bg-secondary-dark", "text-secondary"],
      ghost: ["hover:bg-secondary-hover"],
    },
    size: {
      default: [],
      icon: [
        "rounded-full",
        "flex",
        "w-10",
        "h-10",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = ({
  variant,
  size,
  children,
  className,
  customTitle,
  titlePosition = "left-1/2 -translate-x-1/2 top-full",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    >
      {children}
      {customTitle && (
        <Title title={customTitle} titlePosition={titlePosition} />
      )}
    </button>
  );
};

export default Button;
