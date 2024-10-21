import { Container } from "@/components/shared/container";
import SimplifyData from "@/public/data/simplify.json";
import Image from "next/image";

type Props = {};

export const Simplify = (props: Props) => {
	return (
		<div className="py-[50px] lg:py-[80px]">
			<Container>
				<h2 className="text-center text-[16px] font-[600] leading-[24px]">
					Simplify
				</h2>
				<p className="mt-[12px] text-balance text-center text-[32px] font-[700] leading-[38px]">
					Streamline Your Property Buying or Selling Process
				</p>
				<p className="mt-[20px] text-balance text-center text-[16px] font-[400] leading-[24px]">
					Our website provides a step-by-step guide to help you seamlessly
					navigate the process of buying or selling property. From finding the
					perfect property to closing the deal, we've got you covered.
				</p>

				<div className="mt-[48px] grid grid-cols-1 gap-[48px] md:grid-cols-2 lg:mt-[80px] lg:grid-cols-3">
					{SimplifyData.map((item) => (
						<div>
							<Image
								width={300}
								height={240}
								src={`/images/${item.image}.jpg`}
								alt={item.title}
								className="h-[198px] w-full rounded-[8px] object-cover lg:h-[240px]"
							/>
							<p className="mt-[24px] text-center text-[24px] font-[700] leading-[33px] lg:mt-[32px] lg:text-[32px] lg:leading-[42px]">
								{item.title}
							</p>
							<p className="mt-[20px] text-center text-[16px] font-[400] leading-[24px] lg:mt-[24px]">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};
