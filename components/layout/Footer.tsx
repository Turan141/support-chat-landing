"use client";
import { MessageSquare, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
export function Footer() {
	const { dictionary } = useLanguage();
	return (
		<footer className="bg-slate-50 border-t border-slate-100">
			{" "}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{" "}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{" "}
					<div className="col-span-1 md:col-span-1">
						{" "}
						<Link href="/" className="flex items-center gap-2 mb-4">
							{" "}
							<div className="bg-violet-600 p-2 rounded-lg">
								{" "}
								<MessageSquare className="h-5 w-5 text-white" />{" "}
							</div>{" "}
							<span className="font-bold text-lg text-slate-900">SupportAI</span>{" "}
						</Link>{" "}
						<p className="text-slate-500 text-sm">{dictionary.footer.description}</p>{" "}
					</div>{" "}
					<div>
						{" "}
						<h3 className="font-semibold text-slate-900 mb-4">{dictionary.footer.product}</h3>{" "}
						<ul className="space-y-2 text-sm text-slate-600">
							{" "}
							<li>
								{" "}
								<Link href="#features" className="hover:text-violet-600">
									{" "}
									{dictionary.footer.links.features}{" "}
								</Link>{" "}
							</li>{" "}
							<li>
								{" "}
								<Link href="#integration" className="hover:text-violet-600">
									{" "}
									{dictionary.footer.links.integration}{" "}
								</Link>{" "}
							</li>{" "}
							<li>
								{" "}
								<Link href="#" className="hover:text-violet-600">
									{" "}
									{dictionary.footer.links.pricing}{" "}
								</Link>{" "}
							</li>{" "}
							<li>
								{" "}
								<Link href="#" className="hover:text-violet-600">
									{" "}
									{dictionary.footer.links.changelog}{" "}
								</Link>{" "}
							</li>{" "}
						</ul>{" "}
					</div>{" "}
					<div>
						{" "}
						<h3 className="font-semibold text-slate-900 mb-4">{dictionary.footer.company}</h3>{" "}
						<ul className="space-y-2 text-sm text-slate-600">
							{" "}
							<li>
								{" "}
								<Link href="#" className="hover:text-violet-600">
									{" "}
									{dictionary.footer.links.about}{" "}
								</Link>{" "}
							</li>{" "}
							<li>
								{" "}
								<Link href="#" className="hover:text-violet-600">
									{" "}
									{dictionary.footer.links.blog}{" "}
								</Link>{" "}
							</li>{" "}
							<li>
								{" "}
								<Link href="#" className="hover:text-violet-600">
									{" "}
									{dictionary.footer.links.careers}{" "}
								</Link>{" "}
							</li>{" "}
							<li>
								{" "}
								<Link href="#" className="hover:text-violet-600">
									{" "}
									{dictionary.footer.links.contact}{" "}
								</Link>{" "}
							</li>{" "}
						</ul>{" "}
					</div>{" "}
					<div>
						{" "}
						<h3 className="font-semibold text-slate-900 mb-4">{dictionary.footer.legal}</h3>{" "}
						<ul className="space-y-2 text-sm text-slate-600">
							{" "}
							<li>
								{" "}
								<Link href="#" className="hover:text-violet-600">
									{" "}
									{dictionary.footer.links.privacy}{" "}
								</Link>{" "}
							</li>{" "}
							<li>
								{" "}
								<Link href="#" className="hover:text-violet-600">
									{" "}
									{dictionary.footer.links.terms}{" "}
								</Link>{" "}
							</li>{" "}
							<li>
								{" "}
								<Link href="#" className="hover:text-violet-600">
									{" "}
									{dictionary.footer.links.cookie}{" "}
								</Link>{" "}
							</li>{" "}
						</ul>{" "}
					</div>{" "}
				</div>{" "}
				<div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
					{" "}
					<p className="text-sm text-slate-500">
						© {new Date().getFullYear()} SupportAI. {dictionary.footer.copyright}
					</p>{" "}
					<div className="flex space-x-4">
						{" "}
						<Link href="#" className="text-slate-400 hover:text-slate-600">
							{" "}
							<Twitter className="h-5 w-5" />{" "}
						</Link>{" "}
						<Link href="#" className="text-slate-400 hover:text-slate-600">
							{" "}
							<Github className="h-5 w-5" />{" "}
						</Link>{" "}
						<Link href="#" className="text-slate-400 hover:text-slate-600">
							{" "}
							<Linkedin className="h-5 w-5" />{" "}
						</Link>{" "}
					</div>{" "}
				</div>
			</div>
		</footer>
	);
}
