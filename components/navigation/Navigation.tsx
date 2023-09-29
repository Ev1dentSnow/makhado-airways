"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

export default function Navigation() {

	const [windowWidth, setWindowWidth] = useState(0);

	const updateWindowWidth = () => {
		setWindowWidth(window.innerWidth);
	  };

	useEffect(() => {

		updateWindowWidth();
		window.addEventListener("resize", updateWindowWidth)
		return () => window.removeEventListener("resize", updateWindowWidth)

	}, [windowWidth])

	const setNavbar = () => {
		if (windowWidth > 768) {
			return <Navbar />;
		}
		else {
			return <MobileNavbar />;
		}
	}

	return setNavbar();
}