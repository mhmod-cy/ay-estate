"use client";

import { RefObject, useEffect, useMemo, useState } from "react";

export const useOnScreen = (ref: RefObject<HTMLElement>) => {
	const [isIntersecting, setIntersecting] = useState(false);

	const observer = useMemo(() => {
		if (typeof window === "undefined") return null;
		return new window.IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);
	}, []);

	useEffect(() => {
		if (!ref.current) return;
		if (!observer) return;
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [observer, ref]);

	return isIntersecting;
}
