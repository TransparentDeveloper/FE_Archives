import type { MemberType, SortByType, SortMethodType } from "@/types";

export const sortMemberArrayByProperty = (
	unSortedArray: Array<MemberType>,
	sortBy: SortByType,
	sortMethod: SortMethodType
) => {
	if (sortMethod == "ascend")
		return unSortedArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
	else return unSortedArray.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
};
