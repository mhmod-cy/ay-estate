import { formatPrice } from "@/lib/utils";
import { ROUTES } from "@/routes/routes";
import { TProperty } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
	data: TProperty;
};

export const PropertyCard = ({ data }: Props) => {
	return (
		<div>
			<Image
				className="h-[198px] w-full object-cover lg:h-[365px] lg:rounded-[12px]"
				src={data.image}
				width={300}
				height={200}
				alt={data.title}
			/>
			<div className="my-[16px]">
				<p className="text-center text-[16px] font-[600] leading-[24px] lg:text-[18px] lg:leading-[28px]">
					{data.title}
				</p>
				<p className="text-center text-[14px] font-[400] leading-[21px]">
					{data.location}
				</p>
				<p className="mt-[8px] text-center text-[18px] font-[600] leading-[26px] lg:text-[20px] lg:leading-[30px]">
					{formatPrice(Number(data.price))}
				</p>
				<Link href={`${ROUTES.property.path}/${data.id}`} className="contents">
					<Button
						className="mx-auto mt-[16px] min-h-[37px] w-full rounded-[12px] border-primary text-[16px] font-[600] leading-[21px] lg:border-black lg:font-normal lg:text-black"
						variant="outline"
					>
						View Details
					</Button>
				</Link>
			</div>
		</div>
	);
};
