import { MessageSquare, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-gray-50 border-t border-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="col-span-1 md:col-span-1">
						<Link href="/" className="flex items-center gap-2 mb-4">
							<div className="bg-blue-600 p-2 rounded-lg">
								<MessageSquare className="h-5 w-5 text-white" />
							</div>
							<span className="font-bold text-lg text-gray-900">SupportAI</span>
						</Link>
						<p className="text-gray-500 text-sm">Empowering customer support with AI-driven intelligence. Smart answers, happy customers.</p>
					</div>

					<div>
						<h3 className="font-semibold text-gray-900 mb-4">Product</h3>
						<ul className="space-y-2 text-sm text-gray-600">
							<li>
								<Link href="#features" className="hover:text-blue-600">
									Features
								</Link>
							</li>
							<li>
								<Link href="#integration" className="hover:text-blue-600">
									Integration
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-blue-600">
									Pricing
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-blue-600">
									Changelog
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-gray-900 mb-4">Company</h3>
						<ul className="space-y-2 text-sm text-gray-600">
							<li>
								<Link href="#" className="hover:text-blue-600">
									About
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-blue-600">
									Blog
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-blue-600">
									Careers
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-blue-600">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
						<ul className="space-y-2 text-sm text-gray-600">
							<li>
								<Link href="#" className="hover:text-blue-600">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-blue-600">
									Terms of Service
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-blue-600">
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-gray-500">© {new Date().getFullYear()} SupportAI. All rights reserved.</p>
					<div className="flex space-x-4">
						<Link href="#" className="text-gray-400 hover:text-gray-600">
							<Twitter className="h-5 w-5" />
						</Link>
						<Link href="#" className="text-gray-400 hover:text-gray-600">
							<Github className="h-5 w-5" />
						</Link>
						<Link href="#" className="text-gray-400 hover:text-gray-600">
							<Linkedin className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
