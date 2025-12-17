import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "SupportAI - Intelligent Customer Support Widget",
	description: "AI-powered support chat widget that learns from your FAQs and helps your agents work faster.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
				<LanguageProvider>
					<Navbar />
					<main className="min-h-screen">{children}</main>
					<Footer />
				</LanguageProvider>
			</body>
		</html>
	);
}
