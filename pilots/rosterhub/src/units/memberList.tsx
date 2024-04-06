import { ColumnBox, MemberCard } from "@/components";
import {
	ULR_PARAM_SORT_BY,
	ULR_PARAM_SORT_METHOD,
	URL_PARAM_MEMBER
} from "@/constants";
import { useSearchCryptoArray, useSearchSingleValue } from "@/hooks";
import type { MemberType, SortByType, SortMethodType } from "@/types";
import { pickBrandBySeed, sortMemberArrayByProperty } from "@/utils";

export const MemberList = () => {
	const { getArray: getMemberArray } =
		useSearchCryptoArray<MemberType>(URL_PARAM_MEMBER);
	const { getValue: getSortBy } = useSearchSingleValue(ULR_PARAM_SORT_BY);
	const { getValue: getSortMethod } = useSearchSingleValue(
		ULR_PARAM_SORT_METHOD
	);

	const memberArray = getMemberArray();
	const sortBy = getSortBy("name");
	const sortMethod = getSortMethod("ascend");
	const sortedMemberArray = sortMemberArrayByProperty(
		memberArray,
		sortBy as SortByType,
		sortMethod as SortMethodType
	);

	return (
		<ColumnBox gap="3rem">
			{sortedMemberArray.map((member) => (
				<MemberCard
					key={member.id}
					id={member.id}
					name={member.name}
					phoneNumberText={member.phoneNumber}
					birthDayText={member.birthday}
					themeColor={pickBrandBySeed(member.id)}
				/>
			))}
		</ColumnBox>
	);
};
