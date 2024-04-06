import type { MemberType, SortByType, SortMethodType } from "@/types";

export const sortMemberArrayByStringProperty = (
	unSortedArray: Array<MemberType>,
	sortBy: SortByType,
	sortMethod: SortMethodType
) => {
	if (sortMethod == "ascend")
		return unSortedArray.sort((a, b) =>
			(a[sortBy] as string).localeCompare(b[sortBy] as string)
		);
	else
		return unSortedArray.sort((a, b) =>
			(b[sortBy] as string).localeCompare(a[sortBy] as string)
		);
};

export const sortMemberArrayByNumberProperty = (
	unSortedArray: Array<MemberType>,
	sortBy: SortByType,
	sortMethod: SortMethodType
) => {
	if (sortMethod == "ascend")
		return unSortedArray.sort(
			(a, b) => (a[sortBy] as number) - (b[sortBy] as number)
		);
	else
		return unSortedArray.sort(
			(a, b) => (b[sortBy] as number) - (a[sortBy] as number)
		);
};
