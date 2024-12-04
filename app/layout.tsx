import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
	title: "Makhado Airways | Virtual Airline",
	description: "South Africa's Busiest Virtual Airline",
	themeColor: "hsl(210, 64, 70)"
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				{/* ACTUAL COMPONENTS START HERE*/}
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					<Navigation />
					{children}
					<Footer />
				</ThemeProvider>
				{/* ACTUAL COMPONENTS END HERE*/}
			</body>
		</html>
	);
}
