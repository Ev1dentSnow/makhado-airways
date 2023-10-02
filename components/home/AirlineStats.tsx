
import { Card, CardHeader, CardContent } from ".././ui/card";
import { User, Map, PlaneTakeoff } from "lucide-react"; 

async function getData() {

	let data = {
		// simple default known values to easily indicate error in data fetching
		numPilots: 27,
		numRoutes: 300,
		numSectorsFlown: 2000,
	}

	let pilotData: Array<Object> | null = null;
	let routeData: Array<Object> | null = null;
	let sectorData: Array<Object> | null = null;

	const pilotResponse = await fetch("http://localhost:3000/api/pilots");
	const routeResponse = await fetch("http://localhost:3000/api/routes")
	const sectorResponse = await fetch("http://localhost:3000/api/sectors");

	if (pilotResponse.ok && routeResponse.ok && sectorResponse.ok) {

		pilotData = await pilotResponse.json();
		routeData = await routeResponse.json();
		sectorData = await sectorResponse.json();

		data.numPilots = pilotData!.length;
		data.numRoutes = routeData!.length;
		data.numSectorsFlown = sectorData!.length;

	}
	return data;
}

export default async function AirlineStats() {

	const data = await getData();

	return (
		<>
			<section className="grid grid-rows-3 gap-6 sm:gap-12 bg-muted sm:mr-6 sm:pr-48 pb-16">
				<Card className="shadow-md border-t-2 border-r-0 border-b-0 border-l-0 border-primary">
					<CardHeader className="items-center">
						<User size={44} className="white dark:black"/>
					</CardHeader>
					<CardContent className="text-center">
						<h4 className="text-4xl">{data.numPilots}</h4>
						<h5 className="text-xl text-muted-foreground">Pilots</h5>
					</CardContent>
				</Card>

				<Card className="shadow-md border-t-2 border-r-0 border-b-0 border-l-0 border-primary">
					<CardHeader className="items-center">
						<Map size={44} className="white dark:black"/>
					</CardHeader>
					<CardContent className="text-center">
						<h4 className="text-4xl">{data.numRoutes}</h4>
						<h5 className="text-xl text-muted-foreground">Routes</h5>
					</CardContent>
				</Card>

				<Card className="shadow-md border-t-2 border-r-0 border-b-0 border-l-0 border-primary">
					<CardHeader className="items-center">
						<PlaneTakeoff size={44} className="white dark:black" />
					</CardHeader>
					<CardContent className="text-center">
						<h4 className="text-4xl">{data.numSectorsFlown}</h4>
						<h5 className="text-xl text-muted-foreground">Sectors flown</h5>
					</CardContent>
				</Card>
			</section>
		</>
	);
}