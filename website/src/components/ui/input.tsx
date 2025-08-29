import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full rounded-md px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-border-border bg-background shadow-sm focus-visible:ring-1 focus-visible:ring-ring",
        outline:
          "border border-border-border bg-transparent focus-visible:ring-2 focus-visible:ring-ring",
        ghost:
          "border-none bg-transparent focus-visible:ring-1 focus-visible:ring-ring",
        dark: " bg-grey-500 text-white placeholder:text-grey-200 focus-visible:ring-1 focus-visible:ring-[#4A4A4A]",
      },
      inputSize: {
        default: "h-10",
        sm: "h-8 rounded-md px-2 text-xs",
        lg: "h-12 rounded-md px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, inputSize, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, inputSize, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
