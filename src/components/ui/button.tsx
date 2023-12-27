import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

import BubbleTriangle from "../icons/bubble-triangle";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-80",
        destructive:
          "bg-destructive text-destructive-foreground hover:opacity-80",
        outline:
          "border border-input bg-background hover:bg-accent hover:opacity-80",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-80",
        tertiary: "bg-tertiary text-tertiary-foreground hover:opacity-80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        card: "bg-card text-card-foreground hover: opacity-80",
      },
      size: {
        default: "h-10 rounded-2xl px-4 py-2 ",
        sm: "h-9 rounded-2xl px-3",
        lg: "h-11 rounded-2xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const bubbleTriangleVariants = cva("", {
  variants: {
    variant: {
      default: "text-primary",
      destructive: "text-destructive",
      outline: "text-background",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
      ghost: "text-primary",
      link: "text-primary",
      card: "text-card",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

const BubbleButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { hideBubbleTriangle?: boolean; invertBubbleTriangle?: boolean }
>(
  (
    {
      hideBubbleTriangle = false,
      invertBubbleTriangle = false,
      children,
      variant,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        className={cn({ relative: !hideBubbleTriangle }, className)}
        variant={variant}
        {...props}
      >
        {children}
        {!hideBubbleTriangle && (
          <BubbleTriangle
            className={cn(
              "absolute -bottom-3",
              bubbleTriangleVariants({ variant }),
              { "-left-4 scale-[.6]": !invertBubbleTriangle },
              {
                "-right-4 scale-x-[-.6] scale-y-[.6]": invertBubbleTriangle,
              },
            )}
          />
        )}
      </Button>
    );
  },
);
BubbleButton.displayName = "BubbleButton";

export { BubbleButton, Button, buttonVariants };
