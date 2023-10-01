import AirlineStats from "@/components/AirlineStats";
import Features from "@/components/home/Features";
import Header from "@/components/home/Header";
import Introduction from "@/components/home/Introduction";
import CallToAction from "@/components/home/CallToAction";



export default function Home() {

	return (
		<> 
			<Header />
			<section className="flex justify-between gap-8 bg-muted pt-20 pl-24">
				<Introduction />
				<AirlineStats />
			</section>
			<Features />
			<CallToAction />		
		</>
	);
}
