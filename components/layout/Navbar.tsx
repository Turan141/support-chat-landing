"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Navbar() {
	const { dictionary } = useLanguage();

	return (
		<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<Link href="/" className="flex items-center gap-2">
							<div className="bg-violet-600 p-2 rounded-lg">
								<MessageSquare className="h-6 w-6 text-white" />
							</div>
							<span className="font-bold text-xl text-slate-900">SupportAI</span>
						</Link>
					</div>

					<div className="hidden md:flex items-center space-x-8">
						<Link href="#features" className="text-slate-600 hover:text-violet-600 transition-colors">
							{dictionary.navbar.features}
						</Link>
						<Link href="#how-it-works" className="text-slate-600 hover:text-violet-600 transition-colors">
							{dictionary.navbar.howItWorks}
						</Link>
						<Link href="#integration" className="text-slate-600 hover:text-violet-600 transition-colors">
							{dictionary.navbar.integration}
						</Link>
					</div>

					<div className="flex items-center gap-4">
						<LanguageSwitcher />
						<Link href="/login" className="hidden sm:block text-slate-600 hover:text-slate-900 font-medium">
							{dictionary.navbar.login}
						</Link>
						<Link href="/signup" className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
							{dictionary.navbar.getStarted}
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
