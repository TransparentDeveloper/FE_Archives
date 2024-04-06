import { ColumnBox, MemberCard } from "@/components";
import {
	ULR_PARAM_SORT_BY,
	ULR_PARAM_SORT_METHOD,
	URL_PARAM_LOAD_PER_PAGE,
	URL_PARAM_MEMBER,
	URL_PARAM_PAGE
} from "@/constants";
import { useSearchCryptoArray, useSearchSingleValue } from "@/hooks";
import type { MemberType } from "@/types";
import { pickBrandBySeed } from "@/utils";
import { useSearchParams } from "react-router-dom";

export const MemberList = () => {
	const { getArray: getMember } =
		useSearchCryptoArray<MemberType>(URL_PARAM_MEMBER);

	console.log(getMember());

	const [parms, setParms] = useSearchParams();

	const { getValue: getPage, updateValue: updatePage } =
		useSearchSingleValue(URL_PARAM_PAGE);
	const { getValue: getSortBy, updateValue: updateSortBy } =
		useSearchSingleValue(ULR_PARAM_SORT_BY);
	const { getValue: getSortMethod, updateValue: updateSortMethod } =
		useSearchSingleValue(ULR_PARAM_SORT_METHOD);
	const { getValue: getPerPage, updateValue: updatePerPage } =
		useSearchSingleValue(URL_PARAM_LOAD_PER_PAGE);

	const page = parseInt(getPage("1"));
	const perPage = parseInt(getPerPage("20"));
	const sortBy = getSortBy("name");
	const sortMethod = getSortMethod("ascend");

	// 이름 순 정렬

	// 생년월일 순 정렬

	// 생성시간 순 정렬

	// 페이지 한번 보여질 만큼 자르기

	const printedMemberArray = getMember();

	return (
		<ColumnBox gap="3rem">
			{getMember().map((member) => (
				<MemberCard
					key={member.id}
					id={member.id}
					name={member.name}
					phoneNumberText={member.phoneNumber}
					birthDayText={member.birthDay}
					themeColor={pickBrandBySeed(member.id)}
				/>
			))}
		</ColumnBox>
	);
};
