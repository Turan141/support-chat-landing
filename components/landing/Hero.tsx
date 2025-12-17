"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Hero() {
	const { dictionary } = useLanguage();

	return (
		<section className="pt-24 pb-12 md:pt-48 md:pb-32 overflow-hidden relative bg-white">
			{/* Subtle Grid Background */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

			{/* Top Gradient Glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-blue-100/50 rounded-[100%] blur-3xl -z-10 opacity-50 pointer-events-none"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Column: Content */}
					<div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs md:text-sm font-semibold mb-6 md:mb-8 tracking-wide uppercase">
							<Zap className="h-3 w-3 md:h-4 md:w-4 fill-current" />
							<span>{dictionary.hero.badge}</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 md:mb-8 leading-[1.1]">
							{dictionary.hero.title_start} <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
								{dictionary.hero.title_highlight}
							</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-lg md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
							{dictionary.hero.description}
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
							<Link
								href="/signup"
								className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20">
								{dictionary.hero.cta_primary}
								<ArrowRight className="h-5 w-5" />
							</Link>
							<Link
								href="#demo"
								className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center">
								{dictionary.hero.cta_secondary}
							</Link>
						</motion.div>
					</div>

					{/* Right Column: Abstract Visual */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="relative lg:h-[600px] flex items-center justify-center py-8 md:py-0">
						<div className="relative w-[85%] sm:w-full max-w-lg aspect-square mx-auto">
							{/* Decorative Blobs */}
							<div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
							<div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>

							{/* Main Card */}
							<div className="relative bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden h-full flex flex-col transform rotate-[-1deg] sm:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
								{/* Header */}
								<div className="p-4 md:p-6 border-b border-slate-50 flex items-center justify-between bg-white">
									<div className="flex items-center gap-3 md:gap-4">
										<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center">
											<Sparkles className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
										</div>
										<div>
											<div className="h-2.5 md:h-3 w-20 md:w-24 bg-slate-900 rounded-full mb-1.5 md:mb-2"></div>
											<div className="h-1.5 md:h-2 w-12 md:w-16 bg-slate-300 rounded-full"></div>
										</div>
									</div>
								</div>

								{/* Chat Area */}
								<div className="flex-1 p-5 md:p-8 space-y-6 md:space-y-8 bg-slate-50/50">
									{/* Message 1 */}
									<div className="flex gap-3 md:gap-4">
										<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-sm border border-slate-100 flex-shrink-0"></div>
										<div className="space-y-2 md:space-y-3">
											<div className="h-12 md:h-16 w-40 md:w-56 bg-white rounded-2xl rounded-tl-none shadow-sm border border-slate-100 p-3 md:p-4">
												<div className="h-1.5 md:h-2 w-full bg-slate-100 rounded-full mb-2"></div>
												<div className="h-1.5 md:h-2 w-2/3 bg-slate-100 rounded-full"></div>
											</div>
										</div>
									</div>

									{/* Message 2 (AI) */}
									<div className="flex gap-3 md:gap-4 flex-row-reverse">
										<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-600/20 flex-shrink-0">
											<Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
										</div>
										<div className="space-y-2 md:space-y-3">
											<div className="bg-blue-600 rounded-2xl rounded-tr-none shadow-md p-4 md:p-5 text-white w-48 md:w-64">
												<div className="h-1.5 md:h-2 w-full bg-white/20 rounded-full mb-2 md:mb-3"></div>
												<div className="h-1.5 md:h-2 w-5/6 bg-white/20 rounded-full mb-2 md:mb-3"></div>
												<div className="h-1.5 md:h-2 w-4/6 bg-white/20 rounded-full"></div>
											</div>
											<div className="flex gap-2 justify-end">
												<div className="px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-white border border-slate-200 text-[9px] md:text-[10px] font-medium text-slate-500 shadow-sm">
													AI Generated
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Floating Card 1 */}
							<motion.div
								animate={{ y: [0, -15, 0] }}
								transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
								className="absolute -right-3 sm:-right-8 top-20 md:top-24 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-100 z-20 max-w-[120px] md:max-w-[200px]">
								<div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
									<div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
										<Zap className="w-3 h-3 md:w-4 md:h-4" />
									</div>
									<div className="text-[10px] md:text-xs font-bold text-slate-900">Efficiency</div>
								</div>
								<div className="text-lg md:text-2xl font-bold text-slate-900">+45%</div>
								<div className="text-[9px] md:text-xs text-slate-500">Response time improved</div>
							</motion.div>

							{/* Floating Card 2 */}
							<motion.div
								animate={{ y: [0, 20, 0] }}
								transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
								className="absolute -left-3 sm:-left-8 bottom-24 md:bottom-32 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-100 z-20 max-w-[130px] md:max-w-none">
								<div className="flex -space-x-2 mb-2 md:mb-3">
									{[1, 2, 3].map(i => (
										<div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-slate-200"></div>
									))}
								</div>
								<div className="text-[9px] md:text-xs font-medium text-slate-600">1,000+ Support Agents</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
