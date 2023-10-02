"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

export default function Navigation() {

	const [windowWidth, setWindowWidth] = useState(0);
	const [scrolled, setScrolled] = useState(false);
	
	const updateWindowWidth = () => {
		setWindowWidth(window.innerWidth);
	  };

	const updateScrolled = () => {
		setScrolled((window.scrollY > 50));
	}
	
	// Scroll listener for navbar shrink
	useEffect(() => {
		window.addEventListener("scroll", updateScrolled);
		return () => window.removeEventListener("scroll", updateScrolled);
	}, []);

	// Window resize listener to toggle desktop or mobile navbar
	useEffect(() => {
		updateWindowWidth();
		window.addEventListener("resize", updateWindowWidth);
		return () => window.removeEventListener("resize", updateWindowWidth);
	}, [windowWidth])


	const setNavbar = () => {
		if (windowWidth > 768) {
			return <Navbar scrolled={scrolled} />;
		}
		else {
			return <MobileNavbar scrolled={scrolled} />;
		}
	}

	if (windowWidth === 0) {
		return null;
	}

	return setNavbar();
}