import { URL_PARAM_CUR_PAGE, URL_PARAM_PER_PAGE } from "@/constants";
import { useSearchParams } from "react-router-dom";

export const usePagiNation = () => {
	const [params, setParams] = useSearchParams();

	const getPageInfoOne = (paramKey: string, notFound: number): number => {
		if (!!!params.has(paramKey)) return notFound;
		else return parseInt(params.get(paramKey)!);
	};
	const setCurPage = (curPage: number) => {
		const prev = getPageInfoOne(URL_PARAM_CUR_PAGE, 1);
		if (prev === curPage) return;
		params.set(URL_PARAM_CUR_PAGE, curPage.toString());
		setParams(params);
	};
	const setPerPage = (perPage: number, totData: number) => {
		const curPage = getPageInfoOne(URL_PARAM_CUR_PAGE, 1);
		const totPage = Math.floor((totData - 1) / perPage) + 1;
		if (curPage > totPage) params.set(URL_PARAM_CUR_PAGE, totPage.toString());
		params.set(URL_PARAM_PER_PAGE, perPage.toString());
		setParams(params);
	};

	/**
	 * @param {number} totData 전체 데이터의 갯수
	 */
	const getPageInfoAll = (totData: number) => {
		const perPage = getPageInfoOne(URL_PARAM_PER_PAGE, 10);
		const totPage = Math.floor((totData - 1) / perPage) + 1;
		let curPage = getPageInfoOne(URL_PARAM_CUR_PAGE, 1);
		if (curPage > totPage) curPage = totPage;
		return { curPage, perPage, totPage };
	};
	const getPrintedDataIdxRange = () => {
		const curPage = getPageInfoOne(URL_PARAM_CUR_PAGE, 1);
		const perPage = getPageInfoOne(URL_PARAM_PER_PAGE, 10);
		const startDataIdx = perPage * (curPage - 1);
		const endDataIdx = perPage * curPage - 1;
		return { startDataIdx, endDataIdx };
	};

	return {
		getPageInfoOne,
		setCurPage,
		setPerPage,
		getPageInfoAll,
		getPrintedDataIdxRange
	};
};
