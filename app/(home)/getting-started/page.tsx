import Instructions from "@/components/getting-started/Instructions";
import GettingStartedBackground from "../../../public/GettingStartedBackground.png";

export default function GettingStarted() {
	return (
		<div className="w-screen flex flex-col gap-12">
			<header className="h-max w-screen pt-64 pb-48 -z-4 flex justify-center bg-center bg-cover" style={{ backgroundImage: `url(${GettingStartedBackground.src})` }}>
				<h1 className="text-4xl font-semibold">Getting Started</h1>
			</header>
			<Instructions />
		</div>
	);
}