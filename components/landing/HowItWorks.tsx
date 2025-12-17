"use client";

import { motion } from "framer-motion";
import { MessageCircle, Search, UserCheck, PlusCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HowItWorks() {
	const { dictionary } = useLanguage();

	const steps = [
		{
			icon: MessageCircle,
			title: dictionary.howItWorks.steps[0].title,
			description: dictionary.howItWorks.steps[0].description,
		},
		{
			icon: Search,
			title: dictionary.howItWorks.steps[1].title,
			description: dictionary.howItWorks.steps[1].description,
		},
		{
			icon: UserCheck,
			title: dictionary.howItWorks.steps[2].title,
			description: dictionary.howItWorks.steps[2].description,
		},
		{
			icon: PlusCircle,
			title: dictionary.howItWorks.steps[3].title,
			description: dictionary.howItWorks.steps[3].description,
		},
	];

	return (
		<section id="how-it-works" className="py-32 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-20">
					<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">{dictionary.howItWorks.title}</h2>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">{dictionary.howItWorks.description}</p>
				</div>

				<div className="relative">
					{/* Connecting Line (Dashed) */}
					<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
						{steps.map((step, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								className="text-center group">
								<div className="relative inline-block mb-8">
									<div className="w-24 h-24 mx-auto bg-white rounded-2xl border-2 border-slate-100 flex items-center justify-center shadow-lg group-hover:border-blue-500 group-hover:shadow-blue-500/20 transition-all duration-300 relative z-10">
										<step.icon className="h-10 w-10 text-slate-400 group-hover:text-blue-600 transition-colors" />
									</div>
									<div className="absolute -inset-2 bg-slate-50 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>

								<h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
								<p className="text-slate-600 leading-relaxed">{step.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
