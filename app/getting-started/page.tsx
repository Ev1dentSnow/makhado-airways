import Instructions from "@/components/getting-started/Instructions";

export default function GettingStarted() {
	return (
		<div className="flex flex-col gap-12">
			<header className="h-max pt-64 pb-48 -z-4 flex justify-center bg-muted-foreground">
				<h1 className="text-6xl font-semibold">Getting Started</h1>
			</header>
			<Instructions />
		</div>
	);
}