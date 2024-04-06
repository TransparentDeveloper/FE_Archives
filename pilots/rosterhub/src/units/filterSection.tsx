import { Dropbox } from "@/components";
import {
	OPTION_PER_PAGE,
	OPTION_SORT_BY,
	OPTION_SORT_METHOD,
	ULR_PARAM_SORT_BY,
	ULR_PARAM_SORT_METHOD,
	URL_PARAM_LOAD_PER_PAGE
} from "@/constants";
import { $JustifyEnd } from "@/styles";
import type { CSSProperties } from "react";

export const FilterSection = () => {
	return (
		<div style={$OptionsContainer}>
			<Dropbox
				label="정렬 기준"
				optionArray={OPTION_SORT_BY}
				paramKey={ULR_PARAM_SORT_BY}
				tabIndex={0}
			/>
			<Dropbox
				label="정렬 방법"
				optionArray={OPTION_SORT_METHOD}
				paramKey={ULR_PARAM_SORT_METHOD}
				tabIndex={0}
			/>
			<Dropbox
				label="한번에 보기"
				optionArray={OPTION_PER_PAGE}
				paramKey={URL_PARAM_LOAD_PER_PAGE}
				tabIndex={0}
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
