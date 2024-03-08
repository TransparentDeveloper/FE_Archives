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
import { ULR_PARMA_SORT_METHOD } from "./constants";
import { useSearchCryptoArray } from "./hooks/useSearchCryptoArray";
import { COLOR } from "./styles";
import { PersonnelInfoType } from "./types";

function App() {
	const { getArray: getPersonnel } = useSearchCryptoArray<PersonnelInfoType>(
		ULR_PARMA_SORT_METHOD
	);
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
					<Pagination totalPage={10} />
				</ColumnBox>
			</MaxSizeBox>
		</CenterBox>
	);
}

export default App;
