"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
	return (
		<section className="pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden relative bg-white">
			{/* Background Gradients */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent"></div>
				<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
				<div className="absolute top-20 left-0 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-3xl -translate-x-1/2"></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-medium mb-6 shadow-sm">
						<Sparkles className="h-4 w-4" />
						<span>Powered by Advanced AI</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
						Intelligent Support for <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Modern Businesses</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
						Elevate your customer service with our AI-powered chat widget. Instant answers from your FAQ, seamless agent handover, and continuous
						learning.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link
							href="/signup"
							className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
							Start Free Trial
							<ArrowRight className="h-5 w-5" />
						</Link>
						<Link
							href="#demo"
							className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
							View Demo
						</Link>
					</motion.div>
				</div>

				{/* Mock Chat Interface */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.4 }}
					className="relative mx-auto max-w-4xl">
					<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20"></div>
					<div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
						<div className="grid grid-cols-1 md:grid-cols-3 h-[500px]">
							{/* Sidebar */}
							<div className="hidden md:block bg-gray-50 border-r border-gray-100 p-4 w-1/3">
								<div className="flex items-center gap-3 mb-6">
									<div className="w-3 h-3 rounded-full bg-red-500"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
								</div>
								<div className="space-y-3">
									{[1, 2, 3].map(i => (
										<div
											key={i}
											className={`p-3 rounded-lg ${
												i === 2 ? "bg-white shadow-sm border border-gray-100" : "hover:bg-gray-100 opacity-60"
											}`}>
											<div className="flex items-center justify-between mb-2">
												<div className="h-3 w-20 bg-gray-200 rounded-full"></div>
												<div className="h-2 w-8 bg-gray-200 rounded-full"></div>
											</div>
											<div className="h-2 w-3/4 bg-gray-200 rounded-full mb-1"></div>
											<div className="h-2 w-1/2 bg-gray-200 rounded-full"></div>
										</div>
									))}
								</div>
							</div>

							{/* Chat Area */}
							<div className="col-span-2 md:col-span-2 flex flex-col w-full">
								<div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full bg-gray-100"></div>
										<div>
											<div className="h-3 w-24 bg-gray-200 rounded-full mb-1"></div>
											<div className="h-2 w-16 bg-green-100 rounded-full"></div>
										</div>
									</div>
									<div className="flex gap-2">
										<div className="w-8 h-8 rounded-lg bg-gray-50"></div>
									</div>
								</div>

								<div className="flex-1 p-6 bg-gray-50/50 space-y-6 overflow-y-auto">
									<div className="flex justify-end">
										<div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none w-2/3">
											<div className="h-2 w-full bg-blue-400/50 rounded-full mb-2"></div>
											<div className="h-2 w-3/4 bg-blue-400/50 rounded-full"></div>
										</div>
									</div>

									<div className="flex justify-start">
										<div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none w-3/4 shadow-sm">
											<div className="flex items-center gap-2 mb-3">
												<Sparkles className="h-3 w-3 text-blue-600" />
												<div className="h-2 w-20 bg-blue-100 rounded-full"></div>
											</div>
											<div className="space-y-2">
												<div className="h-2 w-full bg-gray-100 rounded-full"></div>
												<div className="h-2 w-full bg-gray-100 rounded-full"></div>
												<div className="h-2 w-2/3 bg-gray-100 rounded-full"></div>
											</div>
										</div>
									</div>
								</div>

								<div className="p-4 bg-white border-t border-gray-100">
									<div className="flex gap-2">
										<div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg h-10"></div>
										<div className="w-10 h-10 bg-blue-600 rounded-lg"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
