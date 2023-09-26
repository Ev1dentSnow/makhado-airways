import Navigation from "@/components/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ModeToggle from "@/components/ModeToggle";
import { NavbarScrolledContextProvider } from "@/contexts/NavbarScrolledContext";

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
				<div className="root">
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						disableTransitionOnChange
					>
						{/* ACTUAL COMPONENTS START HERE*/}
						<NavbarScrolledContextProvider>
							<Navigation />
							{children}
						</NavbarScrolledContextProvider>

						{/* ACTUAL COMPONENTS END HERE*/}
					</ThemeProvider>
				</div>

			</body>
		</html>
	);
}
