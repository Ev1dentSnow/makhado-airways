import AuthProvider from "@/app/AuthProvider";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<AuthProvider>
			<div>
				<h1>This is the dashboards navbar</h1>
				{children}
			</div>
		</AuthProvider>
	);
}