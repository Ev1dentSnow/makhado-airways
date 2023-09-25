import Image from "next/image";
import MakhadoBackground from "../.././public/MakhadoBackground.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
	return (
		<header className="parallax-header">
			<Image src={MakhadoBackground} alt="Makhado Airways B738 background image" className="parallax-background" />
			<h4 className="text-6xl mb-8">Welcome to</h4>
			<h1 className="font-bold text-8xl tracking-wide mb-8">Makhado Airways</h1>
			<h4 className="text-center text-3xl font-medium tracking-wide mb-12">&quot;South Africa&apos;s <span className="italic">favourite</span> virtual airline&quot;</h4>
			<Button variant="outline" className="w-80 h-12 text-xl" asChild>
				<Link href="getting-started">Join The Team</Link>
			</Button>
		</header>
	);
}