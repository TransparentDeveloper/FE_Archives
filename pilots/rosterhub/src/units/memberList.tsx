import { ColumnBox, MemberCard } from "@/components";
import {
	ULR_PARAM_SORT_BY,
	ULR_PARAM_SORT_METHOD,
	URL_PARAM_MEMBER
} from "@/constants";
import {
	usePagiNation,
	useSearchCryptoArray,
	useSearchStringValue
} from "@/hooks";
import type { MemberType, SortByType, SortMethodType } from "@/types";
import {
	pickBrandBySeed,
	sortMemberArrayByNumberProperty,
	sortMemberArrayByStringProperty
} from "@/utils";

export const MemberList = () => {
	const { getArray: getMemberArray } =
		useSearchCryptoArray<MemberType>(URL_PARAM_MEMBER);
	const { getValue: getSortBy } = useSearchStringValue(ULR_PARAM_SORT_BY);
	const { getValue: getSortMethod } = useSearchStringValue(
		ULR_PARAM_SORT_METHOD
	);
	const { getPrintedDataIdxRange } = usePagiNation();
	const { startDataIdx, endDataIdx } = getPrintedDataIdxRange();

	const memberArray = getMemberArray();
	const sortBy = getSortBy("name");
	const sortMethod = getSortMethod("ascend");
	const sortedMemberArray =
		sortBy === "id"
			? sortMemberArrayByNumberProperty(
					memberArray,
					sortBy as SortByType,
					sortMethod as SortMethodType
				)
			: sortMemberArrayByStringProperty(
					memberArray,
					sortBy as SortByType,
					sortMethod as SortMethodType
				);
	return (
		<ColumnBox gap="3rem">
			{sortedMemberArray.map((member, idx) => {
				if (idx < startDataIdx || endDataIdx < idx) return;
				return (
					<MemberCard
						key={idx}
						order={idx + 1}
						id={member.id}
						name={member.name}
						phone={member.phone}
						birthday={member.birthday}
						themeColor={pickBrandBySeed(member.id)}
					/>
				);
			})}
		</ColumnBox>
	);
};
