"use client";

import { motion } from "framer-motion";
import { MessageCircle, Search, UserCheck, PlusCircle } from "lucide-react";

const steps = [
	{
		icon: MessageCircle,
		title: "User Asks a Question",
		description: "Your customer types a question into the chat widget on your site.",
	},
	{
		icon: Search,
		title: "AI Searches Knowledge Base",
		description: "Our AI instantly analyzes the intent and looks for a matching answer in your FAQs.",
	},
	{
		icon: UserCheck,
		title: "Instant Answer or Escalation",
		description: "If found, the answer is delivered immediately. If not, a human agent is notified.",
	},
	{
		icon: PlusCircle,
		title: "Knowledge Loop",
		description: "Agents answer new questions, and with one click, add them to the FAQ for next time.",
	},
];

export function HowItWorks() {
	return (
		<section id="how-it-works" className="py-24 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
					<p className="text-lg text-gray-600">A seamless flow from question to resolution.</p>
				</div>

				<div className="relative">
					{/* Connecting Line */}
					<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
						{steps.map((step, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
								<div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20 relative z-10">
									<step.icon className="h-8 w-8 text-white" />
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
								<p className="text-sm text-gray-600">{step.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
