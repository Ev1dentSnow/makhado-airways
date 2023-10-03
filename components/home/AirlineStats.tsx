import { Card, CardHeader, CardContent } from ".././ui/card";
import { User, Map, PlaneTakeoff } from "lucide-react"; 

async function getPilots() {
	const response = await fetch("https://api.ftw-sim.net/v1/airline/pilots", {
        next: { revalidate: 600 }, // 600 seconds (10 minutes)
        headers: {
            "readaccesskey": process.env.FTW_AIRLINE_API_KEY!
        },
    });

    if (!response.ok) {
        console.error("Error fetching pilot data from FTW");
		return 27;
    }
    const data: Array<Object> = await response.json();
    return data.length;
}

async function getRoutes() {
	const response = await fetch("https://api.ftw-sim.net/v1/airline/routes", {
        next: { revalidate: 600 }, // 600 seconds (10 minutes)
        headers: {
            "readaccesskey": process.env.FTW_AIRLINE_API_KEY!
        },
    });

    if (!response.ok) {
        console.error("Error fetching route data from FTW");
		return 300;
    }

    const data: Array<Object> = await response.json();
    return data.length;
}

async function getSectorsFlown() {
	const response = await fetch("https://api.ftw-sim.net/v1/airline/logbook", {
        next: { revalidate: 600 }, // 600 seconds (10 minutes)
        headers: {
            "readaccesskey": process.env.FTW_AIRLINE_API_KEY!
        },
    });

    if (!response.ok) {
        console.error("Error fetching sectors flown data from FTW");
		return 2000;
    }

    const data: Array<Object> = await response.json();
    return data.length;
}


export default async function AirlineStats() {

	const numPilots = await getPilots();
	const numRoutes = await getRoutes();
	const numSectorsFlown = await getSectorsFlown();

	return (
		<>
			<div className="flex flex-col items-center gap-6 2xl:pr-36">

				<section className="flex flex-col gap-6 mb-6">
					<div className="flex flex-col gap-6 items-center">
							<h4 className="text-4xl font-bold tracking-wider">LIVE STATS</h4>
							<h5 className="text-xl text-center text-muted-foreground">Delivered via high speed telegraph from our ops center</h5>
						</div>
				</section>

				<section className="w-3/4 2xl:w-full grid grid-rows-3 gap-6 sm:gap-12 bg-muted pb-16">

					<Card className="shadow-md border-t-2 border-r-0 border-b-0 border-l-0 border-primary">
						<CardHeader className="items-center">
							<User size={44} className="white dark:black"/>
						</CardHeader>
						<CardContent className="text-center">
							<h4 className="text-4xl">{numPilots}</h4>
							<h5 className="text-xl text-muted-foreground">Pilots</h5>
						</CardContent>
					</Card>

					<Card className="shadow-md border-t-2 border-r-0 border-b-0 border-l-0 border-primary">
						<CardHeader className="items-center">
							<Map size={44} className="white dark:black"/>
						</CardHeader>
						<CardContent className="text-center">
							<h4 className="text-4xl">{numRoutes}</h4>
							<h5 className="text-xl text-muted-foreground">Routes</h5>
						</CardContent>
					</Card>

					<Card className="shadow-md border-t-2 border-r-0 border-b-0 border-l-0 border-primary">
						<CardHeader className="items-center">
							<PlaneTakeoff size={44} className="white dark:black" />
						</CardHeader>
						<CardContent className="text-center">
							<h4 className="text-4xl">{numSectorsFlown}</h4>
							<h5 className="text-xl text-muted-foreground">Sectors flown</h5>
						</CardContent>
					</Card>
				</section>
			</div>
		</>
	);
}