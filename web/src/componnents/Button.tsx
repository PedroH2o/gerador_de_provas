import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function Button({children, ...props}: ButtonProps) {
    return(
        <button {...props} className="w-full px-4 py-2 sm:py-4 bg-blue-800 hover:bg-blue-600 text-slate-100  text-base sm:text-xl font-bold rounded-lg">
            {children}
        </button>
    )
}