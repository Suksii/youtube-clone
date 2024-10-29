import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, ReactNode } from "react";

const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-neutral-100"],
    },
    size: {
      default: [],
      icon: [
        "rounded-full",
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

type ButtonProps = VariantProps<typeof buttonStyles> &
  ComponentProps<"button"> & { children?: ReactNode };

const Button = ({ variant, size, children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={buttonStyles({ variant, size })}>
      {children}
    </button>
  );
};

export default Button;
