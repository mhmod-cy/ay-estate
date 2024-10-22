"use client";

import { RefObject, useEffect, useMemo, useState } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
	const [isIntersecting, setIntersecting] = useState(false);

	const observer =
		typeof window !== "undefined" &&
		useMemo(
			() =>
				new window.IntersectionObserver(([entry]) =>
					setIntersecting(entry.isIntersecting),
				),
			[ref],
		);

	useEffect(() => {
		if (!ref.current) return;
		if (!observer) return;
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return isIntersecting;
}
