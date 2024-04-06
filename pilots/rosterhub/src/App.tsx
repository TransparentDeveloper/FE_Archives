import { Pagination, Spacer } from "@/components";
import { Header } from "@/components/common/header";
import { URL_PARAM_LOAD_PER_PAGE, URL_PARAM_MEMBER } from "@/constants";
import { useSearchCryptoArray, useSearchSingleValue } from "@/hooks";
import { MemberType } from "@/types";
import { MemberList } from "@/units";
import { FilterSection, MainStructure } from "./units";

const App = () => {
	const { getArray: getMember } =
		useSearchCryptoArray<MemberType>(URL_PARAM_MEMBER);
	const { getValue: getPerPage } = useSearchSingleValue(
		URL_PARAM_LOAD_PER_PAGE
	);
	const perPage = parseInt(getPerPage("10"));
	console.log(perPage);

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
			<MemberList />
			<Spacer
				width="100%"
				height="3rem"
			/>
			<Pagination
				totalPage={Math.floor((getMember().length - 1) / perPage) + 1}
			/>
		</MainStructure>
	);
};

export default App;
