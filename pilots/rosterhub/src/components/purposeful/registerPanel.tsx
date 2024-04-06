import { URL_PARAM_MEMBER } from "@/constants";
import { useSearchCryptoArray } from "@/hooks/useSearchCryptoArray";
import { $AlignCenter, $SizeFull, BORDER_RADIUS, COLOR } from "@/styles";
import { MemberType } from "@/types";
import { generateIdByTime, getFormattedTodayDate } from "@/utils";
import type { CSSProperties, ChangeEvent } from "react";
import { Button, CenterBox, Input, SymmetricalPaddedBox } from "..";
import { Divider } from "../common/divider";

export const RegisterPanel = () => {
	const { getArray: getMemberArray, updateArray: updateMember } =
		useSearchCryptoArray<MemberType>(URL_PARAM_MEMBER);

	const memberArray = getMemberArray();

	const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const name = (e.target.elements[0] as HTMLInputElement).value;
		const phoneNumber = (e.target.elements[1] as HTMLInputElement).value;
		const birthday = (e.target.elements[2] as HTMLInputElement).value;

		if (!name) {
			alert("이름을 작성해주세요.");
			return;
		}
		if (!phoneNumber) {
			alert("전화번호를 입력해주세요.");
			return;
		}
		if (!birthday) {
			alert("생년월일을 작성해주세요.");
			return;
		}

		const newMemberArray: Array<MemberType> = [...memberArray];
		newMemberArray.push({
			id: generateIdByTime(),
			name,
			birthday,
			phoneNumber,
			createdAt: getFormattedTodayDate()
		});
		updateMember(newMemberArray);
	};

	return (
		<div style={$GridRow}>
			<CenterBox direction="vertical">
				<h3>신규 등록</h3>
			</CenterBox>
			<Divider length="100%" />
			<form onSubmit={onSubmit}>
				<SymmetricalPaddedBox horizontal="1rem">
					<CenterBox direction="vertical">
						<div style={$InputContainer}>
							<Input placeholder="이름" />
							<Input
								placeholder="전화번호"
								type="tel"
							/>
							<Input
								placeholder="생년월일"
								type="date"
							/>
							<Button type="submit"> 등록하기</Button>
						</div>
					</CenterBox>
				</SymmetricalPaddedBox>
			</form>
		</div>
	);
};

const $GridRow: CSSProperties = {
	display: "grid",
	gridTemplateRows: "1fr auto 2fr",
	width: "100%",
	height: "18rem",
	borderRadius: BORDER_RADIUS.big,
	backgroundColor: COLOR.grayScale[100],
	boxShadow: `0.4rem 0 1.8rem rgba(00,00,00,0.4)`,
	padding: "2rem"
};

const $InputContainer: CSSProperties = {
	...$SizeFull,
	...$AlignCenter,
	justifyContent: "space-between"
};
