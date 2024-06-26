import { useSearchParams } from "react-router-dom";

/** url 로 관리할 파라미터 중, 단일 값 관련 관리 훅함수 */
export const useSearchStringValue = (paramKey: string) => {
	const [params, setParams] = useSearchParams();
	/**
	 * @param notFound : 값이 없을 경우 반환값
	 */
	const getValue = (notFound: string): string => {
		const value = params.get(paramKey);
		if (!value) return notFound;
		return value;
	};
	const updateValue = (value: string) => {
		const prev = params.get(paramKey);
		if (prev === value) return;
		params.set(paramKey, value);
		setParams(params);
	};

	return { getValue, updateValue };
};
