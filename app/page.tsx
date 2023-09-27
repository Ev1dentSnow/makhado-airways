/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import AirlineStats from "@/components/AirlineStats";
import Features from "@/components/home/Features";
import Header from "@/components/home/Header";
import Introduction from "@/components/home/Introduction";
import { NavbarScrolledContext } from "@/contexts/NavbarScrolledContext";
import { useContext, useEffect, useRef} from "react";


export default function Home() {


	useEffect(() => parallaxWrapperRef.current?.addEventListener("scroll", () => {
		//@ts-ignore
		setScrolled((parallaxWrapperRef.current!.scrollTop > 50));
	}));

	const parallaxWrapperRef = useRef<HTMLDivElement>();

	const { setScrolled } = useContext(NavbarScrolledContext);

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

			</div>
		</>
	);
}
