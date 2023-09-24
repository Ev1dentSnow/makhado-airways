import AirlineStats from "@/components/AirlineStats";
import Header from "@/components/home/Header";


export default function Home() {
	return (
		<>
			<div className="clear-both h-screen flex flex-col gap-20">
				<Header />
				<AirlineStats />
			</div>
		</>
	);
}
