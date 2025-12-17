"use client";

import { useLanguage, Language } from "@/components/providers/LanguageProvider";
import { Globe } from "lucide-react";

const languages: { code: Language; label: string }[] = [
	{ code: "en", label: "English" },
	{ code: "es", label: "Español" },
	{ code: "it", label: "Italiano" },
	{ code: "lv", label: "Latviešu" },
	{ code: "de", label: "Deutsch" },
];

export function LanguageSwitcher() {
	const { language, setLanguage } = useLanguage();

	return (
		<div className="relative group z-50">
			<button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors py-2">
				<Globe className="h-5 w-5" />
				<span className="uppercase font-medium">{language}</span>
			</button>
			<div className="absolute right-0 mt-0 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden hidden group-hover:block">
				{languages.map(lang => (
					<button
						key={lang.code}
						onClick={() => setLanguage(lang.code)}
						className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
							language === lang.code ? "text-violet-600 font-medium bg-violet-50" : "text-gray-600"
						}`}>
						{lang.label}
					</button>
				))}
			</div>
		</div>
	);
}
