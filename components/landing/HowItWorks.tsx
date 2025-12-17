"use client";

import { motion } from "framer-motion";
import { MessageCircle, Search, UserCheck, PlusCircle } from "lucide-react";
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
		<section id="how-it-works" className="py-24 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{dictionary.howItWorks.title}</h2>
					<p className="text-lg text-slate-600">{dictionary.howItWorks.description}</p>
				</div>

				<div className="relative">
					{/* Connecting Line */}
					<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
						{steps.map((step, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center group hover:border-violet-100 hover:shadow-md transition-all">
								<div className="w-16 h-16 mx-auto bg-violet-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-violet-600/20 relative z-10 group-hover:scale-110 transition-transform">
									<step.icon className="h-8 w-8 text-white" />
								</div>
								<h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
								<p className="text-sm text-slate-600">{step.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
