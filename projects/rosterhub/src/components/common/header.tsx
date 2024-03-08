import { ColumnBox, Logo } from "@/components";
import type { ReactNode } from "react";
type HeaderProps = {
	children?: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
	return (
		<ColumnBox
			height="fit-content"
			gap="2rem"
		>
			<Logo />
			{children}
		</ColumnBox>
	);
};
