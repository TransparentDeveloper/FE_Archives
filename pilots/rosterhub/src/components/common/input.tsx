import { $AlignCenter, BORDER_RADIUS, COLOR } from "@/styles";
import type { CSSProperties } from "react";
import { forwardRef } from "react";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { ...rest } = props;

	return (
		<input
			style={$Input}
			{...rest}
			ref={ref}
		/>
	);
});

const $Input: CSSProperties = {
	...$AlignCenter,
	padding: "2rem",
	width: "20rem",
	minWidth: "20rem",
	height: "4rem",
	border: `1px solid ${COLOR.grayScale[70]}`,
	borderRadius: BORDER_RADIUS.middle
};
