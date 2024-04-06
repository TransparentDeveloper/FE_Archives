import { PAGINATION_UNIT } from "@/constants";
import { usePagiNation } from "@/hooks";
import { $FlexCenter, BORDER_RADIUS, COLOR } from "@/styles";
import { CSSProperties } from "react";

type PaginationProps = {
	totData: number;
};

export const Pagination = ({ totData }: PaginationProps) => {
	const { getPageInfoAll, setCurPage } = usePagiNation();
	const { curPage, totPage } = getPageInfoAll(totData);

	const onClickFirst = () => {
		setCurPage(1);
	};
	const onClickLast = () => {
		setCurPage(totPage);
	};
	const onClickBefore = () => {
		if (curPage == 1) return;
		setCurPage(curPage - 1);
	};
	const onClickAfter = () => {
		if (curPage == totPage) return;
		setCurPage(curPage + 1);
	};

	const pageAddend =
		Math.floor((curPage - 1) / PAGINATION_UNIT) * PAGINATION_UNIT;
	if (totData !== 0)
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
					length: Math.min(totPage, PAGINATION_UNIT)
				}).map((_, idx) => {
					const pageNumber = idx + pageAddend + 1;
					if (totPage < pageNumber) return <></>;
					return (
						<h2
							key={idx}
							style={{
								...$CommonText,
								...(pageNumber === curPage && $ActiveText)
							}}
							onClick={() => {
								setCurPage(pageNumber);
							}}
						>
							{pageNumber}
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
