import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: boolean;
    asChild?: boolean;
}

export function Button({children, asChild, variant = false, ...props}: ButtonProps) {

    const Comp = asChild ? Slot : 'button'

    return(
        <Comp {...props} className={clsx('w-full flex justify-center items-center gap-1 px-4 py-2 sm:py-3 text-base sm:text-xl font-bold rounded-lg drop-shadow-sm',
            {
                'bg-blue-800 hover:bg-blue-600 text-slate-100': variant === false,
                'bg-rose-700 hover:bg-rose-500 text-slate-100': variant === true,
                'bg-slate-300 hover:bg-slate-200 text-slate-800': asChild,
            }
        )}>
            {children}
        </Comp>
    )
}