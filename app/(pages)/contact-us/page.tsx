import { Container } from "@/components/shared/container";

export default async function Page() {
	return (
		<Container>
			<div className="mt-[56px] flex flex-col gap-[56px] lg:mt-[112px] lg:flex-row lg:gap-[80px]">
				<div className="lg:w-[768px]">
					<h1 className="text-[56px] font-[700] leading-[64px]">
						propertyData.title
					</h1>
					<p className="mt-[20px] text-[18px] leading-[28px]">
						propertyData.description
					</p>
				</div>
				<div className="grid flex-grow grid-cols-2 gap-4 p-6">
					<div className="space-y-1">
						<h3 className="text-[20px] font-[700] leading-[28px]">Client</h3>
						<p className="mt-[8px] text-[16px] leading-[24px]">
							propertyData.client
						</p>
					</div>
					<div className="space-y-1">
						<h3 className="text-[20px] font-[700] leading-[28px]">Date</h3>
						<p className="mt-[8px] text-[16px] leading-[24px]">
							{/* {propertyData.date} */}
						</p>
					</div>
					<div className="space-y-1">
						<h3 className="text-[20px] font-[700] leading-[28px]">Location</h3>
						<p className="mt-[8px] text-[16px] leading-[24px]">
							{/* {propertyData.location} */}
						</p>
					</div>
					<div className="space-y-1">
						<h3 className="text-[20px] font-[700] leading-[28px]">Price</h3>
						<p className="mt-[8px] text-[16px] leading-[24px] underline">
							{/* {formatPrice(Number(propertyData.price))} */}
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
}
