import { Container } from "../shared/container";
import { Copyrights } from "./Copyrights";

type Props = {};

export const Footer = (props: Props) => {
	return (
		<footer className="bg-black-2 py-[50px] text-white lg:pb-[32px] lg:pt-[100px]">
			<Container>
				Footer
				<Copyrights />
			</Container>
		</footer>
	);
};
