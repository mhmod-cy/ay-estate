import { Discover } from "@/app/(pages)/home/components/Discover";
import { Hero } from "@/app/(pages)/home/components/Hero";
import { Simplify } from "@/app/(pages)/home/components/Simplify";
import { Innovative } from "./home/components/Innovative";

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<Hero />
			<Discover />
			<Simplify />
			<Innovative />
		</div>
	);
}
