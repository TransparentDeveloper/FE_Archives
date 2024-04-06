import { OPTION_MAP } from "@/constants";
import { useSearchSingleValue } from "@/hooks";
import {
	$DirectionColumn,
	$FlexCenter,
	$SizeFull,
	BORDER_RADIUS,
	COLOR,
	FONT_SIZE
} from "@/styles";
import type { OptionType } from "@/types";
import type { CSSProperties } from "react";
import { useState } from "react";

type DropBoxProps = {
	label: string;
	optionArray: Array<OptionType>;
	paramKey: string;
	tabIndex?: number;
};

export const Dropbox = ({
	label,
	optionArray,
	paramKey,
	tabIndex = 0
}: DropBoxProps) => {
	const [isFolding, setIsFolding] = useState(true); // true: 접힌 상태, false: 펼쳐진 상태
	const { getValue, updateValue } = useSearchSingleValue(paramKey);

	let selectedValue: string = getValue(optionArray[0].value);
	// value->label 변환
	if (selectedValue in OPTION_MAP) selectedValue = OPTION_MAP[selectedValue];

	const onUnFold = () => setIsFolding(true);
	const onToggleFolding = () => setIsFolding((prev) => !prev);
	// option 의 위치를 지정하는 함수
	const placeOption = (idx: number) => `${(idx + 1) * 120}%`;

	return (
		<div style={$Container}>
			<div
				style={{ ...$Select }}
				onMouseDown={onToggleFolding}
				onBlur={onUnFold}
				tabIndex={tabIndex}
			>
				<label style={$LabelText}>{label}</label>
				<label style={$SelectedText}>{selectedValue}</label>
			</div>

			{!isFolding &&
				optionArray.map((option, idx) => {
					return (
						<div
							key={idx}
							style={{
								...$Option,
								top: placeOption(idx)
							}}
							onMouseDown={() => {
								updateValue(option.value);
								onUnFold();
							}}
						>
							{option.label}
						</div>
					);
				})}
		</div>
	);
};

const $Container: CSSProperties = {
	position: "relative",
	width: "10rem",
	height: "4.5rem",
	backgroundColor: COLOR.grayScale[21],
	borderRadius: BORDER_RADIUS.middle
};

const $Select: CSSProperties = {
	...$FlexCenter,
	...$DirectionColumn,
	...$SizeFull,
	cursor: "pointer"
};

const $LabelText: CSSProperties = {
	fontSize: FONT_SIZE.tiny,
	color: COLOR.grayScale[70]
};
const $SelectedText: CSSProperties = {
	fontSize: FONT_SIZE.small,
	color: COLOR.grayScale[100]
};
const $Option: CSSProperties = {
	...$FlexCenter,
	...$DirectionColumn,
	...$SizeFull,
	position: "absolute",
	zIndex: 1,
	backgroundColor: COLOR.grayScale[100],
	border: `0.1rem solid ${COLOR.grayScale[21]}`,
	borderRadius: BORDER_RADIUS.small,
	textAlign: "center",
	fontSize: FONT_SIZE.tiny,
	cursor: "pointer"
};
