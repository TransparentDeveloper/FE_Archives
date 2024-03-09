import { ColumnBox, Pagination, PersonnelCard, Spacer } from "@/components";
import { Header } from "@/components/common/header";
import { URL_PARAM_PERSONNEL } from "@/constants";
import { useSearchCryptoArray } from "@/hooks";
import { COLOR } from "@/styles";
import { PersonnelInfoType } from "@/types";
import { FilterSection, MainStructure } from "./units";

const App = () => {
	const { getArray: getPersonnel } =
		useSearchCryptoArray<PersonnelInfoType>(URL_PARAM_PERSONNEL);

	return (
		<MainStructure>
			<Header />
			<Spacer
				width="100%"
				height="2rem"
			/>
			<FilterSection />
			<Spacer
				width="100%"
				height="2rem"
			/>
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
				<Pagination
					totalPage={Math.floor((getPersonnel().length - 1) / 20) + 1}
				/>
			</ColumnBox>
		</MainStructure>
	);
};

export default App;
