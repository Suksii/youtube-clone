import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      dark: ["bg-secondary-dark", "text-secondary"],
      ghost: ["hover:bg-neutral-100"],
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

type ButtonProps = VariantProps<typeof buttonStyles> &
  ComponentProps<"button"> & { children?: ReactNode };

const Button = ({
  variant,
  size,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    >
      {children}
    </button>
  );
};

export default Button;
