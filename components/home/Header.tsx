"use client";

import Image from "next/image";
import MakhadoBackground from "../.././public/MakhadoBackground.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function Header() {
	return (
		<>
		<ParallaxProvider>
		<div className="h-screen w-screen overflow-hidden">
			<Parallax speed={-20}>
				<div className="h-screen">
					<Image 
						className="-z-10 object-cover"
						src={MakhadoBackground.src}
						alt="Makhado Aiways header background"
						fill
					/>
				</div>
			</Parallax>
				<header className="absolute inset-0 flex flex-col items-center justify-center pt-12">
					<h4 className="text-6xl mb-8">Welcome to</h4>
					<h1 className="font-bold text-8xl tracking-wide mb-8">Makhado Airways</h1>
					<h4 className="text-center text-3xl font-medium tracking-wide mb-12">&quot;South Africa&apos;s <span className="italic">favourite</span> virtual airline&quot;</h4>
					<Button variant="outline" className="w-80 h-12 text-xl bg-background" asChild>
						<Link href="getting-started">Join The Crew</Link>
					</Button>
				</header>
	
		</div>
		</ParallaxProvider>
		</>
	);
}