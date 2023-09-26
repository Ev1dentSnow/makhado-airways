/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { createContext, useState } from "react";


export const NavbarScrolledContext = createContext({
	scrolled: false,
	setScrolled: () => {}
});

//@ts-ignore
export function NavbarScrolledContextProvider({ children }) {

	const [scrolled, setScrolled] = useState(false);

	const contextValue = {
		scrolled,
		setScrolled
	};

	return (
		//@ts-ignore
		<NavbarScrolledContext.Provider value={contextValue}>
			{ children }
		</NavbarScrolledContext.Provider>
	);
}