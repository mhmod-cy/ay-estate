import { Pagination } from "@/components/atoms/Pagination";
import { PropertyCard } from "@/components/atoms/PropertyCard";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/container";
import { formatPrice, randomNumber } from "@/lib/utils";
import PropertiesData from "@/public/data/properties.json";
import { ROUTES } from "@/routes/routes";
import Link from "next/link";
import { ListingType } from "./components/ListingType";
import { SideFilters } from "./components/SideFilters";
import { SortDropdown } from "./components/SortDropdown";

type TPage = {
	searchParams: { q: string; page: string };
};

export default function Page({ searchParams }: TPage) {
	const q = searchParams.q;
	const currentPage = Number(searchParams.page || 1);
	const perPage = 8;
	const startIndex = (currentPage - 1) * perPage;
	const endIndex = startIndex + perPage;
	const currentProperties = PropertiesData.slice(startIndex, endIndex);

	return (
		<div>
			<Container>
				<Breadcrumb
					className="mb-[32px] mt-[48px]"
					items={[
						{
							href: "/",
							title: "Home",
						},
						{
							href: ROUTES.listings.path,
							title: "Listings",
						},
						{
							title: "Properties",
						},
					]}
				/>
				<div className="flex flex-col gap-[24px] md:flex-row md:justify-between">
					<div>
						<p className="text-[16px] font-[600] leading-[22px] lg:text-[24px] lg:leading-[32px]">
							Showing listings properties {q && ` for “${q}”`}
						</p>
						<p className="leading-[20px]text-[12px] mt-[4px] text-grey-2 lg:text-[16px] lg:leading-[26px]">
							Explore our curated list of properties
						</p>
					</div>
					<div className="flex items-center">
						<SortDropdown />
						<span className="mx-[12px] h-[24px] w-[1px] bg-grey-3" />
						<ListingType />
					</div>
				</div>

				<div className="mt-[36px] flex flex-col items-start gap-[24px] lg:mt-[52px] lg:flex-row">
					<SideFilters />
					<div>
						<div className="grid w-full flex-1 grid-cols-1 gap-[24px] md:grid-cols-2">
							{currentProperties.map((item, index) => (
								<Link
									key={index}
									href={`${ROUTES.listings.path}/${item.id}`}
									className=""
								>
									<PropertyCard
										data={{
											...item,
											image: `/images/property-${randomNumber(1, 6)}.jpg`,
											price: formatPrice(Number(item.price) * 1000),
										}}
									/>
								</Link>
							))}
						</div>
						<Pagination
							className="my-[24px] md:my-[36px] lg:my-[52px]"
							currentPage={currentPage}
							totalPages={Math.ceil(PropertiesData.length / perPage)}
						/>
					</div>
				</div>
			</Container>
		</div>
	);
}

