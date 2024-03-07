import { COLOR } from "@/styles/tokens";
import { $DirectionColumn, $JustifyStart } from "@/styles/utilProperties";
import { ReactNode } from "react";

type HeaderProps = {
	children?: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
	return (
		<header style={$Container}>
			<section style={$ColorSection}>{children}</section>
		</header>
	);
};

const $Container = {
	...$DirectionColumn,
	...$JustifyStart,
	width: "100%",
	height: "25vh"
};

const $ColorSection = {
	width: "100%",
	height: "80%",
	background: COLOR.grayScale[91]
};
