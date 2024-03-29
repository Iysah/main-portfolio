import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zorfts Technologies Ltd",
  description: "Building solution and driving progress",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			{/* <Navbar /> */}
			<body className={inter.className}>{children}</body>
			<></>
		</html>
	);
}
