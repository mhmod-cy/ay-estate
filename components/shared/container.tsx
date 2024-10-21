type Props = {
	className?: any;
} & React.HTMLAttributes<HTMLDivElement>;

export const Container = ({ children, ...props }: Props) => {
	return (
		<div
			{...props}
			className={`mx-auto max-w-[1312px] px-4 sm:px-6 lg:px-0 ${props.className}`}
		>
			{children}
		</div>
	);
};
