import DashboardItem from "@/components/dashboard/DashboardItem";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DispatchForm from "@/components/dashboard/DispatchForm";

export default async function DashboardPage() {

	const session = await getServerSession(authOptions);

	if (!session) {
		redirect("/api/auth/signin");
	}


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
				<Dialog>
					<DialogTrigger asChild={true}>
						<DashboardItem />
					</DialogTrigger>
					<DialogContent>
						<DialogHeader className="pb-4">
							<DialogTitle className="pb-4">Submit a Dispatch Request</DialogTitle>
							<DialogDescription>Your request will be sent via our high speed flux capacitor network to the #dispatch-requests channel in the discord</DialogDescription>
						</DialogHeader>
						<DispatchForm />
					</DialogContent>
				</Dialog>
			</div>



		</div>
	);

}