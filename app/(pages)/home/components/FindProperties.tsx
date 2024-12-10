import { PropertyCardMini } from "@/components/atoms/PropertyCardMini";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { randomNumber } from "@/lib/utils";
import PropertiesData from "@/public/data/properties.json";
import { ROUTES } from "@/routes/routes";
import { TProperty } from "@/types";
import Link from "next/link";

export const FindProperties = () => {
	return (
		<section className="py-[50px] lg:pb-[190px] lg:pt-[80px]">
			<Container>
				<div>
					<h2 className="text-center text-[16px] font-[600] leading-[24px]">
						Find
					</h2>
					<p className="mt-[12px] text-center text-[32px] font-[700] leading-[38px] lg:mt-[16px] lg:text-[48px] lg:leading-[56px]">
						Properties
					</p>
					<p className="mt-[20px] text-center text-[16px] font-[400] leading-[24px] lg:mt-[24px] lg:text-[18px] lg:leading-[28px]">
						Explore our curated list of properties and find your dream home.
					</p>
				</div>

				<div className="mt-[48px] grid grid-cols-2 gap-[24px] md:grid-cols-3 md:gap-[32px] lg:mt-[80px] lg:grid-cols-4 lg:gap-[48px]">
					{(PropertiesData as TProperty[]).splice(0, 8).map((item, index) => (
						<PropertyCardMini
							key={index}
							data={{
								...item,
								image: `/images/property-${randomNumber(1, 6)}.jpg`,
							}}
						/>
					))}
				</div>
				<div className="mt-[40px] text-center lg:hidden">
					<Link href={ROUTES.search.path}>
						<Button size="xl" className="px-[18px]">
							Veiw All
						</Button>
					</Link>
				</div>
			</Container>
		</section>
	);
};
