"use client";

import { useOnScreen } from "@/hooks/useOnScreen";
import { useEffect, useRef, useState } from "react";

type Props = {
	number: number;
	timeout?: number;
};

export const Counter = ({ number, timeout = 2000 }: Props) => {
	const ref = useRef<HTMLSpanElement>(null);

	const isInViewport = useOnScreen(ref);
	const [currentNumber, setCurrentNumber] = useState(0);

	useEffect(() => {
		if (!isInViewport) return;

		const intervalId = setInterval(() => {
			setCurrentNumber((prev) => {
				if (prev >= number) {
					clearInterval(intervalId);
					return number;
				}
				return prev + 1;
			});
		}, timeout / number);

		return () => clearInterval(intervalId);
	}, [isInViewport, number, timeout]);

	return <span ref={ref}>{currentNumber}</span>;
};
