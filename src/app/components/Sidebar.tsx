"use client";

import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { Box, Library, SidebarItem } from ".";

interface SidebarProps {
	children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
	const pathname = usePathname();

	const routes = useMemo(
		() => [
			{
				icon: HiHome,
				label: "Home",
				active: pathname !== "/search",
				href: "/",
			},
			{
				icon: BiSearch,
				label: "Search",
				active: pathname === "/search",
				href: "/search",
			},
		],
		[pathname],
	);

	return (
		<div className="flex h-full bg-gradient-to-r from-black via-cyan-950 to-indigo-950 antialiased  selection:bg-blue-600 selection:text-white text-white dark:text-slate-300">
			<div className="hidden md:flex flex-col gap-y-2 h-full w-[300px] p-2">
				<Box>
					<div className="flex flex-col gap-y-4 px-5 py-4">
						{routes.map((item) => (
							<SidebarItem key={item.label} {...item} />
						))}
					</div>
				</Box>
				<Box className="overflow-y-auto h-full">
					<Library />
				</Box>
			</div>
			<main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
		</div>
	);
};
