import AirlineStats from "@/components/home/AirlineStats";
import Features from "@/components/home/Features";
import Header from "@/components/home/Header";
import Introduction from "@/components/home/Introduction";
import CallToAction from "@/components/home/CallToAction";



export default function Home() {

	return (
		<> 
			<Header />
			<section className="flex flex-col sm:flex-row justify-between gap-16 bg-muted pt-20 px-12 sm:pl-24">
				<Introduction />
				<AirlineStats />
			</section>
			<Features />
			<CallToAction />		
		</>
	);
}
