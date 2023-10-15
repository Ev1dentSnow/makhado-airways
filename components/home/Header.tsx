"use client";

import Image from "next/image";
import MakhadoBackground from "../.././public/MakhadoBackground.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function Header() {
	return (
		<ParallaxProvider>
			<div className="h-screen w-full overflow-hidden">
				<Parallax speed={-20}>
					<div className="h-screen w-full">
						<Image 
							className="-z-10 object-cover"
							src={MakhadoBackground}
							alt="Makhado Aiways header background"
							quality={100}
							fill
							priority
						/>
					</div>
				</Parallax>
					<header className="absolute inset-0 flex flex-col items-center justify-center pt-12">
						<h1 className="text-4xl sm:text-6xl text-center mb-8">Welcome to</h1>
						<h1 className="text-6xl sm:text-8xl text-center font-bold tracking-wide mb-8">Makhado Airways</h1>
						<h2 className="text-2xl sm:text-3xl text-center font-medium tracking-wide mb-12 px-6 sm:px-0">&quot;South Africa&apos;s <span className="italic">favourite</span> virtual airline&quot;</h2>
						<Button variant="outline" className="w-80 h-12 text-xl bg-background" asChild>
							<Link href="getting-started">Join The Crew</Link>
						</Button>
					</header>
			</div>
		</ParallaxProvider>
	);
}