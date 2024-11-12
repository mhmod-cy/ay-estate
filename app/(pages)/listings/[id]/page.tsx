import { Container } from "@/components/shared/container";
import { Tag } from "@/components/ui/tag";
import PropertiesData from "@/public/data/properties.json";
import { notFound } from "next/navigation";

type TPage = {
	params: { id: string };
};

export default function Page({ params: { id } }: TPage) {
	const propertyId = Number(id);
	const propertyData = PropertiesData.find(
		(property) => property.id === propertyId,
	);

	if (isNaN(propertyId) || !propertyData) {
		notFound();
	}
	return (
		<Container>
			<div className="mt-[56px] flex flex-col gap-[56px] lg:mt-[112px] lg:flex-row lg:gap-[80px]">
				<div className="lg:w-[768px]">
					<h1 className="text-[56px] font-[700] leading-[64px]">
						{propertyData.title}
					</h1>
					<p className="mt-[20px] text-[18px] leading-[28px]">
						{propertyData.description}
					</p>
					{propertyData.tags && (
						<div className="mt-[24px] flex flex-row flex-wrap gap-[8px]">
							{propertyData.tags.map((tag) => (
								<>
									<Tag key={tag}>{tag}</Tag>
								</>
							))}
						</div>
					)}
				</div>
				<div className="grid flex-grow grid-cols-2 gap-4 p-6">
					<div className="space-y-1">
						<h3 className="text-[20px] font-[700] leading-[28px]">Client</h3>
						<p className="mt-[8px] text-[16px] leading-[24px]">John Doe</p>
					</div>
					<div className="space-y-1">
						<h3 className="text-[20px] font-[700] leading-[28px]">Date</h3>
						<p className="mt-[8px] text-[16px] leading-[24px]">March 2023</p>
					</div>
					<div className="space-y-1">
						<h3 className="text-[20px] font-[700] leading-[28px]">Location</h3>
						<p className="mt-[8px] text-[16px] leading-[24px]">
							Bali, Indonesia
						</p>
					</div>
					<div className="space-y-1">
						<h3 className="text-[20px] font-[700] leading-[28px]">Price</h3>
						<p className="mt-[8px] text-[16px] leading-[24px]">$3,000,000</p>
					</div>
				</div>
			</div>
		</Container>
	);
}
