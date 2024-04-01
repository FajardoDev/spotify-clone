"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
	image: string;
	name: string;
	href: string;
}

export const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
	const router = useRouter();

	const onClick = () => {
		// TODO Agregar autenticación antes de enviar
		router.push(href);
	};

	return (
		<button
			onClick={onClick}
			className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 pr-4 transition-all ease-out duration-150"
		>
			<div className="relative min-h-[64px] min-w-[64px] animate__animated animate__fadeInLeft">
				<Image className="object-cover" fill src={image} alt="Image favoritos" />
			</div>

			<p className="font-medium truncate py-5 animate__animated animate__fadeInRight">
				{name}
			</p>

			{/* Al haver hover se muestra el botón */}
			<div className="absolute transition-all ease-out duration-150 opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
				<FaPlay className="text-black" />
			</div>
		</button>
	);
};
