import {
	FORM_BIRTHDAY,
	FORM_NAME,
	FORM_PHONE,
	URL_PARAM_MEMBER
} from "@/constants";
import { useSearchCryptoArray } from "@/hooks/useSearchCryptoArray";
import { BIRTHDAY_RULES, NAME_RULES, PHONE_RULES } from "@/libs/yup/rules";
import { $AlignCenter, $SizeFull, BORDER_RADIUS, COLOR } from "@/styles";
import { FormValueType, MemberType } from "@/types";
import { generateIdByTime, getFormattedDate } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import type { CSSProperties } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button, CenterBox, Input, SymmetricalPaddedBox } from "..";
import { Divider } from "../common/divider";

const schema = yup.object().shape({
	...NAME_RULES,
	...PHONE_RULES,
	...BIRTHDAY_RULES
});

export const RegisterPanel = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onChange"
	});
	const { appendElement: appendElement } =
		useSearchCryptoArray<MemberType>(URL_PARAM_MEMBER);

	const onRegisterMember = (
		data: Pick<
			FormValueType,
			typeof FORM_NAME | typeof FORM_PHONE | typeof FORM_BIRTHDAY
		>
	) => {
		appendElement({
			id: generateIdByTime(),
			name: data.name!,
			phone: data.phone!,
			birthday: getFormattedDate(data.birthday!),
			createdAt: getFormattedDate(new Date())
		});
		reset();
	};

	return (
		<div style={$GridRow}>
			<CenterBox direction="vertical">
				<h3>신규 등록</h3>
			</CenterBox>
			<Divider length="100%" />
			<form onSubmit={handleSubmit(onRegisterMember)}>
				<SymmetricalPaddedBox horizontal="1rem">
					<CenterBox direction="vertical">
						<div style={$InputContainer}>
							<Input
								placeholder="이름"
								{...register(FORM_NAME)}
								error={errors[FORM_NAME]?.message}
							/>
							<Input
								placeholder="전화번호"
								type="tel"
								{...register(FORM_PHONE)}
								error={errors[FORM_PHONE]?.message}
							/>
							<Input
								placeholder="생년월일"
								type="date"
								{...register(FORM_BIRTHDAY)}
								error={errors[FORM_BIRTHDAY]?.message}
							/>
							<Button> 등록하기</Button>
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
	paddingTop: "2rem",
	paddingBottom: "2rem",
	paddingLeft: "5rem",
	paddingRight: "5rem"
};

const $InputContainer: CSSProperties = {
	...$SizeFull,
	...$AlignCenter,
	justifyContent: "space-between"
};
