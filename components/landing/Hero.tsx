"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Hero() {
	const { dictionary } = useLanguage();

	return (
		<section className="pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden relative bg-slate-50">
			{/* Background Pattern */}
			<div
				className="absolute inset-0 pointer-events-none opacity-[0.03]"
				style={{
					backgroundImage: "radial-gradient(#7c3aed 1px, transparent 1px)",
					backgroundSize: "32px 32px",
				}}></div>

			{/* Background Gradients */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-200/40 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
				<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
					{/* Left Column: Content */}
					<div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-violet-100 text-violet-600 text-sm font-medium mb-6 shadow-sm">
							<Zap className="h-4 w-4 fill-current" />
							<span>{dictionary.hero.badge}</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
							{dictionary.hero.title_start} <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-amber-500">
								{dictionary.hero.title_highlight}
							</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-xl text-slate-600 mb-8 leading-relaxed">
							{dictionary.hero.description}
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
							<Link
								href="/signup"
								className="w-full sm:w-auto px-8 py-4 bg-violet-600 text-white rounded-xl font-semibold hover:bg-violet-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-violet-600/20">
								{dictionary.hero.cta_primary}
								<ArrowRight className="h-5 w-5" />
							</Link>
							<Link
								href="#demo"
								className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
								{dictionary.hero.cta_secondary}
							</Link>
						</motion.div>
					</div>

					{/* Right Column: Abstract Visual */}
					<motion.div
						initial={{ opacity: 0, x: 40, rotateY: -20 }}
						animate={{ opacity: 1, x: 0, rotateY: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="relative lg:perspective-1000">
						<div className="relative transform lg:rotate-y-12 lg:rotate-x-6 transition-transform duration-500 hover:rotate-0">
							<div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-amber-500 rounded-[2rem] blur-2xl opacity-20"></div>

							<div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden h-[600px] flex flex-col">
								{/* Abstract Header */}
								<div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
									<div className="flex items-center gap-3">
										<div className="w-3 h-3 rounded-full bg-slate-200"></div>
										<div className="w-3 h-3 rounded-full bg-slate-200"></div>
										<div className="w-3 h-3 rounded-full bg-slate-200"></div>
									</div>
									<div className="h-2 w-24 bg-slate-200 rounded-full"></div>
								</div>

								{/* Abstract Chat Area */}
								<div className="flex-1 p-6 space-y-6 bg-slate-50/30">
									{/* Message Left */}
									<div className="flex gap-4">
										<div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center">
											<div className="w-5 h-5 rounded-full bg-amber-100"></div>
										</div>
										<div className="space-y-2">
											<div className="h-12 w-64 bg-white rounded-2xl rounded-tl-none shadow-sm border border-slate-100"></div>
											<div className="h-8 w-48 bg-white rounded-2xl rounded-tl-none shadow-sm border border-slate-100 opacity-60"></div>
										</div>
									</div>

									{/* Message Right */}
									<div className="flex gap-4 flex-row-reverse">
										<div className="w-10 h-10 rounded-full bg-violet-600 shadow-lg shadow-violet-600/20 flex items-center justify-center">
											<Sparkles className="w-5 h-5 text-white" />
										</div>
										<div className="space-y-2">
											<div className="h-24 w-72 bg-violet-600 rounded-2xl rounded-tr-none shadow-md p-4">
												<div className="space-y-2">
													<div className="h-2 w-full bg-white/20 rounded-full"></div>
													<div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
													<div className="h-2 w-5/6 bg-white/20 rounded-full"></div>
												</div>
											</div>
										</div>
									</div>

									{/* Floating Elements */}
									<motion.div
										animate={{ y: [0, -10, 0] }}
										transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
										className="absolute top-1/3 right-12 p-4 bg-white rounded-xl shadow-xl border border-slate-100 z-10">
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
												<div className="w-4 h-4 bg-green-500 rounded-full"></div>
											</div>
											<div>
												<div className="h-2 w-16 bg-slate-200 rounded-full mb-1"></div>
												<div className="h-2 w-10 bg-slate-100 rounded-full"></div>
											</div>
										</div>
									</motion.div>

									<motion.div
										animate={{ y: [0, 15, 0] }}
										transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
										className="absolute bottom-1/4 left-12 p-4 bg-white rounded-xl shadow-xl border border-slate-100 z-10">
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
												<div className="w-4 h-4 bg-amber-500 rounded-full"></div>
											</div>
											<div>
												<div className="h-2 w-20 bg-slate-200 rounded-full mb-1"></div>
												<div className="h-2 w-12 bg-slate-100 rounded-full"></div>
											</div>
										</div>
									</motion.div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
