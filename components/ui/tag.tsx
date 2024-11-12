import React from "react";

type Props = {
	children?: React.ReactNode;
};

export const Tag = ({ children }: Props) => {
	return (
		<div className="bg-light-grey px-[8px] py-[4px] text-[14px] font-[600] capitalize leading-[21px]">
			{children}
		</div>
	);
};
