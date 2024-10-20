import Image from "next/image";

type Props = {};

export const Logo = (props: Props) => {
	return (
		<div className="h-[42px] w-auto flex items-center">
			<Image alt="logo" src="/images/AyEstate.svg" width={1000} height={1000} className="w-auto h-auto" />
		</div>
	);
};
