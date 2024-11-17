import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { formatPrice, randomNumber } from "@/lib/utils";
import PropertiesData from "@/public/data/properties.json";
import { ROUTES } from "@/routes/routes";
import { TProperty } from "@/types";
import { CaretRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

type TPage = {
	params: { id: string };
};

export default async function Page({ params: { id } }: TPage) {
	const orderedProperties = PropertiesData.sort((a, b) => a.id - b.id);
	console.log("ordered", orderedProperties)
	const propertyData = orderedProperties[0] as TProperty;
	console.log(orderedProperties);
	console.log(propertyData);

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
						<p className="mt-[8px] text-[16px] leading-[24px]">
							{propertyData.client}
						</p>
					</div>
					<div className="space-y-1">
						<h3 className="text-[20px] font-[700] leading-[28px]">Date</h3>
						<p className="mt-[8px] text-[16px] leading-[24px]">
							{propertyData.date}
						</p>
					</div>
					<div className="space-y-1">
						<h3 className="text-[20px] font-[700] leading-[28px]">Location</h3>
						<p className="mt-[8px] text-[16px] leading-[24px]">
							{propertyData.location}
						</p>
					</div>
					<div className="space-y-1">
						<h3 className="text-[20px] font-[700] leading-[28px]">Price</h3>
						<p className="mt-[8px] text-[16px] leading-[24px] underline">
							{formatPrice(Number(propertyData.price))}
						</p>
					</div>
				</div>
			</div>
			<Image
				className="mb-[56px] mt-[48px] h-auto w-full rounded-[24px] lg:mb-[112px] lg:mt-[80px]"
				src={`/images/property-${randomNumber(1, 6)}.jpg`}
				alt={propertyData.title}
				width={1920}
				height={1080}
			/>
			<div className="my-[56px] flex flex-col gap-[80px] md:flex-row lg:my-[112px]">
				<div>
					<p className="mb-[8px] text-[48px] font-[700] leading-[58px]">
						Stunning Property with Luxurious Amenities
					</p>
					{PropertiesData.splice(0, 3).map((_, index) => (
						<p className="mt-[16px] text-[16px] leading-[24px]" key={index}>
							Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
							id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
							blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
							at scelerisque amet nulla purus habitasse.
						</p>
					))}
				</div>
				<div className="w-full lg:min-w-[768px]">
					{PropertiesData.splice(0, 3).map((_, index) => (
						<Image
							key={index}
							className="mb-[32px] rounded-[16px]"
							src={`/images/property-${randomNumber(1, 6)}.jpg`}
							alt={propertyData.title}
							width={1920}
							height={1080}
						/>
					))}
				</div>
			</div>
			<div className="my-[56px] items-center gap-[80px] md:grid md:grid-cols-2 lg:my-[112px]">
				<div>
					<p className="text-[16px] font-[600] leading-[24px]">Luxury</p>
					<p className="mt-[16px] text-[48px] font-[700] leading-[58px]">
						Experience the Perfect Blend of Comfort and Style
					</p>
					<p className="mt-[24px] text-[18px] leading-[24px]">
						Welcome to our stunning property! With a beautiful image gallery,
						immersive virtual tour, and outstanding features, this is the
						perfect place to call home. Explore the spacious rooms, modern
						amenities, and convenient location that make this property truly
						exceptional.
					</p>
					<div className="mt-[24px] flex items-center gap-[24px] md:mt-[36px] lg:mt-[48px]">
						<Button className="h-[48px] px-[24px] py-[12px] text-[16px] font-[600]">
							Learn More
						</Button>
						<Link
							href={ROUTES.learnMore.path}
							className="inline-flex items-center text-[16px]"
						>
							Contact
							<CaretRightIcon className="ml-[8px]" />
						</Link>
					</div>
				</div>

				<Image
					className="mb-[32px] rounded-[12px] object-cover lg:h-[500px]"
					src={`/images/property-${randomNumber(1, 6)}.jpg`}
					alt={propertyData.title}
					width={1920}
					height={1080}
				/>
			</div>
		</Container>
	);
}
