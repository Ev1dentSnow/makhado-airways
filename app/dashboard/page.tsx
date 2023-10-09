import DashboardItem from "@/components/dashboard/DashboardItem";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function DashboardPage() {

	const session = await getServerSession(authOptions);

	if (!session) {
		redirect("/api/auth/signin");
	}

	console.log(session);

	return (
		<div className="h-screen flex flex-col gap-16">

			<div className="flex flex-col gap-8 mt-16 ml-16">
				<div>
					<h1 className="font-bold text-4xl">Good evening, Phaka</h1>
				</div>
				<div>
					<h2 className="text-muted-foreground">What&apos;s on the agenda?</h2>
				</div>
			</div>

			<div className="flex flex-col px-16">
				<DashboardItem />
			</div>
		</div>
	);

}