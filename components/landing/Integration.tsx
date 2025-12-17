"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Integration() {
	const { dictionary } = useLanguage();

	return (
		<section id="integration" className="py-24 bg-slate-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
						<h2 className="text-3xl md:text-4xl font-bold mb-6">{dictionary.integration.title}</h2>
						<p className="text-slate-400 text-lg mb-8">{dictionary.integration.description}</p>

						<ul className="space-y-4 mb-8">
							{dictionary.integration.list.map((item, index) => (
								<li key={index} className="flex items-center gap-3">
									<div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
										<Check className="h-4 w-4 text-white" />
									</div>
									<span className="text-slate-300">{item}</span>
								</li>
							))}
						</ul>

						<button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-violet-600/20">
							{dictionary.integration.cta}
						</button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-2xl font-mono text-sm overflow-x-auto">
						<div className="flex gap-2 mb-4">
							<div className="w-3 h-3 rounded-full bg-red-500"></div>
							<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
							<div className="w-3 h-3 rounded-full bg-green-500"></div>
						</div>
						<div className="space-y-3 py-2">
							{/* Abstract Code Lines */}
							<div className="flex gap-2">
								<div className="w-4 h-3 bg-violet-500/50 rounded"></div>
								<div className="w-12 h-3 bg-amber-500/50 rounded"></div>
								<div className="w-24 h-3 bg-slate-600 rounded"></div>
							</div>
							<div className="flex gap-2 pl-4">
								<div className="w-16 h-3 bg-violet-400/50 rounded"></div>
								<div className="w-8 h-3 bg-slate-600 rounded"></div>
								<div className="w-4 h-3 bg-amber-500/50 rounded"></div>
							</div>
							<div className="flex gap-2 pl-8">
								<div className="w-12 h-3 bg-red-400/50 rounded"></div>
								<div className="w-24 h-3 bg-green-500/50 rounded"></div>
							</div>
							<div className="flex gap-2 pl-8">
								<div className="w-10 h-3 bg-red-400/50 rounded"></div>
								<div className="w-4 h-3 bg-slate-600 rounded"></div>
								<div className="w-20 h-3 bg-green-500/50 rounded"></div>
							</div>
							<div className="flex gap-2 pl-4">
								<div className="w-4 h-3 bg-amber-500/50 rounded"></div>
							</div>
							<div className="flex gap-2">
								<div className="w-4 h-3 bg-slate-600 rounded"></div>
							</div>
							<div className="flex gap-2">
								<div className="w-12 h-3 bg-violet-500/50 rounded"></div>
								<div className="w-8 h-3 bg-amber-500/50 rounded"></div>
							</div>
							<div className="flex gap-2 pl-4">
								<div className="w-8 h-3 bg-red-400/50 rounded"></div>
								<div className="w-32 h-3 bg-green-500/50 rounded"></div>
							</div>
							<div className="flex gap-2 pl-4">
								<div className="w-10 h-3 bg-red-400/50 rounded"></div>
							</div>
							<div className="flex gap-2">
								<div className="w-16 h-3 bg-slate-600 rounded"></div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
