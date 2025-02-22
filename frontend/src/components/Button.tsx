import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  icon: "lightning" | "play";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant, icon, children }) => {
  const baseClasses =
    "group relative px-8 py-4 overflow-hidden rounded-full transform transition-all duration-300 hover:scale-105";
  const primaryClasses = "bg-gradient-to-r from-[#ff4800] to-[#ff8400]";
  const secondaryClasses = "border-2 border-[#ff4800]";

  const iconComponents = {
    lightning: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    play: (
      <svg
        className="w-5 h-5 text-[#ff4800] group-hover:animate-pulse"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  return (
    <button
      className={`${baseClasses} ${
        variant === "primary" ? primaryClasses : secondaryClasses
      }`}
    >
      <span className="relative inline-flex items-center gap-2">
        {iconComponents[icon]}
        <span
          className={`font-medium ${
            variant === "secondary"
              ? "text-[#ff4800] group-hover:text-white transition-colors duration-300"
              : ""
          }`}
        >
          {children}
        </span>
      </span>
      {variant === "secondary" && (
        <div className="absolute inset-0 bg-[#ff4800]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </button>
  );
};
