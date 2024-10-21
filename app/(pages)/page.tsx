import { Hero } from "@/app/(pages)/home/components/Hero";
import { Discover } from "@/app/(pages)/home/components/Discover";

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<Hero />
			<Discover />
		</div>
	);
}
