import type { OptionType } from "@/types";

export const OPTION_SORT_BY: Array<OptionType> = [
	{
		label: "이름 순",
		value: "name"
	},
	{
		label: "아이디 순",
		value: "id"
	},
	{
		label: "생년월일 순",
		value: "birthday"
	}
] as const;

export const OPTION_SORT_METHOD: Array<OptionType> = [
	{
		label: "오름차순",
		value: "ascend"
	},
	{
		label: "내림차순",
		value: "descend"
	}
] as const;

export const OPTION_MAP: { [key in string]: string } = {};
OPTION_SORT_BY.map((object) => {
	const [label, value] = Object.values(object);
	OPTION_MAP[label] = value;
	OPTION_MAP[value] = label;
});
OPTION_SORT_METHOD.map((object) => {
	const [label, value] = Object.values(object);
	OPTION_MAP[label] = value;
	OPTION_MAP[value] = label;
});

export const OPTION_PER_PAGE: Array<OptionType> = [
	{
		label: "20",
		value: "20"
	},
	{
		label: "50",
		value: "50"
	}
] as const;
