"use client";

import Image from "next/image";
import Link from "next/link";
import ModeToggle from "../ModeToggle";
import NavbarBrandColour from "../../public/NavbarBrandColour.png";
import NavbarBrandWhite from "../../public/NavbarBrandWhite.png";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "../ui/sheet";
import { usePathname } from "next/navigation";
import { NavbarProps } from "./Navbar";
import { useEffect, useState } from "react";

export default function MobileNavbar({ scrolled }: NavbarProps) {

    const currentPath = usePathname();
    const [open, setOpen] = useState(false);

    // Close navbar when after we go to another page
    useEffect(() => {
        if (open) {
            setOpen(false);
        }
    }, [currentPath])

    return (
        <nav className={scrolled ? "navbar-scrolled" : "navbar"}>
        <Link href="/">
            <Image src={scrolled ? NavbarBrandColour : NavbarBrandWhite} height={140} width={350} alt="Makhado Airways Logo"/>
        </Link>

        <div className="flex w-full flex gap-8 justify-end items-center font-semibold">
            <Sheet open={open} onOpenChange={() => setOpen(!open)}>
                <SheetTrigger><Menu/></SheetTrigger>
                <SheetContent>
                    <div className="flex flex-col gap-8 mt-16">
                        <Link href="/">Home</Link>
                        <Link href="getting-started">Getting Started</Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    </nav>
    )
}