import { Dropbox } from "@/components";
import {
	OPTION_MAP,
	OPTION_PER_PAGE,
	OPTION_SORT_BY,
	OPTION_SORT_METHOD,
	ULR_PARAM_SORT_BY,
	ULR_PARAM_SORT_METHOD,
	URL_PARAM_MEMBER,
	URL_PARAM_PER_PAGE
} from "@/constants";
import {
	usePagiNation,
	useSearchCryptoArray,
	useSearchStringValue
} from "@/hooks";
import { $JustifyEnd } from "@/styles";
import { MemberType } from "@/types";
import type { CSSProperties } from "react";

export const FilterSection = () => {
	const { getValue: getSortBy, updateValue: updateSortBy } =
		useSearchStringValue(ULR_PARAM_SORT_BY);
	const { getValue: getSortMethod, updateValue: updateSortMethod } =
		useSearchStringValue(ULR_PARAM_SORT_METHOD);
	const { getPageInfoOne, setPerPage } = usePagiNation();
	const { getArrayLength } = useSearchCryptoArray<MemberType>(URL_PARAM_MEMBER);

	const sortByLabel = OPTION_MAP[getSortBy("name")];
	const sortMethodLabel = OPTION_MAP[getSortMethod("ascend")];
	const perPageLabel = getPageInfoOne(URL_PARAM_PER_PAGE, 10);

	return (
		<div style={$OptionsContainer}>
			<Dropbox
				label="정렬 기준"
				optionArray={OPTION_SORT_BY}
				paramKey={ULR_PARAM_SORT_BY}
				selectCallback={(key) => {
					updateSortBy(key);
				}}
				selectedValue={sortByLabel}
				tabIndex={0}
			/>
			<Dropbox
				label="정렬 방법"
				optionArray={OPTION_SORT_METHOD}
				paramKey={ULR_PARAM_SORT_METHOD}
				selectCallback={(key) => {
					updateSortMethod(key);
				}}
				selectedValue={sortMethodLabel}
				tabIndex={1}
			/>
			<Dropbox
				label="한번에 보기"
				optionArray={OPTION_PER_PAGE}
				paramKey={URL_PARAM_PER_PAGE}
				selectCallback={(key) => {
					setPerPage(parseInt(key), getArrayLength());
				}}
				selectedValue={perPageLabel}
				tabIndex={2}
			/>
		</div>
	);
};

const $OptionsContainer: CSSProperties = {
	...$JustifyEnd,
	width: "100%",
	height: "fit-content",
	gap: "2rem"
};
