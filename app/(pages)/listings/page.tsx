import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/container";
import { ROUTES } from "@/routes/routes";

export default function Page() {
	return (
		<div>
			<Container>
				<div className="mb-[32px] mt-[48px]">
					<Breadcrumb
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
				</div>
			</Container>
		</div>
	);
}
