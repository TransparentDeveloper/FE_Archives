import { $AlignCenter, $FlexCenter, $JustifyCenter, $SizeFull } from "@/styles";
import type { CSSProperties, ReactNode } from "react";

type CenterBoxProps = {
	width?: string;
	height?: string;
	backgroundColor?: string;
	direction?: "horizontal" | "vertical" | "both";
	children: ReactNode;
};

export const CenterBox = ({
	width = "100%",
	height = "100%",
	backgroundColor = "transparent",
	direction = "both",
	children,
	...rest
}: CenterBoxProps) => {
	return (
		<div
			style={{
				...$SizeFull,
				...$PositionRelative,
				width,
				height,
				backgroundColor,
				...(direction === "horizontal" && $HorizontalCenterBox),
				...(direction === "vertical" && $VerticalCenterBox),
				...(direction === "both" && $BiDirectionalCenterBox)
			}}
			{...rest}
		>
			{children}
		</div>
	);
};

const $PositionRelative: CSSProperties = {
	position: "relative"
};
const $HorizontalCenterBox = {
	...$JustifyCenter
};
const $VerticalCenterBox = {
	...$AlignCenter
};
const $BiDirectionalCenterBox = {
	...$FlexCenter
};
