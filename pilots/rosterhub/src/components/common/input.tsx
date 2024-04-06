import { $AlignCenter, $SizeFit, BORDER_RADIUS, COLOR } from "@/styles";
import type { CSSProperties } from "react";
import { forwardRef } from "react";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ error, ...rest }, ref) => {
		return (
			<div style={$Wrapper}>
				<input
					style={$Input}
					autoComplete="off"
					{...rest}
					ref={ref}
				/>
				{!!error && <p style={$Error}>{error}</p>}
			</div>
		);
	}
);

const $Wrapper: CSSProperties = {
	...$SizeFit,
	position: "relative"
};
const $Input: CSSProperties = {
	...$AlignCenter,
	padding: "2rem",
	width: "20rem",
	minWidth: "20rem",
	height: "4rem",
	border: `1px solid ${COLOR.grayScale[70]}`,
	borderRadius: BORDER_RADIUS.middle
};
const $Error: CSSProperties = {
	position: "absolute",
	top: "110%",
	color: COLOR.system.error
};
