import {SessionProvider} from "next-auth/react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<SessionProvider>
			<div>
				<h1>This is the dashboards navbar</h1>
				{children}
			</div>
		</SessionProvider>
	);
}