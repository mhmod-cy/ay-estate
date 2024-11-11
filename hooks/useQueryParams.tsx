import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryParams = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const urlSearchParams = new URLSearchParams(searchParams?.toString());

	function setQueryParams(params: Record<string, string | null>) {
		Object.entries(params).forEach(([key, value]) => {
			if (value === undefined || value === null) {
				urlSearchParams.delete(key);
			} else {
				urlSearchParams.set(key, String(value));
			}
		});

		// check if the current value is the same of the coming value
		if (searchParams.toString() === urlSearchParams.toString()) return;
		console.log("urlSearchParams", params);
		const search = urlSearchParams.toString();
		const query = search ? `?${search}` : "";
		router.replace(`${pathname}${query}`, { scroll: false });
	}

	const removeQueryParams = (keys: string[]) => {
		keys.forEach((key) => urlSearchParams.delete(key));
		const search = urlSearchParams.toString();
		const query = search ? `?${search}` : "";
		// replace since we don't want to build a history
		router.replace(`${pathname}${query}`, { scroll: false });
	};

	// Convert URLSearchParams to object
	const queryParams: Record<string, string | null> = {};
	urlSearchParams.forEach((value, key) => {
		queryParams[key] = value;
	});

	return { queryParams, setQueryParams, removeQueryParams };
};
