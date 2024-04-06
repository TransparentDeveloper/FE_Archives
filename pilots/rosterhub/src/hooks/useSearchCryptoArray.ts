import { compressArrayLZW, decompressArrayLZW } from "@/utils";
import { useSearchParams } from "react-router-dom";

export const useSearchCryptoArray = <T>(urlParamKey: string) => {
	const [params, setParams] = useSearchParams();
	/** 조회 */
	const getArray = (): T[] => {
		const encodedArray = params.get(urlParamKey);
		if (!encodedArray) return [];
		return decompressArrayLZW<T>(encodedArray);
	};
	/** 업데이트 */
	const updateArray = (newArray: T[]) => {
		const encodedArray = compressArrayLZW(newArray);
		params.set(urlParamKey, encodedArray);
		setParams(params);
	};
	return { getArray, updateArray };
};
