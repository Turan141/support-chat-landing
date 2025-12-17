import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/FeaturesNew";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Integration } from "@/components/landing/Integration";
import { Backoffice } from "@/components/landing/Backoffice";

export default function Home() {
	return (
		<div className="flex flex-col gap-0">
			<Hero />
			<Features />
			<Backoffice />
			<HowItWorks />
			<Integration />
		</div>
	);
}
