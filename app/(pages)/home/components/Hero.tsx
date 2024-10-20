import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {};

export const Hero = (props: Props) => {
	return (
		<Container className="grid grid-cols-1 items-center gap-[48px] lg:gap-[85px] lg:grid-cols-2 py-[50px] lg:pt-[30px] lg:pb-[70px]">
			<div>
				<h1 className="text-[56px] font-[700] text-center lg:text-start leading-[1]">
					Discover Your Dream Home Today
				</h1>
				<p className="mt-[40px] leading-[22px] text-center text-balance lg:text-start">
					Find the perfect property that suits your lifestyle. Our real estate
					service offers unique selling propositions that set us apart from the
					competition. Find your perfect home today!
				</p>

				<div className="mt-[64px] flex items-center gap-[16px] justify-center lg:justify-start">
					<Button className="font-[600] px-[24px] py-[12px] text-[16px] h-[48px]">Explore Now</Button>
					<Button variant="black" className="bg-transparent text-black hover:text-white border border-black font-[600] lg:font-normal px-[24px] py-[12px] text-[16px] h-[48px]">
						Learn more
					</Button>
				</div>
			</div>
			<Image src="/images/hero.webp" width={1000} height={1000}  className="w-auto rounded-[16px]" alt="hero image"/>
		</Container>
	);
};
