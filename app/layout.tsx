import Navigation from "@/components/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ModeToggle from "@/components/ModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Makhado Airways",
	description: "South Africa's Busiest Virtual AIrline",
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					disableTransitionOnChange
				>
					{/* ACTUAL COMPONENTS START HERE*/}
					<div className="flex gap-2 float-right mr-20 mt-6 mb-6 bg-white">
						<Navigation />
						<ModeToggle />
					</div>

					<div>{children}</div>

					<div></div>
					
					{/* ACTUAL COMPONENTS END HERE*/}
				</ThemeProvider>
			</body>
		</html>
	);
}
