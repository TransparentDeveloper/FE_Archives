import { FORM_BIRTHDAY, FORM_NAME, FORM_PHONE } from "@/constants";
import * as yup from "yup";

export const NAME_RULES = {
	[FORM_NAME]: yup
		.string()
		.required("필수로 작성해야합니다.")
		.max(8, "8자 이하로 작성해주세요.")
};
export const PHONE_RULES = {
	[FORM_PHONE]: yup
		.string()
		.required("필수로 작성해야합니다.")
		.typeError("숫자 형식으로 입력하셔야 해요.")
		.matches(/^[0-9]+$/, "숫자만 입력해주세요.")
		.min(9, "휴대전화 번호가 너무 짧습니다.")
		.max(11, "휴대전화 번호가 너무 깁니다.")
};
export const BIRTHDAY_RULES = {
	[FORM_BIRTHDAY]: yup
		.date()
		.required("필수로 작성해야합니다.")
		.typeError("날짜 형식으로 입력하셔야 해요.")
		.min("1900-01-01", "생년월일을 다시 확인해주세요.")
		.max("2024-01-01", "생년월일을 다시 확인해주세요.")
};
