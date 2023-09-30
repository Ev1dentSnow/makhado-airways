"use client"

import { usePathname } from "next/navigation"
import HomePageFooter from "./HomePageFooter";
import { useEffect, useState } from "react";

export default function Footer() {

    const currentPath = usePathname();
    const [isHomePage, setIsHomePage] = useState(currentPath === "/");

    useEffect(() => {
        setIsHomePage((currentPath === "/"));
    }, [currentPath])

    return isHomePage ? <HomePageFooter /> : <div><p>OTHER PAGES FOOTERS</p></div>

}