import { Discover } from "@/app/(pages)/home/components/Discover";
import { FAQ } from "@/app/(pages)/home/components/FAQ";
import { FindProperties } from "@/app/(pages)/home/components/FindProperties";
import { Hero } from "@/app/(pages)/home/components/Hero";
import { Innovative } from "@/app/(pages)/home/components/Innovative";
import { Simplify } from "@/app/(pages)/home/components/Simplify";
import { Testimonials } from "@/app/(pages)/home/components/Testimonials";
import { CTA } from "./home/components/CTA";

export default function Home() {
	return (
		<div>
			<Hero />
			<Discover />
			<Simplify />
			<Innovative />
			<FindProperties />
			<Testimonials />
			<FAQ />
			<CTA />
		</div>
	);
}
