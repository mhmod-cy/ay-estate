import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import InnovationData from "@/public/data/innovation.json";
type Props = {};

export const Innovative = (props: Props) => {
	return (
		<section className="bg-[#111] py-[50px] text-white lg:py-[80px]">
			<Container>
				<div className="grid grid-cols-1 gap-[20px] lg:grid-cols-2 lg:gap-[80px]">
					<div>
						<h2 className="text-[16px] font-[600] leading-[24px]">
							Innovative
						</h2>
						<p className="mt-[12px] text-[32px] font-[700] leading-[38px] lg:text-[48px] lg:leading-[56px]">
							Transforming the Real Estate Industry with Excellence
						</p>
					</div>
					<div>
						<p className="text-balance text-[16px] font-[400] leading-[24px]">
							At our company, we take pride in our exceptional success rate,
							having listed thousands of properties, and ensuring client
							satisfaction is our top priority.
						</p>
						<div className="mt-[24px] text-center lg:mt-[32px] lg:text-start">
							<Button size="xl">Learn More</Button>
						</div>
					</div>
				</div>

				<div className="mt-[48px] grid grid-cols-1 items-center gap-[24px] md:grid-cols-2 md:gap-[32px] lg:mt-[80px] lg:grid-cols-3 lg:gap-[48px]">
					{InnovationData.map((item, index) => (
						<div
							key={index}
							className="flex flex-col gap-[8px] border-l-[2px] pl-[32px]"
						>
							<p className="text-[56px] font-[700] leading-[72px] lg:text-[80px] lg:leading-[104px]">
								{item.number}
							</p>
							<p className="text-[18px] font-[700] leading-[26px] lg:text-[20px] lg:leading-[28px]">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};
