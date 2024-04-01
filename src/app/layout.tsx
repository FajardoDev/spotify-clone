import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components";
import "animate.css";
import { SupabaseProvider } from "../../providers/SupabaseProviders";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Spotify Clone",
	description: "Lista de música",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<SupabaseProvider>
				<body className={font.className}>
					<Sidebar>{children}</Sidebar>
				</body>
			</SupabaseProvider>
		</html>
	);
}
