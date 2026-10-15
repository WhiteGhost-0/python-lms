import React, { forwardRef } from "react";
import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "radial-sky" | "paper-secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  external?: boolean;
}

const variantStyles: Record<string, string> = {
  "radial-sky":
    "btn-radial-sky text-white font-semibold hover:ring-2 hover:ring-sky-400/80 hover:ring-offset-1 hover:ring-offset-background hover:shadow-lg hover:shadow-sky-700/25",
  "paper-secondary":
    "btn-paper-secondary text-neutral-800 hover:text-sky-900 font-semibold hover:ring-2 hover:ring-slate-300/90 hover:ring-offset-1 hover:ring-offset-background hover:shadow-md hover:shadow-slate-900/5",
  ghost:
    "text-neutral-700 hover:text-sky-800 hover:bg-sky-50/80 font-medium hover:ring-1 hover:ring-sky-200/80",
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-xs rounded-full gap-1.5",
  md: "px-5 py-2.5 text-xs sm:text-sm rounded-full gap-2",
  lg: "px-6 py-3 text-sm sm:text-base rounded-full gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      href,
      variant = "radial-sky",
      size = "md",
      leftIcon,
      rightIcon,
      children,
      className = "",
      external = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const combinedClasses = `group inline-flex items-center justify-center font-display tracking-tight transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 active:scale-[0.985] active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none select-none ${
      variantStyles[variant] || variantStyles["radial-sky"]
    } ${sizeStyles[size] || sizeStyles.md} ${className}`.trim();

    // Link navigation (internal via next/link or external via a tag)
    if (href && !disabled) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
            aria-disabled={disabled}
          >
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children && <span>{children}</span>}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </a>
        );
      }

      return (
        <Link href={href} className={combinedClasses} aria-disabled={disabled}>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children && <span>{children}</span>}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={props.type || "button"}
        disabled={disabled}
        className={combinedClasses}
        {...props}
      >
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children && <span>{children}</span>}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
