"use client";

import { Button } from "@/components/ui/button";
import { useQueryParams } from "@/hooks/useQueryParams";
import { LISTING_TYPES } from "@/lib/constants";
import { useEffect } from "react";

export const ListingType = () => {
	const { queryParams, setQueryParams } = useQueryParams();

	const handleChooseType = (type: string) => {
		setQueryParams({ type });
	};

	useEffect(() => {
		if (!queryParams.type) {
			setQueryParams({ type: LISTING_TYPES[0].id });
		}
	}, [queryParams.type, setQueryParams]);

	return (
		<div className="flex items-center gap-[8px]">
			{LISTING_TYPES.map((type) => (
				<Button
					className="h-[32px] w-[32px] rounded-[8px] p-0 shadow-none"
					key={type.id}
					variant={queryParams.type === type.id ? "default" : "outline"}
					onClick={() => handleChooseType(type.id)}
				>
					{type.icon}
				</Button>
			))}
		</div>
	);
};
