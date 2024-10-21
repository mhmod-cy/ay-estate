"use client";
import { MAX_TABLET_WIDTH } from "@/lib/constants";
import { ROUTES } from "@/routes/routes";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useMedia } from "react-use";
import NAVBAR_DATA from "../../public/data/navbar.json";
import { Container } from "../shared/container";
import { Logo } from "../shared/logo";
import { Button } from "../ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";

type Props = {};

export const Header = (props: Props) => {
	const isTablet = useMedia(`(max-width: ${MAX_TABLET_WIDTH}px)`);

	return (
		<header>
			<Container className="flex items-center justify-between py-3 lg:py-[22px]">
				<Link href={ROUTES.home.path} className="invert">
					<Logo />
				</Link>
				<NavLinksContainer />
				<Link href={ROUTES.contactUs.path} className="hidden lg:block">
					<Button size={isTablet ? "default" : "xl"}>Contact us</Button>
				</Link>
			</Container>
		</header>
	);
};

const NavLinksContainer = () => {
	const isTablet = useMedia(`(max-width: ${MAX_TABLET_WIDTH}px)`);

	if (!isTablet) {
		return (
			<div className="flex flex-1 justify-center gap-[50px] lg:flex-row">
				<NavLinks />
			</div>
		);
	}

	return (
		<>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="ghost" className="p-0 hover:bg-transparent">
						<IoMenu className="min-h-6 min-w-6" />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="w-[300px]">
					<SheetHeader>
						<div className="hidden">
							<SheetTitle>Navbar</SheetTitle>
						</div>
						<SheetDescription className="flex flex-col gap-5 pt-10">
							<NavLinks />
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</>
	);
};

const NavLinks = () => {
	return (
		<>
			{NAVBAR_DATA.map((link) => (
				<Link
					key={link.path}
					href={link.path}
					className="text-[18px] font-[600] text-grey-2 hover:text-primary"
				>
					{link.name}
				</Link>
			))}
		</>
	);
};
