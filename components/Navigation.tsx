"use client";

import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import NavbarBrandColour from "../public/NavbarBrandColour.png";
import NavbarBrandWhite from "../public/NavbarBrandWhite.png";
import { useState } from "react";

export default function Navigation() {

	const [isScrolled, setIsScrolled] = useState(false);

	return(
		<nav className="fixed w-screen z-50 bg-transparent flex p-12">
			<Link href="/">
				<Image src={NavbarBrandWhite} height={140} width={350} alt="Makhado Airways Logo"/>
			</Link>
			<div className="w-full flex gap-8 justify-end items-center font-semibold">
				<Link className="hover:text-blue-400 transition-all duration-500" href="/">Home</Link>
				<Link className="hover:text-blue-400 transition-all duration-500" href="getting-started">Getting Started</Link>
				<ModeToggle />
			</div>
		</nav>
	);
}