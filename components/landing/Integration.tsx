"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Integration() {
	const { dictionary } = useLanguage();

	return (
		<section id="integration" className="py-32 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
			{/* Decorative Circles */}
			<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
			<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
					<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
						<h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">{dictionary.integration.title}</h2>
						<p className="text-blue-100 text-xl mb-10 leading-relaxed">{dictionary.integration.description}</p>

						<ul className="space-y-5 mb-10">
							{dictionary.integration.list.map((item, index) => (
								<li key={index} className="flex items-center gap-4">
									<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/20">
										<Check className="h-4 w-4 text-white" />
									</div>
									<span className="text-white font-medium text-lg">{item}</span>
								</li>
							))}
						</ul>

						<button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl shadow-black/10 flex items-center gap-2">
							{dictionary.integration.cta}
							<ArrowRight className="w-5 h-5" />
						</button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl font-mono text-sm overflow-hidden">
						<div className="flex gap-2 mb-6">
							<div className="w-3 h-3 rounded-full bg-red-400"></div>
							<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
							<div className="w-3 h-3 rounded-full bg-green-400"></div>
						</div>
						<div className="space-y-4 py-2 opacity-90">
							<div className="flex gap-3">
								<span className="text-blue-300">import</span>
								<span className="text-white">{"{ SupportAI }"}</span>
								<span className="text-blue-300">from</span>
								<span className="text-green-300">'@support-ai/sdk'</span>;
							</div>
							<div className="h-4"></div>
							<div className="flex gap-3">
								<span className="text-purple-300">const</span>
								<span className="text-white">widget</span>
								<span className="text-blue-300">=</span>
								<span className="text-yellow-300">new</span>
								<span className="text-white">SupportAI({"{ ... }"})</span>;
							</div>
							<div className="h-4"></div>
							<div className="flex gap-3">
								<span className="text-slate-400">// Initialize the widget</span>
							</div>
							<div className="flex gap-3">
								<span className="text-white">widget</span>
								<span className="text-blue-300">.</span>
								<span className="text-yellow-300">init</span>
								<span className="text-white">({"{ ... }"})</span>;
							</div>
							<div className="h-4"></div>
							<div className="flex gap-3">
								<span className="text-slate-400">// Listen for events</span>
							</div>
							<div className="flex gap-3">
								<span className="text-white">widget</span>
								<span className="text-blue-300">.</span>
								<span className="text-yellow-300">on</span>
								<span className="text-white">
									('message', (msg) {"=>"} {"{"}
								</span>
							</div>
							<div className="flex gap-3 pl-8">
								<span className="text-white">console</span>
								<span className="text-blue-300">.</span>
								<span className="text-yellow-300">log</span>
								<span className="text-white">(msg)</span>;
							</div>
							<div className="flex gap-3">
								<span className="text-white">{"}"})</span>;
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
