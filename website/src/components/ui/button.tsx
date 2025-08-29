import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Function to dynamically determine shadow colors based on the variant
function getShadowColor(variant: string) {
  switch (variant) {
    case "default":
      return {
        dropShadowColor: "#39190F", // Orange dark shadow for orange-500
        innerShadowColor: "#171717", // Grey for the inner shadow
      };
    case "destructive":
      return {
        dropShadowColor: "#B22733", // Red dark shadow for red-500
        innerShadowColor: "#171717", // Grey for the inner shadow
      };
    case "outline":
      return {
        dropShadowColor: "#171717", // Dark Grey shadow for outlines
        innerShadowColor: "#171717", // Grey for the inner shadow
      };
    case "label":
      return {
        dropShadowColor: "#1F2937", // Dark gray shadow for label
        innerShadowColor: "#111827", // Darker gray for inner shadow
      };
    default:
      return {
        dropShadowColor: "#141414", // Default grey for any other button variant
        innerShadowColor: "#121212",
      };
  }
}

// Tailwind class variance authority setup for variants and sizes
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-orange-500 text-white hover:bg-orange-500",
        outline: "border border-orange-500 text-orange-500 hover:bg-app-btn",
        destructive: "bg-red-500 text-white hover:bg-app-btn",
        ghost: "text-orange-500 hover:bg-app-btn",
        link: "text-orange-500 underline-offset-4 hover:underline",
        label: "border border-border-border text-white hover:bg-app-btn",
        disabled: "bg-app-btn hover:bg-app-btn",
        gradient:
          "relative bg-[#171717] before:absolute before:inset-0 before:rounded-xl rounded-xl before:border before:border-transparent before:bg-gradient-to-br before:from-[#646464] before:to-[#1E1E1E] before:-z-10 text-white hover:bg-app-btn/10 [box-shadow:0px_-3px_10.6px_1px_#C7C7C708_inset,0px_-4px_24.4px_0px_#CECECE1C_inset]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  glow?: boolean; // New prop for enabling the combined shadow effects
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size,
      asChild = false,
      glow = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Get shadow colors dynamically based on the button's variant
    const { dropShadowColor, innerShadowColor } = getShadowColor(
      variant || "default"
    );

    // Generate dynamic inline styles for glow effect
    const glowStyles = glow
      ? {
          boxShadow: `0 0 0 3px ${dropShadowColor}, 0 0 0 1px ${innerShadowColor}, inset -2px 3px 8px 1px rgba(255,255,255,0.24)`,
        }
      : {};

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={glowStyles} // Apply dynamic inline glow styles here
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
