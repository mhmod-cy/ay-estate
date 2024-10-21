import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {};

export const Hero = (props: Props) => {
	return (
		<section className="py-[50px] lg:pb-[70px] lg:pt-[30px]">
			<Container className="grid grid-cols-1 items-center gap-[48px] lg:grid-cols-2 lg:gap-[85px]">
				<div>
					<h1 className="text-center text-[36px] font-[700] leading-[44px] lg:text-start lg:text-[56px] lg:leading-[68px]">
						Discover Your Dream Home Today
					</h1>
					<p className="mt-[40px] text-balance text-center text-[14px] leading-[22px] lg:text-start lg:text-[18px] lg:leading-[28px]">
						Find the perfect property that suits your lifestyle. Our real estate
						service offers unique selling propositions that set us apart from
						the competition. Find your perfect home today!
					</p>

					<div className="mt-[64px] flex items-center justify-center gap-[16px] lg:justify-start">
						<Button className="h-[48px] px-[24px] py-[12px] text-[16px] font-[600]">
							Explore Now
						</Button>
						<Button
							variant="black"
							className="h-[48px] border border-black bg-transparent px-[24px] py-[12px] text-[16px] font-[600] text-black hover:text-white lg:font-normal"
						>
							Learn more
						</Button>
					</div>
				</div>
				<Image
					src="/images/hero.webp"
					width={1000}
					height={1000}
					className="w-auto rounded-[16px]"
					alt="hero image"
				/>
			</Container>
		</section>
	);
};
