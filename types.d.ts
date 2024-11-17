export type TProperty = {
	id: number;
	title: string;
	image: string;
	location: string;
	price: string;
	description: string;
	client: string;
	date: string;
	tags?: string[];
	features?: {
		type: string;
		bedrooms: number;
		bathrooms: number;
		area: string;
	}
};

export type TSideFilter = {
	id: string;
	label: string;
	type: "multiple";
	options: {
		id: string;
		label: string;
	}[];
	preOptions?: JSX.Element;
	optionRenderer?: (key, option, isSelected, handleChange) => JSX.Element;
};
