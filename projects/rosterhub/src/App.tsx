import {
	CenterBox,
	ColumnBox,
	MaxSizeBox,
	Pagination,
	RegisterPanel,
	Spacer
} from "./components";
import { PersonnelCard } from "./components/common";
import { Header } from "./components/common/header";
import { URL_PARAM_LOAD_PER_PAGE, URL_PARAM_PERSONNEL } from "./constants";
import { useSearchSingleValue } from "./hooks";
import { useSearchCryptoArray } from "./hooks/useSearchCryptoArray";
import { COLOR } from "./styles";
import { PersonnelInfoType } from "./types";

const App = () => {
	const { getArray: getPersonnel } =
		useSearchCryptoArray<PersonnelInfoType>(URL_PARAM_PERSONNEL);
	const { getValue: getLoadPerPage } = useSearchSingleValue(
		URL_PARAM_LOAD_PER_PAGE
	);

	console.log(getPersonnel().length);

	return (
		<CenterBox
			height="100%"
			direction="both"
		>
			<MaxSizeBox maxWidth="1080px">
				<Header>
					<RegisterPanel />
				</Header>
				<Spacer
					width="100%"
					height="10rem"
				/>
				<ColumnBox gap="5rem">
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
					<Pagination totalPage={Math.floor(getPersonnel().length / 21) + 1} />
				</ColumnBox>
			</MaxSizeBox>
		</CenterBox>
	);
};

export default App;
