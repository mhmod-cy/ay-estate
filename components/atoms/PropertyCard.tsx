import { Home } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { TProperty } from "@/types";
import Image from "next/image";
import { BiBath } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { MdOutlineKingBed } from "react-icons/md";

type Props = {
	data: TProperty;
};

export const PropertyCard = ({ data }: Props) => {
	return (
		<Card className="w-full overflow-hidden border-0 shadow-none mb-[24px]">
			<CardHeader className="relative space-y-0 p-0">
				<Badge
					variant="secondary"
					className="absolute left-[24px] top-[16px] z-20 rounded-[24px] bg-black/50 px-[20px] py-[8px] text-white hover:bg-black/50"
				>
					Featured
				</Badge>
				<Button
					variant="ghost"
					size="icon"
					className="absolute right-[24px] top-[16px] z-20 h-[36px] w-[36px] rounded-full bg-white/50 hover:bg-white/50"
				>
					<GoHeart className="h-[20px] w-[20px]" />
				</Button>
				<div className="relative overflow-hidden rounded-t-lg">
					<Image
						className="h-[200px] w-full object-cover md:h-[300px] lg:h-[400px] lg:rounded-[12px]"
						src={data.image}
						width={300}
						height={200}
						alt={data.title}
					/>
				</div>
			</CardHeader>
			<CardContent className="mt-[16px] px-0">
				<div className="space-y-2">
					<p className="text-[22px] font-[600] leading-[32px]">
						{data.price} / per year / leasehold
					</p>
					<p className="text-[18px] font-[600] leading-[28px]">{data.title}</p>
					<p className="mt-[4px] text-[14px] leading-[20px] text-black/90">
						{data.location}
					</p>
				</div>
			</CardContent>
			<CardFooter className="p-0">
				<div className="flex items-center gap-[18px] text-sm text-muted-foreground/80">
					{data?.features?.type && (
						<div className="flex items-center gap-[8px]">
							<Home className="h-[18px] w-[18px]" />
							<span className="inline-flex text-[14px] leading-[18px]">
								{data.features.type}
							</span>
						</div>
					)}
					{data?.features?.bedrooms && (
						<div className="flex items-center gap-[8px]">
							<MdOutlineKingBed className="h-[18px] w-[18px]" />
							<span className="inline-flex text-[14px] leading-[18px]">
								{data.features?.bedrooms}
							</span>
						</div>
					)}
					{data?.features?.bathrooms && (
						<div className="flex items-center gap-[8px]">
							<BiBath className="h-[18px] w-[18px]" />
							<span className="inline-flex text-[14px] leading-[18px]">
								{data.features?.bathrooms}
							</span>
						</div>
					)}
					{data?.features?.area && (
						<div className="flex items-center gap-[8px]">
							<Home className="h-[18px] w-[18px]" />
							<span className="inline-flex text-[14px] leading-[18px]">
								{data.features?.area}
							</span>
						</div>
					)}
				</div>
			</CardFooter>
		</Card>
	);
};
