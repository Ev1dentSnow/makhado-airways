"use client";

import { useEffect, useState, useContext, useRef } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { NavbarScrolledContext } from "@/contexts/NavbarScrolledContext";

export default function Navigation() {

	const [windowWidth, setWindowWidth] = useState(0);
	
	const { setScrolled } = useContext(NavbarScrolledContext);

	const updateWindowWidth = () => {
		setWindowWidth(window.innerWidth);
	  };

	const updateScrolled = () => {
		setScrolled((window.scrollY > 50));
	}
	
	// Scroll listener for navbar shrink on any page other than home page
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
			return <Navbar />;
		}
		else {
			return <MobileNavbar />;
		}
	}

	if (windowWidth === 0) {
		return null;
	}

	return setNavbar();
}