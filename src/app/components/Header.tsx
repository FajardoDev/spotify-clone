"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Botton } from ".";

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}

export const Header: React.FC<HeaderProps> = ({ children, className }) => {
	const router = useRouter();

	const handleLogout = () => {
		// Todo Manejar el cierre de sesión en un futuro
	};

	return (
		<div
			className={twMerge(
				`

        h-fit p-6
       bg-gradient-to-b from-cyan-950 via-purple-600/40 to-indigo-950 antialiased  selection:bg-blue-600 selection:text-white text-white dark:text-slate-300
        `,
				className,
			)}
		>
			<div className="w-full mb-4 flex items-center justify-between">
				{/* Ocultar todo el contenido en mobile */}
				<div className="hidden md:flex items-center gap-x-4">
					<button
						onClick={() => router.back()}
						className="rounded-full bg-black flex items-center justify-center hover:opacity-80
                       transition-all duration-150 ease-out"
					>
						<RxCaretLeft size={35} className="text-white" />
					</button>
					<button
						onClick={() => router.forward()}
						className="rounded-full bg-black flex items-center justify-center hover:opacity-80
                       transition-all duration-150 ease-out"
					>
						<RxCaretRight size={35} className="text-white" />
					</button>
				</div>

				<div className="flex md:hidden gap-x-4 items-center">
					{/* En dispositivo pequeño */}
					<button
						className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-80
                       transition-all duration-150 ease-out"
					>
						<HiHome className="text-black" size={20} />
					</button>
					<button
						className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-80
                       transition-all duration-150 ease-out"
					>
						<BiSearch className="text-black" size={20} />
					</button>
				</div>

				{/* componente Registrarse */}
				<div className="flex justify-between items-center gap-x-4">
					<>
						{/* Estos botones fueron creado en Botton de forma dinámica */}
						<div>
							<Botton
								className="bg-transparent text-neutral-300 font-medium"
								onClick={() => {}}
							>
								Regístrate
							</Botton>
						</div>
						<div>
							<Botton className="bg-white px-6 py-2" onClick={() => {}}>
								Acceso
							</Botton>
						</div>
					</>
				</div>
			</div>
			{/* Aquí se muestra enl contenido de la página */}
			{children}
		</div>
	);
};
