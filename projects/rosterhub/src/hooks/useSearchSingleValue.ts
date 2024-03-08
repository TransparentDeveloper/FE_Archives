import { useSearchParams } from "react-router-dom";

/** url 로 관리할 파라미터 중, 단일 값 관련 관리 훅함수 */
export const useSearchSingleValue = (paramKey: string) => {
	const [params, setParams] = useSearchParams();

	const getValue = (): string => {
		const value = params.get(paramKey);
		if (!value) return "";
		return value;
	};
	const updateValue = (value: string) => {
		params.set(paramKey, value);
		setParams(params);
	};
	return { getValue, updateValue };
};
