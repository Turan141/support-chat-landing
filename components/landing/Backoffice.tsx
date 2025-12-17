"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Settings, BarChart3, Users, Shield } from "lucide-react";

export function Backoffice() {
	return (
		<section className="py-24 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-6">
							<LayoutDashboard className="h-4 w-4" />
							<span>Powerful Control Panel</span>
						</div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete Control Over Your Support Ecosystem</h2>
						<p className="text-lg text-gray-600 mb-8">
							Give your customers the power to manage their own support experience. Our comprehensive backoffice allows for full customization,
							analytics, and team management.
						</p>

						<div className="space-y-6">
							{[
								{
									icon: Settings,
									title: "Widget Customization",
									desc: "Customize colors, position, and behavior to match any brand identity.",
								},
								{
									icon: BarChart3,
									title: "Advanced Analytics",
									desc: "Track response times, AI resolution rates, and customer satisfaction scores.",
								},
								{
									icon: Users,
									title: "Team Management",
									desc: "Manage agent roles, permissions, and view individual performance metrics.",
								},
							].map((item, index) => (
								<div key={index} className="flex gap-4">
									<div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
										<item.icon className="h-5 w-5 text-purple-600" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
										<p className="text-gray-600 text-sm">{item.desc}</p>
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
						{/* Abstract Dashboard Visual */}
						<div className="bg-gray-900 rounded-2xl p-2 shadow-2xl">
							<div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
								{/* Header */}
								<div className="h-12 border-b border-gray-700 flex items-center px-4 gap-4">
									<div className="flex gap-2">
										<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
										<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
										<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
									</div>
									<div className="h-2 w-32 bg-gray-700 rounded-full ml-4"></div>
								</div>

								<div className="flex h-[400px]">
									{/* Sidebar */}
									<div className="w-16 border-r border-gray-700 flex flex-col items-center py-4 gap-4">
										<div className="w-8 h-8 rounded-lg bg-purple-500/20"></div>
										<div className="w-8 h-8 rounded-lg bg-gray-700/50"></div>
										<div className="w-8 h-8 rounded-lg bg-gray-700/50"></div>
										<div className="w-8 h-8 rounded-lg bg-gray-700/50"></div>
									</div>

									{/* Main Content */}
									<div className="flex-1 p-6 bg-gray-800/50">
										<div className="flex justify-between items-center mb-8">
											<div className="h-4 w-48 bg-gray-700 rounded-full"></div>
											<div className="h-8 w-24 bg-purple-500 rounded-lg"></div>
										</div>

										{/* Stats Grid */}
										<div className="grid grid-cols-3 gap-4 mb-8">
											{[1, 2, 3].map(i => (
												<div key={i} className="bg-gray-700/30 p-4 rounded-xl border border-gray-700/50">
													<div className="h-2 w-20 bg-gray-600 rounded-full mb-3"></div>
													<div className="h-6 w-12 bg-gray-500 rounded-full"></div>
												</div>
											))}
										</div>

										{/* Chart Area */}
										<div className="bg-gray-700/30 p-6 rounded-xl border border-gray-700/50 h-48 flex items-end justify-between gap-2">
											{[40, 70, 45, 90, 60, 80, 50, 75].map((h, i) => (
												<div
													key={i}
													className="w-full bg-purple-500/40 rounded-t-sm hover:bg-purple-500/60 transition-colors"
													style={{ height: `${h}%` }}></div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Decorative Elements */}
						<div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
						<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
