import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

type Props = {};

export const CTA = (props: Props) => {
	return (
		<section className="relative overflow-hidden bg-[#111111] py-[40px] text-center text-white lg:py-[60px]">
			<Image
				src="/images/cta-1.svg"
				className="absolute right-[50%] top-[-50%]"
				width={1000}
				height={1000}
				alt="cta"
			/>
			<Image
				src="/images/cta-1.svg"
				className="absolute bottom-[-20%] left-[50%] rotate-180"
				width={1000}
				height={1000}
				alt="cta"
			/>
			<Container>
				<p className="text-[20px] font-[700] uppercase leading-[30px] lg:text-[36px] lg:leading-[54px]">
					Let’s start a<br />
					successful project
				</p>
				<p className="mt-[12px] text-grey-2 md:mt-[16px] lg:mt-[24px] lg:text-[18px] lg:leading-[28px]">
					We deliver immediate business impact and long-term ROI for your brand.
					<br className="hidden lg:block" />
					Find out why Astheris are Australia's trusted Digital Agency.
				</p>
				<Button
					size="xl"
					className="mt-[12px] w-full rounded-full text-[18px] font-[700] md:mt-[16px] md:w-auto lg:mt-[24px]"
				>
					Start A Project
					<ArrowTopRightIcon className="ml-[10px] h-4 w-4" />
				</Button>
			</Container>
		</section>
	);
};
