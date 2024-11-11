"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQueryParams } from "@/hooks/useQueryParams";
import { SORT } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";

export const SortDropdown = () => {
	const { queryParams, setQueryParams } = useQueryParams();

	const handleChooseSort = (sort: string) => {
		setQueryParams({ sort });
	};

	useEffect(() => {
		if (!queryParams.sort) {
			setQueryParams({ sort: SORT[0].id });
		}
	}, [queryParams.sort, setQueryParams]);

	return (
		<div>
			<DropdownMenu>
				<span className="mr-[4px] inline-block text-grey-2">Sort By:</span>
				<DropdownMenuTrigger asChild>
					<Button size="sm" variant="outline">
						{SORT.find((sort) => sort.id === queryParams.sort)?.label}
						<ChevronDown className="ml-2 h-[12px] w-[12px]" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{SORT.map((sort) => (
						<DropdownMenuItem
							key={sort.id}
							onClick={() => handleChooseSort(sort.id)}
						>
							{sort.label}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
