"use client";
import { MessageSquare, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
	const { dictionary } = useLanguage();
	return (
		<footer className="bg-white border-t border-slate-100 pt-20 pb-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
					<div className="col-span-1 md:col-span-1">
						<Link href="/" className="flex items-center gap-2 mb-6">
							<div className="bg-blue-600 p-2 rounded-xl">
								<MessageSquare className="h-5 w-5 text-white" />
							</div>
							<span className="font-bold text-xl text-slate-900 tracking-tight">SupportAI</span>
						</Link>
						<p className="text-slate-500 text-sm leading-relaxed mb-6">{dictionary.footer.description}</p>
						<div className="flex space-x-4">
							<Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
								<Twitter className="h-5 w-5" />
							</Link>
							<Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
								<Github className="h-5 w-5" />
							</Link>
							<Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
								<Linkedin className="h-5 w-5" />
							</Link>
						</div>
					</div>

					<div>
						<h3 className="font-bold text-slate-900 mb-6">{dictionary.footer.product}</h3>
						<ul className="space-y-4 text-sm text-slate-600">
							<li>
								<Link href="#features" className="hover:text-blue-600 transition-colors">
									{dictionary.footer.links.features}
								</Link>
							</li>
							<li>
								<Link href="#integration" className="hover:text-blue-600 transition-colors">
									{dictionary.footer.links.integration}
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-blue-600 transition-colors">
									{dictionary.footer.links.pricing}
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-blue-600 transition-colors">
									{dictionary.footer.links.changelog}
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-bold text-slate-900 mb-6">{dictionary.footer.company}</h3>
						<ul className="space-y-4 text-sm text-slate-600">
							<li>
								<Link href="#" className="hover:text-blue-600 transition-colors">
									{dictionary.footer.links.about}
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-blue-600 transition-colors">
									{dictionary.footer.links.blog}
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-blue-600 transition-colors">
									{dictionary.footer.links.careers}
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-blue-600 transition-colors">
									{dictionary.footer.links.contact}
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-bold text-slate-900 mb-6">{dictionary.footer.legal}</h3>
						<ul className="space-y-4 text-sm text-slate-600">
							<li>
								<Link href="#" className="hover:text-blue-600 transition-colors">
									{dictionary.footer.links.privacy}
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-blue-600 transition-colors">
									{dictionary.footer.links.terms}
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-blue-600 transition-colors">
									{dictionary.footer.links.cookie}
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-slate-500">
						© {new Date().getFullYear()} SupportAI. {dictionary.footer.copyright}
					</p>
				</div>
			</div>
		</footer>
	);
}
