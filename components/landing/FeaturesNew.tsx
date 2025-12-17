"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Users, LayoutDashboard, CheckCircle2, TrendingUp, Clock, Shield } from "lucide-react";
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
				<div className="relative h-full w-full bg-slate-900 rounded-2xl p-8 overflow-hidden flex flex-col">
					<div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
					<div className="space-y-4 relative z-10 mt-auto">
						<div className="flex gap-4">
							<div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0"></div>
							<div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
								<div className="h-2 w-32 bg-slate-600 rounded mb-2"></div>
								<div className="h-2 w-48 bg-slate-600 rounded"></div>
							</div>
						</div>
						<div className="flex gap-4 flex-row-reverse">
							<div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
								<Bot className="w-4 h-4 text-white" />
							</div>
							<div className="bg-violet-600 text-white rounded-2xl rounded-tr-none p-4 max-w-[80%] shadow-lg shadow-violet-900/20">
								<p className="text-sm font-medium">Here is the answer from your FAQ...</p>
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
				<div className="relative h-full w-full bg-white border border-slate-200 rounded-2xl p-4 md:p-8 overflow-hidden flex items-center justify-center">
					<div className="absolute inset-0 bg-slate-50/50"></div>
					<div className="relative z-10 bg-white p-6 rounded-xl shadow-xl border border-slate-100 w-full max-w-sm">
						<div className="flex items-center gap-4 mb-6">
							<div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-2xl border-4 border-white shadow-sm">
								JD
							</div>
							<div>
								<div className="font-bold text-slate-900 text-lg">John Doe</div>
								<div className="text-sm text-slate-500 flex items-center gap-1">
									<Shield className="w-3 h-3" /> Premium User
								</div>
							</div>
						</div>
						<div className="space-y-4 border-t border-slate-100 pt-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="bg-slate-50 p-3 rounded-lg">
									<div className="text-xs text-slate-500 mb-1">Status</div>
									<div className="text-green-600 font-medium flex items-center gap-1">
										<div className="w-2 h-2 rounded-full bg-green-500"></div> Active
									</div>
								</div>
								<div className="bg-slate-50 p-3 rounded-lg">
									<div className="text-xs text-slate-500 mb-1">Plan</div>
									<div className="text-slate-900 font-medium">Enterprise</div>
								</div>
							</div>

							<div>
								<div className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-semibold">Recent Activity</div>
								<div className="space-y-2">
									<div className="flex items-center gap-3 text-sm p-2 hover:bg-slate-50 rounded-lg transition-colors">
										<Clock className="w-4 h-4 text-slate-400" />
										<span className="text-slate-600">Started a new conversation</span>
										<span className="ml-auto text-xs text-slate-400">2m ago</span>
									</div>
									<div className="flex items-center gap-3 text-sm p-2 hover:bg-slate-50 rounded-lg transition-colors">
										<CheckCircle2 className="w-4 h-4 text-slate-400" />
										<span className="text-slate-600">Ticket #1234 resolved</span>
										<span className="ml-auto text-xs text-slate-400">1h ago</span>
									</div>
								</div>
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
				<div className="relative h-full w-full bg-slate-50 rounded-2xl p-4 md:p-6 overflow-hidden">
					<div className="grid grid-cols-2 gap-4 h-full grid-rows-[auto_1fr]">
						<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
							<div className="h-8 w-8 rounded-lg bg-violet-100 mb-3 flex items-center justify-center">
								<Users className="w-4 h-4 text-violet-600" />
							</div>
							<div className="text-2xl font-bold text-slate-900">1,234</div>
							<div className="text-xs text-slate-500">Active Users</div>
						</div>
						<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
							<div className="h-8 w-8 rounded-lg bg-amber-100 mb-3 flex items-center justify-center">
								<TrendingUp className="w-4 h-4 text-amber-600" />
							</div>
							<div className="text-2xl font-bold text-slate-900">98%</div>
							<div className="text-xs text-slate-500">Satisfaction</div>
						</div>
						<div className="col-span-2 bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col">
							<div className="flex justify-between items-center mb-6">
								<div>
									<div className="font-semibold text-slate-900">Response Time</div>
									<div className="text-xs text-slate-500">Last 7 days</div>
								</div>
								<div className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">-12%</div>
							</div>
							<div className="flex-1 flex items-end gap-2 w-full">
								{[35, 55, 40, 70, 50, 85, 60, 75, 50, 65, 45, 80].map((h, i) => (
									<div
										key={i}
										className="flex-1 bg-violet-50 rounded-t-sm relative group hover:bg-violet-100 transition-colors h-full flex items-end">
										<div className="w-full bg-violet-500 rounded-t-sm transition-all duration-500 relative" style={{ height: `${h}%` }}>
											<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
												{h}ms
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="flex justify-between mt-2 text-xs text-slate-400 border-t border-slate-50 pt-2">
								<span>Mon</span>
								<span>Tue</span>
								<span>Wed</span>
								<span>Thu</span>
								<span>Fri</span>
								<span>Sat</span>
								<span>Sun</span>
							</div>
						</div>
					</div>
				</div>
			),
		},
	];

	return (
		<section id="features" className="py-16 md:py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
					<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
						{dictionary.features.header_title_start} <br />
						<span className="text-violet-600">{dictionary.features.header_title_highlight}</span>
					</h2>
					<p className="text-lg text-slate-600">{dictionary.features.header_desc}</p>
				</div>

				<div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
					{/* Left Side: Feature List (Tabs) */}
					<div className="lg:col-span-5 space-y-4">
						{features.map((feature, index) => (
							<button
								key={feature.id}
								onClick={() => setActiveFeature(index)}
								className={twMerge(
									"w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 group cursor-pointer",
									activeFeature === index ? "bg-violet-50 border-violet-600 shadow-sm" : "bg-white border-transparent hover:bg-slate-50"
								)}>
								<div className="flex items-center gap-4 mb-2">
									<div
										className={twMerge(
											"p-2 rounded-lg transition-colors",
											activeFeature === index ? "bg-violet-600 text-white" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
										)}>
										<feature.icon className="w-6 h-6" />
									</div>
									<h3 className={twMerge("text-xl font-bold", activeFeature === index ? "text-violet-900" : "text-slate-900")}>
										{feature.title}
									</h3>
								</div>
								<p className="text-slate-600 pl-[3.25rem] mb-4">{feature.description}</p>

								<AnimatePresence>
									{activeFeature === index && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											className="overflow-hidden pl-[3.25rem]">
											<ul className="space-y-2 pt-2">
												{feature.details.map((detail, i) => (
													<li key={i} className="flex items-center gap-2 text-sm text-slate-700">
														<CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0" />
														{detail}
													</li>
												))}
											</ul>
										</motion.div>
									)}
								</AnimatePresence>
							</button>
						))}
					</div>

					{/* Right Side: Visual Preview */}
					<div className="lg:col-span-7 sticky top-24">
						<div className="relative aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-2xl">
							<AnimatePresence mode="wait">
								<motion.div
									key={activeFeature}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3 }}
									className="absolute inset-0 p-4 md:p-8">
									{features[activeFeature].visual}
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
