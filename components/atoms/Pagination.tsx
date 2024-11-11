"use client";

import { useQueryParams } from "@/hooks/useQueryParams";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

// const MARGIN: number = 2;

type Props = {
  className?: string;
	onChange?: (page: number) => void;
	currentPage?: number;
	totalPages?: number;
};

export const Pagination = ({
  className,
	currentPage = 1,
	totalPages = 1,
	onChange,
}: Props) => {
	const { setQueryParams, queryParams } = useQueryParams();

	if (!queryParams.page) {
		setQueryParams({ page: currentPage.toString() });
	}

	return (
		<div className={cn('flex justify-center', className)}>
			{Array.from({ length: totalPages })
				// .filter((_, idx) => Math.abs(idx - currentPage) <= MARGIN)
				.map((_, idx) => (
					// Math.abs(idx + 1 - currentPage) < MARGIN &&
					<Button
						key={idx}
						onClick={() => {
							setQueryParams({ page: (idx + 1).toString() });
							onChange?.(idx + 1);
						}}
						className={`mx-1 h-[44px] w-[44px] rounded-md border bg-transparent px-3 py-1 shadow-none transition-colors duration-300 hover:bg-grey/15 ${
							currentPage === idx + 1 ? "text-primary" : "text-grey"
						}`}
					>
						{idx + 1}
					</Button>
				))}
		</div>
	);
};
