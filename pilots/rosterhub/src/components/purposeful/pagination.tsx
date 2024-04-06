import { URL_PARAM_LOAD_PER_PAGE, URL_PARAM_PAGE } from "@/constants";
import { useSearchSingleValue } from "@/hooks";
import { $FlexCenter, BORDER_RADIUS, COLOR } from "@/styles";
import { CSSProperties } from "react";

type PaginationProps = {
	totalPage: number;
};

export const Pagination = ({ totalPage }: PaginationProps) => {
	const { getValue: getCurPage, updateValue: updateCurPage } =
		useSearchSingleValue(URL_PARAM_PAGE);
	const { getValue: getPerPage } = useSearchSingleValue(
		URL_PARAM_LOAD_PER_PAGE
	);
	const perPage = parseInt(getPerPage("10"));

	if (totalPage == 0) return;
	let curPageString = getCurPage("1");
	const curPageNumber = parseInt(curPageString);
	const addendPagination = Math.floor((curPageNumber - 1) / perPage) * perPage;

	const onClickFirst = () => {
		updateCurPage("1");
	};
	const onClickBefore = () => {
		if (curPageNumber == 1) return;
		updateCurPage((curPageNumber - 1).toString());
	};
	const onClickAfter = () => {
		if (curPageNumber == totalPage) return;
		updateCurPage((curPageNumber + 1).toString());
	};
	const onClickLast = () => {
		updateCurPage(totalPage.toString());
	};

	return (
		<div style={$Container}>
			<h2
				style={$CommonText}
				onClick={onClickFirst}
			>
				≪
			</h2>

			<h2
				style={$CommonText}
				onClick={onClickBefore}
			>
				＜
			</h2>

			{Array.from({
				length: Math.min(totalPage, perPage)
			}).map((_, idx) => {
				const pageNumber = idx + addendPagination + 1;
				const pageNumberString = pageNumber.toString();
				if (totalPage < pageNumber) return <></>;
				return (
					<h2
						key={idx}
						style={{
							...$CommonText,
							...(pageNumberString === curPageString && $ActiveText)
						}}
						onClick={() => {
							updateCurPage(pageNumberString);
						}}
					>
						{pageNumberString}
					</h2>
				);
			})}
			<h2
				style={$CommonText}
				onClick={onClickAfter}
			>
				＞
			</h2>
			<h2
				style={$CommonText}
				onClick={onClickLast}
			>
				≫
			</h2>
		</div>
	);
};

const $Container: CSSProperties = {
	...$FlexCenter,
	gap: "2rem",
	width: "100%",
	height: "fit-content",
	padding: "1rem"
};

const $CommonText: CSSProperties = {
	color: COLOR.grayScale[77],
	cursor: "pointer",
	width: "3rem",
	textAlign: "center"
};
const $ActiveText: CSSProperties = {
	color: COLOR.grayScale[0],
	backgroundColor: COLOR.grayScale[70],
	borderRadius: BORDER_RADIUS.round
};
