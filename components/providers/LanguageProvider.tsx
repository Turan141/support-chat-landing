"use client";

import React, { createContext, useContext, useState } from "react";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import it from "@/locales/it.json";
import lv from "@/locales/lv.json";
import de from "@/locales/de.json";

const dictionaries = { en, es, it, lv, de };

export type Language = keyof typeof dictionaries;
type Dictionary = typeof en;

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
	dictionary: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguage] = useState<Language>("en");

	const t = (key: string) => {
		const keys = key.split(".");
		let value: any = dictionaries[language];
		for (const k of keys) {
			if (value === undefined) return key;
			value = value[k as keyof typeof value];
		}
		return typeof value === "string" ? value : key;
	};

	return <LanguageContext.Provider value={{ language, setLanguage, t, dictionary: dictionaries[language] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
