import Image from "next/image";

export const Logo = () => {
	return (
		<div className="flex h-[42px] w-auto items-center">
			<Image
				alt="logo"
				src="/images/AyEstate.svg"
				width={1000}
				height={1000}
				className="h-auto w-auto"
			/>
		</div>
	);
};
