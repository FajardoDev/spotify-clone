"use client";
import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { Database } from "../types_db";

interface SupabaseProviderProps {
	children: React.ReactNode;
}

export const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
	children,
}) => {
	//! npm install @supabase/auth-helpers-nextjs && npm install @supabase/auth-helpers-react
	const [supabaseClient] = useState(() =>
		createClientComponentClient<Database>(),
	);

	return (
		<SessionContextProvider supabaseClient={supabaseClient}>
			{children}
		</SessionContextProvider>
	);
};
