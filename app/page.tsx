import AirlineStats from "@/components/AirlineStats";
import Header from "@/components/home/Header";


export default function Home() {
	return (
		<>
			<div className="parallax-wrapper clear-both h-screen">
				<Header />
				<AirlineStats />
			</div>
		</>
	);
}
