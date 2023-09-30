//TODO: REFACTOR PARALLAX TO USE REACT SCROLL PARALLAX! THIS WHOLE FOOTER LOGIC IS EXTREMELY UGLY AND DISCOMBOBULATED!

"use client"

import { usePathname } from "next/navigation"
import HomePageFooter from "./FooterContent";
import { useEffect, useState } from "react";

export default function Footer() {

    const currentPath = usePathname();
    const [isHomePage, setIsHomePage] = useState(currentPath === "/");

    useEffect(() => {
        setIsHomePage((currentPath === "/"));
    }, [currentPath])

    return isHomePage ? null : <HomePageFooter />

}