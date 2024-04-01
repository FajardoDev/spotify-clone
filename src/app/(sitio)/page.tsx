import { Header, ListItem } from "../components";

export default function HomePage() {
	return (
		<>
			<div className="bg-gradient-to-r from-black via-cyan-950 to-indigo-950 antialiased  selection:bg-blue-600 selection:text-white text-white dark:text-slate-300 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
				<Header>
					<div className="mb-2">
						<h1 className="text-white text-3xl font-semibold animate__animated animate__fadeInDown ">
							Bienvenido de nuevo
						</h1>

						<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
							<ListItem
								image="/images/liked.png"
								name="Canciones me Gustan"
								href="liked"
							/>
						</div>
					</div>
				</Header>

				<div className="mt-2 mb-7 px-6">
					<div className="flex justify-between items-center">
						<h1 className="text-white text-2xl font-semibold">
							Canciones más nuevas
						</h1>
					</div>
					<div>Lista de canciones!</div>
				</div>
			</div>
		</>
	);
}

// <PageContent songs={songs} />
