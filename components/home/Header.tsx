import Image from "next/image";
import MakhadoBackground from "../.././public/MakhadoBackground.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
	return (
		<header className="parallax-header">
			<Image src={MakhadoBackground} alt="Makhado Airways B738 background image" className="parallax-background" />
			<h1 className="font-bold text-8xl tracking-wide mb-8">MAKHADO AIRWAYS</h1>
			<h4 className="text-center text-3xl font-medium tracking-wide mb-12">&quot;South Africa&apos;s <span className="italic">most popular</span> virtual airline&quot; ~ some celebrity</h4>
			<Button variant="outline" className="w-80 h-12 text-xl" asChild>
				<Link href="getting-started">Join The Team</Link>
			</Button>
		</header>
	);
}