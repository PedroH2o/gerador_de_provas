import { ReactNode } from "react";

interface AutoLoginProps {
    children: ReactNode;
}

export function AutoLogin({ children }: AutoLoginProps) {
    return (
        <a 
            href="#" 
            className="p-2 sm:p-4 bg-slate-700 hover:bg-slate-500 shadow rounded-full text-slate-100 text-xl sm:text-2xl flex gap-1 font-medium"
        >
            {children}
        </a>
    )
}