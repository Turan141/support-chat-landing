"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function Navbar() {
	const { dictionary } = useLanguage();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={twMerge(
				"fixed top-0 w-full z-50 transition-all duration-300",
				scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-4" : "bg-transparent py-6"
			)}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<Link href="/" className="flex items-center gap-2 group">
							<div className="bg-blue-600 p-2 rounded-xl group-hover:bg-blue-700 transition-colors">
								<MessageSquare className="h-6 w-6 text-white" />
							</div>
							<span className="font-bold text-xl text-slate-900 tracking-tight">SupportAI</span>
						</Link>
					</div>

					<div className="hidden md:flex items-center space-x-8">
						<Link href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
							{dictionary.navbar.features}
						</Link>
						<Link href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
							{dictionary.navbar.howItWorks}
						</Link>
						<Link href="#integration" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
							{dictionary.navbar.integration}
						</Link>
					</div>

					<div className="flex items-center gap-4">
						<LanguageSwitcher />
						<Link href="/login" className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900">
							{dictionary.navbar.login}
						</Link>
						<Link
							href="/signup"
							className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:shadow-lg hover:shadow-slate-900/20">
							{dictionary.navbar.getStarted}
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
