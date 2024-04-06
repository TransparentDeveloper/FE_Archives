import { FORM_BIRTHDAY, FORM_NAME, FORM_PHONE } from "@/constants";

export type FormValueType = {
	[FORM_NAME]: string;
	[FORM_PHONE]: string;
	[FORM_BIRTHDAY]: Date;
};
