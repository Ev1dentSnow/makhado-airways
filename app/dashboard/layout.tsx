export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<h1>This is the dashboards navbar</h1>
			{children}
		</div>
	);
}