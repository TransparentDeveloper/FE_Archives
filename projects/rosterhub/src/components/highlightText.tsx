import { COLOR, FONT_SIZE } from "@/styles";

type HighlightTextProps = {
	color?: string;
	fontSize?: string;
	children: string;
};

export const HighlightText = ({
	color = COLOR.grayScale[100],
	fontSize = FONT_SIZE.middle,
	children,
	...rest
}: HighlightTextProps) => {
	return (
		<span
			style={{ color, fontSize }}
			{...rest}
		>
			{children}
		</span>
	);
};
