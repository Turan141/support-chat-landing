"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Settings, BarChart3, Users } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Backoffice() {
	const { dictionary } = useLanguage();

	return (
		<section className="py-32 bg-slate-900 overflow-hidden relative">
			{/* Background Glows */}
			<div className="absolute top-0 left-0 w-full max-w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
			<div className="absolute bottom-0 right-0 w-full max-w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
					<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
							<LayoutDashboard className="h-4 w-4" />
							<span>{dictionary.backoffice.badge}</span>
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{dictionary.backoffice.title}</h2>
						<p className="text-lg text-slate-400 mb-10 leading-relaxed">{dictionary.backoffice.description}</p>

						<div className="space-y-8">
							{[
								{
									icon: Settings,
									title: dictionary.backoffice.items.customization.title,
									desc: dictionary.backoffice.items.customization.description,
								},
								{
									icon: BarChart3,
									title: dictionary.backoffice.items.analytics.title,
									desc: dictionary.backoffice.items.analytics.description,
								},
								{
									icon: Users,
									title: dictionary.backoffice.items.team.title,
									desc: dictionary.backoffice.items.team.description,
								},
							].map((item, index) => (
								<div key={index} className="flex gap-5 group">
									<div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
										<item.icon className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
										<p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
									</div>
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="relative">
						{/* Abstract Dashboard Visual - Dark Mode */}
						<div className="bg-slate-800 rounded-3xl p-2 md:p-3 shadow-2xl border border-slate-700/50">
							<div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
								{/* Header */}
								<div className="h-14 border-b border-slate-800 flex items-center px-4 md:px-6 gap-4 bg-slate-900">
									<div className="flex gap-2">
										<div className="w-3 h-3 rounded-full bg-slate-700"></div>
										<div className="w-3 h-3 rounded-full bg-slate-700"></div>
										<div className="w-3 h-3 rounded-full bg-slate-700"></div>
									</div>
									<div className="h-2 w-24 md:w-32 bg-slate-800 rounded-full ml-2 md:ml-4"></div>
								</div>

								<div className="flex flex-col md:flex-row h-auto md:h-[500px]">
									{/* Sidebar */}
									<div className="w-full md:w-20 border-b md:border-b-0 md:border-r border-slate-800 flex flex-row md:flex-col items-center justify-center md:justify-start py-4 md:py-6 gap-6 bg-slate-900/50">
										<div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/20">
											<LayoutDashboard className="w-5 h-5 text-white" />
										</div>
										<div className="w-10 h-10 rounded-xl bg-slate-800/50 hidden md:block"></div>
										<div className="w-10 h-10 rounded-xl bg-slate-800/50 hidden md:block"></div>
										<div className="w-10 h-10 rounded-xl bg-slate-800/50 hidden md:block"></div>
									</div>

									{/* Main Content */}
									<div className="flex-1 p-4 md:p-8 bg-slate-900">
										<div className="flex justify-between items-center mb-6 md:mb-10">
											<div>
												<div className="h-4 w-32 md:w-48 bg-slate-800 rounded-full mb-3"></div>
												<div className="h-2 w-24 md:w-32 bg-slate-800 rounded-full"></div>
											</div>
											<div className="h-8 md:h-10 w-24 md:w-32 bg-blue-600 rounded-lg opacity-20"></div>
										</div>

										{/* Stats Grid */}
										<div className="grid grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-10">
											{[1, 2, 3].map(i => (
												<div key={i} className="bg-slate-800/50 p-3 md:p-5 rounded-2xl border border-slate-800">
													<div className="h-2 w-12 md:w-20 bg-slate-700 rounded-full mb-2 md:mb-4"></div>
													<div className="h-6 md:h-8 w-10 md:w-16 bg-slate-600 rounded-full"></div>
												</div>
											))}
										</div>

										{/* Chart Area */}
										<div className="bg-slate-800/30 p-4 md:p-8 rounded-2xl border border-slate-800 h-40 md:h-56 flex items-end justify-between gap-2 md:gap-3">
											{[40, 70, 45, 90, 60, 80, 50, 75, 60, 85].map((h, i) => (
												<div
													key={i}
													className="flex-1 bg-blue-500/20 rounded-t-sm relative group hover:bg-blue-500 transition-colors duration-300">
													<div
														className="absolute bottom-0 left-0 right-0 bg-blue-600 rounded-t-sm"
														style={{ height: `${h}%` }}></div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
