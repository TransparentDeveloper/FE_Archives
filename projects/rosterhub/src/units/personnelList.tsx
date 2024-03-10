import { ColumnBox, PersonnelCard } from "@/components";
import { URL_PARAM_PERSONNEL } from "@/constants";
import { useSearchCryptoArray } from "@/hooks";
import { COLOR } from "@/styles";
import type { PersonnelInfoType } from "@/types";

export const PersonnelList = () => {
	const { getArray: getPersonnel } =
		useSearchCryptoArray<PersonnelInfoType>(URL_PARAM_PERSONNEL);

	return (
		<ColumnBox gap="3rem">
			{getPersonnel().map((user) => (
				<PersonnelCard
					key={user.id}
					id={user.id}
					name={user.name}
					phoneNumberText={user.phoneNumber}
					birthDayText={user.birthDay}
					themeColor={COLOR.brand.marieRouge}
				/>
			))}
		</ColumnBox>
	);
};
