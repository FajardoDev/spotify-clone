"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

export const Library = () => {
	const onClick = () => {
		// TODO Gestionar la carga más tarde
	};

	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-between px-5 pt-4">
				<div className="inline-flex items-center gap-x-2">
					<TbPlaylist size={26} className="text-neutral-400" />

					<p className="text-md font-medium text-neutral-400">Tu biblioteca</p>
				</div>
				<AiOutlinePlus
					onClick={onClick}
					size={20}
					className="text-neutral-400 cursor-pointer hover:text-neutral-300 transition-all duration-150 ease-out"
				/>
			</div>
			<div className="flex flex-col gap-y-2 mt-4 px-3">Lista de Canciones!</div>
		</div>
	);
};
