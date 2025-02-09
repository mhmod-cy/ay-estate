import React from "react";

type Props = {
	className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Container = ({ children, ...props }: Props) => {
	return (
		<div
			{...props}
			className={`mx-auto max-w-[1366px] px-4 sm:px-6 lg:px-[27px] ${props.className}`}
		>
			{children}
		</div>
	);
};
