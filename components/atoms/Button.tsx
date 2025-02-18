import React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "accent";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary", size = "medium", disabled, className }) => {
    const baseStyles = "rounded-xl font-medium transition-all duration-300 w-full sm:w-auto";
    const variants = {
        primary: "bg-primary text-white hover:bg-accent",
        secondary: "bg-secondary text-white hover:bg-gray-700",
        accent: "bg-accent text-black hover:bg-yellow-600",
    };
    const sizes = {
        small: "text-sm px-1 py-1 sm:px-3 sm:py-2",
        medium: "text-base px-1 py-2 sm:px-4 sm:py-3",
        large: "text-lg px-2 py-2 sm:px-6 sm:py-4",
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;