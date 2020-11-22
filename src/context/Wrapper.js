import React, { createContext, useState } from "react";
import TopNav from "../comp/TopNav";

export const AppContext = createContext();

export default function Wrapper({ children }) {
	return (
		<AppContext.Provider>
			<TopNav />
			{children}
		</AppContext.Provider>
	);
}
