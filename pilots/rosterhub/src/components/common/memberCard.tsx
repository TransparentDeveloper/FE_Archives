import { CenterBox, KeyValueTexts } from "@/components";
import {
	$AlignCenter,
	$SizeFull,
	BORDER_RADIUS,
	COLOR,
	FONT_SIZE
} from "@/styles";
import { parsePhoneNumber } from "@/utils";
import type { CSSProperties } from "react";

type MemberCardProps = {
	order: number;
	id: number;
	name: string;
	phone: string;
	birthday: string;
	themeColor: string;
};

export const MemberCard = ({
	order,
	id,
	name,
	phone,
	birthday,
	themeColor
}: MemberCardProps) => {
	return (
		<div style={$Container}>
			<div style={{ ...$IdentificationContainer, backgroundColor: themeColor }}>
				<h1 style={$IdHazyText}>#{order}</h1>
				<CenterBox>
					<h4 style={$IdCompleteText}>#{id}</h4>
				</CenterBox>
			</div>
			<div style={$MemberWrapper}>
				<KeyValueTexts
					keyText={"이름"}
					valueText={name}
					width="30%"
				/>
				<KeyValueTexts
					keyText={"전화번호"}
					valueText={parsePhoneNumber(phone)}
					width="30%"
				/>
				<KeyValueTexts
					keyText={"생년월일"}
					valueText={birthday}
					width="30%"
				/>
			</div>
		</div>
	);
};

const $Container: CSSProperties = {
	width: "100%",
	height: "15rem",
	borderRadius: BORDER_RADIUS.big,
	border: `0.3rem solid ${COLOR.grayScale[91]}`,
	backgroundColor: COLOR.grayScale[100],

	display: "grid",
	gridTemplateColumns: "2fr 8fr",
	overflow: "hidden"
};

const $IdentificationContainer: CSSProperties = {
	position: "relative",
	overflow: "hidden"
};

const $IdHazyText: CSSProperties = {
	position: "absolute",
	fontSize: "8rem",
	color: "rgba(230, 230, 230, 0.5)",
	top: "-18%",
	left: "-5%",
	textAlign: "center"
};

const $IdCompleteText: CSSProperties = {
	fontSize: FONT_SIZE.big,
	color: COLOR.grayScale[28]
};

const $MemberWrapper: CSSProperties = {
	...$SizeFull,
	...$AlignCenter,
	justifyContent: "space-around",
	padding: "2rem"
};
