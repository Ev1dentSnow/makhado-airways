"use client";

import AirlineStats from "@/components/AirlineStats";
import Header from "@/components/home/Header";
import { NavbarScrolledContext } from "@/contexts/NavbarScrolledContext";
import { useContext, useEffect, useRef, useState } from "react";


export default function Home() {


	useEffect(() => parallaxWrapperRef.current?.addEventListener("scroll", () => {
		(parallaxWrapperRef.current.scrollTop > 50) ? console.log("SCROLLED!") : console.log();
		setScrolled((parallaxWrapperRef.current.scrollTop > 50));
	}));

	const parallaxWrapperRef = useRef<HTMLDivElement>();

	const { scrolled, setScrolled } = useContext(NavbarScrolledContext);

	return (
		<>
			<div ref={parallaxWrapperRef} className="parallax-wrapper clear-both h-screen">
				<Header />
				<AirlineStats />
			</div>
		</>
	);
}
