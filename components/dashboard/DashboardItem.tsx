import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import CallToActionBackground from "../../public/CallToActionBackground.png";

export default function DashboardItem() {
	return (
		<Card>
			<CardHeader className="p-0 h-24 overflow-hidden">
				<Image
					src={CallToActionBackground}
					alt="Dispatch Background Image"
					className="object-cover rounded-lg"
				/>
			</CardHeader>
			<CardContent className="py-6">
				<p className="text-2xl">Dispatch</p>
			</CardContent>
		</Card>
	);
}