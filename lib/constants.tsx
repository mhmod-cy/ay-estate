import { InputCurrency } from "@/components/atoms/InputCurrency";
import { TSideFilter } from "@/types";
import { AlignJustify, Grid2X2 } from "lucide-react";
import { cn } from "./utils";

export const MAX_TABLET_WIDTH = 1024;

export const LISTING_TYPES = [
	{
		id: "grid",
		label: "Grid",
		icon: <Grid2X2 className="h-[20px] w-[20px]" />,
	},
	{
		id: "list",
		label: "List",
		icon: <AlignJustify className="h-[20px] w-[20px]" />,
	},
];

export const SORT = [
	{
		id: "relative",
		label: "Relevant Product",
	},
	{
		id: "recent",
		label: "Recently Added",
	},
];

export const SIDE_FILTERS: TSideFilter[] = [
	{
		id: "best_filter",
		label: "Best Filter",
		type: "multiple",
		options: [
			{
				id: "plus-4",
				label: "⭐ 4 stars or upper",
			},
			{
				id: "luxury-building",
				label: "Luxury Building",
			},
			{
				id: "best-seller",
				label: "Best Seller",
			},
			{
				id: "discount",
				label: "Discount",
			},
		],
	},
	{
		id: "location",
		label: "Location",
		type: "multiple",
		options: [
			{
				id: "cairo",
				label: "Cairo",
			},
			{
				id: "alexandria",
				label: "Alexandria",
			},
			{
				id: "giza",
				label: "Giza",
			},
			{
				id: "sharm-el-sheikh",
				label: "Sharm El Sheikh",
			},
		],
	},
	{
		id: "category",
		label: "Category",
		type: "multiple",
		options: [
			{
				id: "house",
				label: "House",
			},
			{
				id: "villa",
				label: "Villa",
			},
			{
				id: "apartment",
				label: "Apartment",
			},
			{
				id: "hotel",
				label: "Hotel",
			},
			{
				id: "real-Estate",
				label: "Real Estate",
			},
		],
	},
	{
		id: "price-range",
		label: "Price Range",
		type: "multiple",
		options: [
			{
				id: "0-5000",
				label: "$0 - $5000",
			},
			{
				id: "5000-50000",
				label: "$5000 - $50000",
			},
			{
				id: "+50000",
				label: ">$50000",
			},
		],
		preOptions: (
			<div className="flex flex-col">
				<InputCurrency className="mb-[12px]" value={0} onChange={() => {}} />
				<InputCurrency className="mb-[12px]" value={0} onChange={() => {}} />
			</div>
		),
		optionRenderer: (key, option, isSelected, handleChange) => (
			<div
				className={cn(
					"mb-[12px] mr-[12px] inline-block cursor-pointer rounded-[8px] border text-[16px]",
					{
						"bg-primary": isSelected,
					},
				)}
				onClick={() => handleChange(key, isSelected ? null : option.id)}
				style={{
					padding: "10px 16px",
					cursor: "pointer",
				}}
			>
				{option.label}
			</div>
		),
	},
];
