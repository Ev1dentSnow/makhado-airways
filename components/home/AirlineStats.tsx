
import { Card, CardHeader, CardContent } from ".././ui/card";
import { User, Map, PlaneTakeoff } from "lucide-react"; 

export const revalidate = 600; // 600 seconds (10 minutes)

export default async function AirlineStats() {

	let data: Array<Object> | null = null;
	const response = await fetch("http://localhost:3000/api/pilots");

	if (response.ok) {
		const data = await response.json()
	}
	
	const calculateNumPilots = () => {
		if (data !== null) {
			return data.length;
		}
		else {
			return 24;
		}
	}

	return (
		<>
			<section className="grid grid-rows-3 gap-6 sm:gap-12 bg-muted sm:mr-6 sm:pr-48 pb-16">
				<Card className="shadow-md border-t-2 border-r-0 border-b-0 border-l-0 border-primary">
					<CardHeader className="items-center">
						<User size={44} className="white dark:black"/>
					</CardHeader>
					<CardContent className="text-center">
						<h1 className="text-4xl">{calculateNumPilots()}</h1>
						<h5 className="text-xl text-muted-foreground">Pilots</h5>
					</CardContent>
				</Card>

				<Card className="shadow-md border-t-2 border-r-0 border-b-0 border-l-0 border-primary">
					<CardHeader className="items-center">
						<Map size={44} className="white dark:black"/>
					</CardHeader>
					<CardContent className="text-center">
						<h1 className="text-4xl">84</h1>
						<h5 className="text-xl text-muted-foreground">Routes</h5>
					</CardContent>
				</Card>

				<Card className="shadow-md border-t-2 border-r-0 border-b-0 border-l-0 border-primary">
					<CardHeader className="items-center">
						<PlaneTakeoff size={44} className="white dark:black" />
					</CardHeader>
					<CardContent className="text-center">
						<h1 className="text-4xl">3012</h1>
						<h5 className="text-xl text-muted-foreground">Successful sectors flown</h5>
					</CardContent>
				</Card>

			</section>
		</>
	);
}