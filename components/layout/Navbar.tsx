import Link from "next/link";
import { MessageSquare } from "lucide-react";

export function Navbar() {
	return (
		<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<Link href="/" className="flex items-center gap-2">
							<div className="bg-blue-600 p-2 rounded-lg">
								<MessageSquare className="h-6 w-6 text-white" />
							</div>
							<span className="font-bold text-xl text-gray-900">SupportAI</span>
						</Link>
					</div>

					<div className="hidden md:flex items-center space-x-8">
						<Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
							Features
						</Link>
						<Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
							How it Works
						</Link>
						<Link href="#integration" className="text-gray-600 hover:text-blue-600 transition-colors">
							Integration
						</Link>
					</div>

					<div className="flex items-center gap-4">
						<Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium">
							Log in
						</Link>
						<Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
