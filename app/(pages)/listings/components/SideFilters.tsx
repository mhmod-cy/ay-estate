"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useQueryParams } from "@/hooks/useQueryParams";
import { MAX_TABLET_WIDTH, SIDE_FILTERS } from "@/lib/constants";
import { Filter } from "lucide-react";
import { useMedia } from "react-use";

export const SideFilters = () => {
	const isTablet = useMedia(`(max-width: ${MAX_TABLET_WIDTH}px)`);

	if (!isTablet) {
		return (
			<div className="w-[278px] rounded-[12px] border p-[24px]">
				<Content />
			</div>
		);
	}
	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className="flex items-center">
					<Button variant="outline" className="">
						Filters
						<Filter className="h-[20px] w-[20px]" />
					</Button>
				</div>
			</SheetTrigger>
			<SheetContent side="left" className="w-[300px] overflow-auto">
				<SheetHeader>
					<SheetTitle className="hidden">Filter Option</SheetTitle>
					<SheetDescription className="flex flex-col gap-5 pt-10">
						<Content />
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

const Content = () => {
	const { queryParams, setQueryParams } = useQueryParams();

	const handleChangeOption = (id: string, value: string | null) => {
		setQueryParams({ [id]: value });
	};
	return (
		<>
			<p className="text-[20px] font-[700] leading-[28px]">Filter Option</p>
			<hr className="mb-[24px] mt-[16px]" />
			{/* Open all filters accordions */}
			<Accordion
				type="multiple"
				defaultValue={SIDE_FILTERS.map((item) => item.id)}
			>
				{SIDE_FILTERS.map((item) => (
					<AccordionItem key={item.id} value={item.id} className="border-none">
						<AccordionTrigger className="text-[16px] font-[600] leading-[22px] decoration-transparent">
							{item.label}
						</AccordionTrigger>
						<AccordionContent>
							{/* Pre options if exists  */}
							{item?.preOptions}
							{item.options.map((option) =>
								item?.optionRenderer ? (
									item?.optionRenderer(
										item.id,
										option,
										queryParams[item.id] === option.id,
										handleChangeOption,
									)
								) : (
									<div
										key={`${item.id}-${option.id}`}
										className="mb-[12px] flex items-center gap-[8px]"
									>
										<Checkbox
											className="h-[24px] w-[24px] rounded-[4px] border-border shadow-none"
											id={option.id}
											checked={queryParams[item.id] === option.id}
											onCheckedChange={(checked) => {
												if (checked) {
													handleChangeOption(item.id, option.id);
												} else {
													handleChangeOption(item.id, null);
												}
											}}
										/>
										<Label
											htmlFor={option.id}
											className="text-[16px] font-[400] leading-[26px] text-grey-2"
										>
											{option.label}
										</Label>
									</div>
								),
							)}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</>
	);
};
