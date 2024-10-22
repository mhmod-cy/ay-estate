import { Discover } from "@/app/(pages)/home/components/Discover";
import { Hero } from "@/app/(pages)/home/components/Hero";
import { Simplify } from "@/app/(pages)/home/components/Simplify";
import { FindProperties } from "@/app/(pages)/home/components/FindProperties";
import { Innovative } from "@/app/(pages)/home/components/Innovative";
import { Testimonials } from "@/app/(pages)/home/components/Testimonials";
import { FAQ } from "@/app/(pages)/home/components/FAQ";

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<Hero />
			<Discover />
			<Simplify />
			<Innovative />
			<FindProperties />
			<Testimonials />
			<FAQ />
		</div>
	);
}
