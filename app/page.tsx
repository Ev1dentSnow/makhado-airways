/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useRef, useEffect, useContext } from "react";
import AirlineStats from "@/components/AirlineStats";
import Features from "@/components/home/Features";
import Header from "@/components/home/Header";
import Introduction from "@/components/home/Introduction";
import { NavbarScrolledContext } from "@/contexts/NavbarScrolledContext";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/footer/HomePageFooter";



export default function Home() {

	const parallaxWrapperRef = useRef<HTMLDivElement>();

	const { setScrolled } = useContext(NavbarScrolledContext);

	const updateHomePageScrolled = () => {
		setScrolled((parallaxWrapperRef.current!.scrollTop > 50));
	}

	// Scroll listener for navbar shrink on home page
	useEffect(() => { 
		parallaxWrapperRef.current?.addEventListener("scroll", updateHomePageScrolled)
		return () => parallaxWrapperRef?.current?.removeEventListener("scroll", updateHomePageScrolled)
	}, []);

	return (
		<> 
			{/*// @ts-ignore */}
			<div ref={parallaxWrapperRef} className="parallax-wrapper clear-both h-screen">
				<Header />
				<section className="flex justify-between gap-8 bg-muted pt-20 pl-24">
					<Introduction />
					<AirlineStats />
				</section>
				<Features />
				<CallToAction />
			</div>
		</>
	);
}
