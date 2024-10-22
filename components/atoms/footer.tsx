import Link from "next/link";
import ContactsData from "../../public/data/contacts.json";
import footerLinks from "../../public/data/footer.json";
import { Container } from "../shared/container";
import { Logo } from "../shared/logo";
import { Copyrights } from "./Copyrights";

export const Footer = () => {
	return (
		<footer className="bg-[#111111] py-[50px] text-white lg:pb-[32px] lg:pt-[100px]">
			<Container>
				<div className="flex flex-col lg:flex-row lg:justify-between">
					<div className="flex flex-col gap-[34px] lg:max-w-[250px]">
						<Logo />
						<div className="text-grey-2">
							<p>{ContactsData.email}</p>
							<p>{ContactsData.phone}</p>
							<p className="mt-[24px]">{ContactsData.address}</p>
						</div>
					</div>
					<hr className="my-[30px] border-[2px] border-[#2E334B] lg:hidden" />
					<div className="grid grid-cols-2 gap-[30px] lg:grid-cols-4">
						{footerLinks.map((section) => (
							// Section
							<div key={section.title} className="mb-[30px] lg:mb-0">
								<h3 className="mb-[16px] text-[16px] font-[700]">
									{section.title}
								</h3>
								<ul className="mb-[20px] space-y-[10px] text-[16px]">
									{section.links.map((link) => (
										<li key={link.href}>
											<Link
												href={link.href}
												className="mb-[8px] text-[14px] font-[400] text-grey-2 hover:text-white"
											>
												{link.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<Copyrights />
			</Container>
		</footer>
	);
};
