"use client"

import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/lib/utils"

const signalVariants = cva(
  "absolute rounded-full border",
  {
    variants: {
      size: {
        sm: "w-16 h-16",
        md: "w-24 h-24",
        lg: "w-32 h-32",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface SignalAnimationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof signalVariants> {
  color?: string
  count?: number
  children?: React.ReactNode
}

export const SignalAnimation = React.forwardRef<HTMLDivElement, SignalAnimationProps>(
  ({ className, size, color = "white", count = 3, children, ...props }, ref) => {
    return (
      <div className={cn("relative inline-flex items-center justify-center", className)} ref={ref} {...props}>
        {[...Array(count)].map((_, index) => (
          <div
            key={index}
            className={cn(
              signalVariants({ size }),
              "opacity-0 animate-signal-ping"
            )}
            style={{
              animationDelay: `${index * 1}s`,
              border: `1px solid ${color}`,
            }}
          />
        ))}
        <div
          className={cn(
            signalVariants({ size }),
            "flex items-center justify-center z-10",
            "border border-primary/50 bg-gradient-to-br from-background from-10% via-background via-55% to-primary to-100%"
          )}
          // style={{ backgroundColor: color }}
        >
          {children}
        </div>
      </div>
    )
  }
)

SignalAnimation.displayName = "SignalAnimation"

