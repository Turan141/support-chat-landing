"use client";

import { useLanguage, Language } from "@/components/providers/LanguageProvider";
import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const languages: { code: Language; label: string }[] = [
	{ code: "en", label: "English" },
	{ code: "es", label: "Español" },
	{ code: "it", label: "Italiano" },
	{ code: "lv", label: "Latviešu" },
	{ code: "de", label: "Deutsch" },
];

export function LanguageSwitcher() {
	const { language, setLanguage } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative z-50">
			<button
				onClick={() => setIsOpen(!isOpen)}
				onBlur={() => setTimeout(() => setIsOpen(false), 200)}
				className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors py-2 px-3 rounded-lg hover:bg-slate-50">
				<Globe className="h-4 w-4" />
				<span className="uppercase font-semibold text-sm">{language}</span>
				<ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
						className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-1">
						{languages.map(lang => (
							<button
								key={lang.code}
								onClick={() => {
									setLanguage(lang.code);
									setIsOpen(false);
								}}
								className={`w-full text-left px-4 py-2.5 text-sm rounded-lg transition-colors ${
									language === lang.code ? "text-blue-600 font-medium bg-blue-50" : "text-slate-600 hover:bg-slate-50"
								}`}>
								{lang.label}
							</button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
