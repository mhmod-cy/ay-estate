import { cn } from "@/lib/utils";
import Link from "next/link";

type BreadcrumbItem = {
	href?: string;
	title: string;
};

type Props = {
  items?: BreadcrumbItem[];
  className?: string;
};

export const Breadcrumb = ({ items, className }: Props) => {
	return (
		<div className={cn("flex items-center gap-[8px]", className)}>
			{items?.map((item, index) => (
				<div key={index} className="contents">
					{item.href ? (
						<Link
							href={item.href}
							className="text-primary-main text-[14px] font-[500] hover:text-primary"
						>
							{item.title}
						</Link>
					) : (
						<span className="text-balance text-[14px] font-[500]">
							{item.title}
						</span>
					)}
					{index !== items.length - 1 ? (
						<span className="text-[14px] font-[500] text-grey-2">/</span>
					) : null}
				</div>
			))}
		</div>
	);
};
