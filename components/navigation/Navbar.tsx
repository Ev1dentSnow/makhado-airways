"use client";

import Image from "next/image";
import Link from "next/link";
import ModeToggle from "../ModeToggle";
import NavbarBrandColour from "../../public/NavbarBrandColour.png";
import NavbarBrandWhite from "../../public/NavbarBrandWhite.png";
import { useContext } from "react";
import { NavbarScrolledContext } from "@/contexts/NavbarScrolledContext";

export default function Navbar() {

    const { scrolled } = useContext(NavbarScrolledContext);

    return (
        <nav className={scrolled ? "navbar-scrolled" : "navbar"}>
            <Link href="/">
                <Image src={scrolled ? NavbarBrandColour : NavbarBrandWhite} height={140} width={350} alt="Makhado Airways Logo"/>
            </Link>

            <div className="flex w-full flex gap-8 justify-end items-center font-semibold">
                <Link className="text-lg hover:text-blue-400 transition-all duration-500" href="/">Home</Link>
                <Link className="text-lg hover:text-blue-400 transition-all duration-500" href="getting-started">Getting Started</Link>
                <ModeToggle />
            </div>
    </nav>
    )
}