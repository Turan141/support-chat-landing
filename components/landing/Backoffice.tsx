"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Settings, BarChart3, Users } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Backoffice() {
	const { dictionary } = useLanguage();

	return (
		<section className="py-24 bg-slate-50 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6">
							<LayoutDashboard className="h-4 w-4" />
							<span>{dictionary.backoffice.badge}</span>
						</div>
						<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{dictionary.backoffice.title}</h2>
						<p className="text-lg text-slate-600 mb-8">{dictionary.backoffice.description}</p>

						<div className="space-y-6">
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
								<div key={index} className="flex gap-4">
									<div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
										<item.icon className="h-5 w-5 text-violet-600" />
									</div>
									<div>
										<h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
										<p className="text-slate-600 text-sm">{item.desc}</p>
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
						className="relative overflow-x-auto">
						{/* Abstract Dashboard Visual */}
						<div className="bg-slate-900 rounded-2xl p-2 shadow-2xl">
							<div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
								{/* Header */}
								<div className="h-12 border-b border-slate-700 flex items-center px-4 gap-4">
									<div className="flex gap-2">
										<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
										<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
										<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
									</div>
									<div className="h-2 w-32 bg-slate-700 rounded-full ml-4"></div>
								</div>

								<div className="flex h-[400px]">
									{/* Sidebar */}
									<div className="w-16 border-r border-slate-700 flex flex-col items-center py-4 gap-4">
										<div className="w-8 h-8 rounded-lg bg-violet-500/20"></div>
										<div className="w-8 h-8 rounded-lg bg-slate-700/50"></div>
										<div className="w-8 h-8 rounded-lg bg-slate-700/50"></div>
										<div className="w-8 h-8 rounded-lg bg-slate-700/50"></div>
									</div>

									{/* Main Content */}
									<div className="flex-1 p-6 bg-slate-800/50">
										<div className="flex justify-between items-center mb-8">
											<div className="h-4 w-48 bg-slate-700 rounded-full"></div>
											<div className="h-8 w-24 bg-violet-600 rounded-lg"></div>
										</div>

										{/* Stats Grid */}
										<div className="grid grid-cols-3 gap-4 mb-8">
											{[1, 2, 3].map(i => (
												<div key={i} className="bg-slate-700/30 p-4 rounded-xl border border-slate-700/50">
													<div className="h-2 w-20 bg-slate-600 rounded-full mb-3"></div>
													<div className="h-6 w-12 bg-slate-500 rounded-full"></div>
												</div>
											))}
										</div>

										{/* Chart Area */}
										<div className="bg-slate-700/30 p-6 rounded-xl border border-slate-700/50 h-48 flex items-end justify-between gap-2">
											{[40, 70, 45, 90, 60, 80, 50, 75].map((h, i) => (
												<div
													key={i}
													className="flex-1 bg-violet-500/50 rounded-t-sm relative group hover:bg-violet-500 transition-colors">
													<div
														className="absolute bottom-0 left-0 right-0 bg-violet-500 rounded-t-sm"
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
