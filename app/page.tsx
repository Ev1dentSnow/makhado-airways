import AirlineStats from "@/components/AirlineStats";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<>
			<div className="clear-both flex flex-col items-center gap-20">
				<div className="mt-40">
					<h1 className="font-semibold text-8xl">MAKHADO AIRWAYS</h1>
					<h3 className="text-center">South Africa&apos;s <span>BUSIEST</span> Virtual Airline</h3>
				</div>
				<div className="">
					<Button variant="outline" className="w-80 h-12">Join us</Button>
				</div>
			</div>
			<AirlineStats />
		</>
	);
}
