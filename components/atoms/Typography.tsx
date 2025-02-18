import React, { ReactNode } from "react";

interface TypographyProps {
    children: ReactNode;
    variant?: "h1" | "h2" | "h3" | "body" | "caption" | "quote" | "italic" | "underline";
    className?: string;
}

const Typography: React.FC<TypographyProps> = ({ children, variant = "body", className }) => {
    const variants = {
        h1: "text-4xl font-bold",
        h2: "text-3xl font-semibold",
        h3: "text-2xl font-medium",
        body: "text-base",
        caption: "text-sm text-gray-500",
        quote: "text-lg italic border-l-4 border-gray-300 pl-4 text-gray-700",
        italic: "italic",
        underline: "underline",
    };

    return <p className={`${variants[variant]} ${className}`}>{children}</p>;
};

export default Typography;