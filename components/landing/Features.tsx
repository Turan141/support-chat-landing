"use client";

import { motion } from "framer-motion";
import { Users, Bot, FileText, History, TrendingUp, LayoutDashboard } from "lucide-react";

const features = [
	{
		icon: Users,
		title: "Customer-Specific Login",
		description: "Secure, isolated environments for each of your customers. They get their own FAQs, chat history, and settings.",
	},
	{
		icon: Bot,
		title: "AI-Powered Responses",
		description: "Our AI instantly searches your FAQs to answer questions. If it's stumped, it seamlessly escalates to a human agent.",
	},
	{
		icon: FileText,
		title: "Smart FAQ Management",
		description: "Easily view, edit, and upload FAQs. The AI learns from every update to provide better answers over time.",
	},
	{
		icon: History,
		title: "Intelligent Chat History",
		description: "Agents see the full context, including AI attempts. Unanswered questions are flagged for FAQ expansion.",
	},
	{
		icon: TrendingUp,
		title: "Continuous Improvement",
		description: "The system gets smarter with every interaction, enhanced by our professional AI tuning and updates.",
	},
	{
		icon: LayoutDashboard,
		title: "Backoffice Cabinet",
		description: "A complete dashboard for your customers to manage their widget, view analytics, and customize settings.",
	},
];

export function Features() {
	return (
		<section id="features" className="py-24 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything you need to support your users</h2>
					<p className="text-lg text-gray-600">Powerful features designed to streamline your support workflow and delight your customers.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
							<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
								<feature.icon className="h-6 w-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
							<p className="text-gray-600 leading-relaxed">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
