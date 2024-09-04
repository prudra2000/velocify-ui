import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as React from "react";
const buttonVariants = cva(
  "flex flex-row justify-center items-center rounded-lg text-xs lg:text-sm ",
  {
    variants: {
      variant: {
        default: "bg-dark-primary text-white hover:bg-dark-secondary outline outline-1 outline-dark-secondary",
        secondary: "bg-light-primary hover:bg-light-secondary text-black",
        warning:
          "bg-warning-primary text-black hover:bg-warning-secondary outline outline-1 outline-warning-secondary",
        success:
          "bg-success-primary text-black hover:bg-success-secondary outline outline-1 outline-success-secondary",
        info: "bg-info-primary text-white hover:bg-info-secondary outline outline-1 outline-info-secondary",
        error:
          "bg-error-primary text-white hover:bg-error-secondary outline outline-1 outline-error-secondary",
        link: "text-link-primary underline-offset-4 hover:underline",
        custom: "",
      },
      size: {
        default: "px-3 py-1.5",
        small: "rounded-md px-2 py-1",
        large: " rounded-md px-4 py-2 text-sm",
      },
      rounded: {
        default: "rounded-lg",
        none: "rounded-none",
        full: "rounded-full",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
      disabled: false,
      
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  alt?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftAvatar?: React.ReactNode;     
  rightAvatar?: React.ReactNode;
  children?: React.ReactNode;
  rounded?: "default" | "none" | "full";
  disabled?: boolean;
  size?: "default" | "small" | "large" ;
  variant?: "default" | "secondary" | "warning" | "success" | "info" | "error" | "link" | "custom";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, alt, variant, size, rounded, asChild = false, leftIcon, rightIcon, leftAvatar, rightAvatar, children, disabled, ...props }, ref) => { // {{ edit_2 }}
    return (
      <div className="flex flex-row items-center justify-center">
        
        <button
        className={twMerge(buttonVariants({ variant, size, rounded, className, disabled }))}
        ref={ref}
        aria-label={alt}
        {...props}
        disabled={disabled}
      >
        {leftIcon && <div className="mr-2">{leftIcon}</div>}
        {leftAvatar && <div className="mr-2">{leftAvatar}</div>}
        {children}
        {rightIcon && <div className="ml-2">{rightIcon}</div>}
        {rightAvatar && <div className="ml-2">{rightAvatar}</div>}
      </button>
      </div>
    );
  }
);

Button.displayName = "Button";

export default Button;