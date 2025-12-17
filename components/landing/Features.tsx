"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Users, LayoutDashboard, CheckCircle2, TrendingUp } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Features() {
	const { dictionary } = useLanguage();
	const [activeFeature, setActiveFeature] = useState(0);

	const features = [
		{
			id: "ai",
			icon: Bot,
			title: dictionary.features.ai.title,
			description: dictionary.features.ai.description,
			details: dictionary.features.ai.details,
			visual: (
				<div className="relative h-full w-full bg-slate-900 rounded-3xl p-8 overflow-hidden flex flex-col justify-between">
					<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

					<div className="relative z-10">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
							<Bot className="w-3 h-3" /> AI Powered
						</div>
						<h4 className="text-2xl font-bold text-white mb-2">Smart Auto-Responses</h4>
						<p className="text-slate-400 text-sm">The AI learns from your history.</p>
					</div>

					<div className="space-y-4 relative z-10 mt-8">
						<div className="flex gap-4">
							<div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0"></div>
							<div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 max-w-[80%] border border-slate-700">
								<div className="h-2 w-32 bg-slate-600 rounded mb-2"></div>
								<div className="h-2 w-48 bg-slate-600 rounded"></div>
							</div>
						</div>
						<div className="flex gap-4 flex-row-reverse">
							<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/20">
								<Bot className="w-4 h-4 text-white" />
							</div>
							<div className="bg-blue-600 text-white rounded-2xl rounded-tr-none p-4 max-w-[80%] shadow-lg shadow-blue-900/20">
								<p className="text-sm font-medium leading-relaxed">Based on your knowledge base, here is the solution...</p>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			id: "login",
			icon: Users,
			title: dictionary.features.login.title,
			description: dictionary.features.login.description,
			details: dictionary.features.login.details,
			visual: (
				<div className="relative h-full w-full bg-white border border-slate-200 rounded-3xl p-8 overflow-hidden flex items-center justify-center bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]">
					<div className="relative z-10 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 w-full max-w-sm">
						<div className="flex items-center gap-4 mb-6">
							<div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl border-4 border-white shadow-sm">
								JD
							</div>
							<div>
								<div className="font-bold text-slate-900 text-lg">John Doe</div>
								<div className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full inline-block mt-1">
									Premium Customer
								</div>
							</div>
						</div>
						<div className="space-y-3">
							<div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
								<span className="text-sm text-slate-500">Lifetime Value</span>
								<span className="font-bold text-slate-900">$4,200</span>
							</div>
							<div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
								<span className="text-sm text-slate-500">Last Active</span>
								<span className="font-medium text-slate-900">2 mins ago</span>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			id: "backoffice",
			icon: LayoutDashboard,
			title: dictionary.features.backoffice.title,
			description: dictionary.features.backoffice.description,
			details: dictionary.features.backoffice.details,
			visual: (
				<div className="relative h-full w-full bg-slate-50 rounded-3xl p-6 overflow-hidden flex flex-col">
					<div className="flex items-center justify-between mb-6">
						<h4 className="font-bold text-slate-900">Analytics Overview</h4>
						<div className="text-xs text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200">Last 30 Days</div>
					</div>

					<div className="grid grid-cols-2 gap-4 mb-6">
						<div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
							<div className="text-slate-500 text-xs mb-1">Total Tickets</div>
							<div className="text-2xl font-bold text-slate-900">1,234</div>
							<div className="text-xs text-green-600 flex items-center gap-1 mt-1">
								<TrendingUp className="w-3 h-3" /> +12%
							</div>
						</div>
						<div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
							<div className="text-slate-500 text-xs mb-1">Avg Response</div>
							<div className="text-2xl font-bold text-slate-900">1m 30s</div>
							<div className="text-xs text-green-600 flex items-center gap-1 mt-1">
								<TrendingUp className="w-3 h-3" /> -5%
							</div>
						</div>
					</div>

					<div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex items-end gap-2">
						{[40, 70, 45, 90, 60, 80, 50, 75, 60, 85, 70, 95].map((h, i) => (
							<div key={i} className="flex-1 bg-blue-50 rounded-t-md relative group h-full flex items-end overflow-hidden">
								<motion.div
									initial={{ height: 0 }}
									animate={{ height: `${h}%` }}
									transition={{ duration: 1, delay: i * 0.05 }}
									className="w-full bg-blue-500 rounded-t-md group-hover:bg-blue-600 transition-colors"
								/>
							</div>
						))}
					</div>
				</div>
			),
		},
	];

	return (
		<section id="features" className="py-24 bg-slate-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-20">
					<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
						{dictionary.features.header_title_start} <br />
						<span className="text-blue-600">{dictionary.features.header_title_highlight}</span>
					</h2>
					<p className="text-lg text-slate-600 leading-relaxed">{dictionary.features.header_desc}</p>
				</div>

				<div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
					{/* Left Side: Feature Navigation */}
					<div className="lg:col-span-5 flex flex-col gap-4">
						{features.map((feature, index) => (
							<button
								key={feature.id}
								onClick={() => setActiveFeature(index)}
								className={twMerge(
									"w-full text-left p-6 rounded-2xl transition-all duration-300 border group relative overflow-hidden cursor-pointer",
									activeFeature === index
										? "bg-white border-blue-200 shadow-xl shadow-blue-900/5 scale-105 z-10"
										: "bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200"
								)}>
								{activeFeature === index && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"></div>}

								<div className="flex items-start gap-4">
									<div
										className={twMerge(
											"p-3 rounded-xl transition-colors",
											activeFeature === index
												? "bg-blue-100 text-blue-600"
												: "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-blue-600"
										)}>
										<feature.icon className="w-6 h-6" />
									</div>
									<div>
										<h3 className={twMerge("text-lg font-bold mb-2", activeFeature === index ? "text-slate-900" : "text-slate-600")}>
											{feature.title}
										</h3>
										<p className={twMerge("text-sm leading-relaxed", activeFeature === index ? "text-slate-600" : "text-slate-500")}>
											{feature.description}
										</p>

										<AnimatePresence>
											{activeFeature === index && (
												<motion.div
													initial={{ height: 0, opacity: 0, marginTop: 0 }}
													animate={{ height: "auto", opacity: 1, marginTop: 16 }}
													exit={{ height: 0, opacity: 0, marginTop: 0 }}
													className="overflow-hidden">
													<ul className="space-y-3">
														{feature.details.map((detail, i) => (
															<li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
																<CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
																{detail}
															</li>
														))}
													</ul>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								</div>
							</button>
						))}
					</div>

					{/* Right Side: Visual Preview */}
					<div className="lg:col-span-7 sticky top-32">
						<div className="relative aspect-square md:aspect-[4/3] bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50">
							<AnimatePresence mode="wait">
								<motion.div
									key={activeFeature}
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 1.05 }}
									transition={{ duration: 0.4, ease: "easeOut" }}
									className="absolute inset-0 p-2">
									<div className="w-full h-full rounded-[2rem] overflow-hidden">{features[activeFeature].visual}</div>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
