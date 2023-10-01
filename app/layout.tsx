import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Makhado Airways",
	description: "South Africa's Busiest Virtual AIrline",
	themeColor: "hsl(210, 64, 70)"
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
					{/* ACTUAL COMPONENTS START HERE*/}
						<Navigation />
						{children}
						<Footer />
				{/* ACTUAL COMPONENTS END HERE*/}
			</body>
		</html>
	);
}
