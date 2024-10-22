import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
	avatar: string;
	name: string;
	position: string;
	className?: string;
};

export const UserCard = ({ avatar, name, position, className }: Props) => {
	return (
		<div
			className={cn(
				"flex flex-col items-center gap-[16px] lg:flex-row lg:gap-[20px]",
				className,
			)}
		>
			<Image
				src={avatar}
				alt={name}
				width={56}
				height={56}
				className="rounded-full"
			/>
			<div className="text-center text-[16px] leading-[24px] lg:text-start">
				<p className="font-[600]">{name}</p>
				<p>{position}</p>
			</div>
		</div>
	);
};
