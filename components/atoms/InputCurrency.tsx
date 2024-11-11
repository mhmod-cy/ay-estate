import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

type InputCurrencyProps = React.ComponentProps<typeof Input> & {
	className?: string;
};

export const InputCurrency = ({ className, ...props }: InputCurrencyProps) => {
	return (
		<div
			className={`flex items-center rounded-[12px] border border-border ${className}`}
		>
			<Select>
				<SelectTrigger className="w-[180px] border-none shadow-none">
					<SelectValue placeholder="Currency" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="usd">USD</SelectItem>
				</SelectContent>
			</Select>
			<Input
				type="number"
				className="border-none shadow-none focus-visible:ring-0 focus-visible:ring-border"
				{...props}
			/>
		</div>
	);
};
