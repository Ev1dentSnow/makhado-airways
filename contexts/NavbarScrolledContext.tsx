"use client";

import { createContext, useState } from "react";


export const NavbarScrolledContext = createContext();

export function NavbarScrolledContextProvider({ children }) {

	const [scrolled, setScrolled] = useState(false);

	const contextValue = {
		scrolled,
		setScrolled
	};

	return (
		<NavbarScrolledContext.Provider value={contextValue}>
			{ children }
		</NavbarScrolledContext.Provider>
	);
}