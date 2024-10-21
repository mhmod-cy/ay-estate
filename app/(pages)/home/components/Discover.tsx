import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import DiscoverData from "@/public/data/discover.json";
import { ROUTES } from "@/routes/routes";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
type Props = {};

export const Discover = (props: Props) => {
	return (
		<section className="py-[50px] lg:pb-[44px] lg:pt-[80px]">
			<Container>
				<div className="grid grid-cols-1 gap-[48px] lg:grid-cols-2 lg:gap-[85px]">
					<div>
						<h2 className="text-[16px] font-[600]">Discover</h2>
						<p className="text-balance text-[32px] font-[700]">
							Find Your Dream Property with Us
						</p>
					</div>
					<p className="lg-[18px] text-balance text-[16px] font-[400]">
						At our real estate agency, we offer a range of services to help you
						with your property needs. Whether you're looking to buy, sell, or
						get a valuation, our experienced team is here to assist you every
						step of the way.
					</p>
				</div>

				<div className="mt-[48px] grid grid-cols-1 items-center gap-[24px] md:grid-cols-2 md:gap-[32px] lg:mt-[80px] lg:grid-cols-3 lg:gap-[48px]">
					{DiscoverData.map((item) => (
						<div key={item.title} className="flex flex-col gap-[24px]">
							<span className="inline-flex h-[64px] w-[64px] items-center justify-center rounded-full bg-light-grey-3">
								<Image
									width={32}
									height={32}
									src={"icons/document-text.svg"}
									alt="document icon"
								/>
							</span>
							<p className="text-[32px] font-[700]">{item.title}</p>
							<p className="text-[16px] font-[400]">{item.description}</p>
						</div>
					))}
				</div>

				<div className="mt-[24px] flex items-center gap-[24px] md:mt-[36px] lg:mt-[48px]">
					<Button className="h-[48px] px-[24px] py-[12px] text-[16px] font-[600]">
						Learn More
					</Button>
					<Link
						href={ROUTES.learnMore.path}
						className="inline-flex items-center text-[16px]"
					>
						Contact
						<ArrowRightIcon className="ml-[8px]" />
					</Link>
				</div>
			</Container>
		</section>
	);
};
