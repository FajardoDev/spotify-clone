import React from "react";
import { twMerge } from "tailwind-merge";

interface BoxProps {
	children: React.ReactNode;
	className?: string;
}

export const Box: React.FC<BoxProps> = ({ children, className }) => {
	return (
		<div
			className={twMerge(
				`
				bg-gradient-to-r from-black via-cyan-950 to-indigo-950 antialiased  selection:bg-blue-950 selection:text-white text-white dark:text-slate-300 rounded-lg h-fit 
    `,
				className,
			)}
		>
			{children}
		</div>
	);
};

// npm install tailwind-merge
