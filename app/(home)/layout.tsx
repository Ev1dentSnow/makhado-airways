import Navigation from "@/components/navigation/Navigation";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navigation />
			{children}
		</>
	);
}