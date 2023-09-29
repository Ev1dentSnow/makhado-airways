"use client";

import Image from "next/image";
import Link from "next/link";
import ModeToggle from "../ModeToggle";
import NavbarBrandColour from "../../public/NavbarBrandColour.png";
import NavbarBrandWhite from "../../public/NavbarBrandWhite.png";
import { useContext } from "react";
import { NavbarScrolledContext } from "@/contexts/NavbarScrolledContext";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "../ui/sheet";
import { Button } from "../ui/button";

export default function MobileNavbar() {

    const { scrolled } = useContext(NavbarScrolledContext);

    return (

         <Sheet>
            <SheetTrigger>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>This is the mobile navbar</SheetTitle>
                <SheetDescription>
                    Welcome to the mobile navbar
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    
    )
}