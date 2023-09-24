import Navigation from "@/components/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ModeToggle from "@/components/ModeToggle";
import backgroundImage from "../public/MakhadoBackground.png";

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
					enableSystem
					disableTransitionOnChange
				>
					<div className="h-screen" style={{ backgroundImage: `url(${backgroundImage.src})`}}>
						<div className="flex gap-2 float-right mr-20 mt-6">
							<Navigation />
							<ModeToggle />
						</div>
					</div>

					{children} 
				</ThemeProvider>
			</body>
		</html>
	);
}
