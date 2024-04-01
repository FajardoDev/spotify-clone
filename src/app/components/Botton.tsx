// Componente Registrarse

import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// Interfaz Inteligente para los botones regitrar y de acceso
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// forwardRef Permite que su componente exponga un nodo DOM a un componente principal mediante una referencia.
export const Botton = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, disabled, type = "button", ...props }, ref) => {
		return (
			<button
				type={type}
				className={twMerge(
					`
        w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-80 transition-all ease-out duration-150
        `,
					className,
				)}
				disabled={disabled}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		);
	},
);

Botton.displayName = "Botton";
