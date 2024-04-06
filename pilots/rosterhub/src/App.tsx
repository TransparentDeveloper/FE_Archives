import { Pagination, Spacer } from "@/components";
import { Header } from "@/components/common/header";
import { URL_PARAM_MEMBER } from "@/constants";
import { useSearchCryptoArray } from "@/hooks";
import { MemberType } from "@/types";
import { MemberList } from "@/units";
import { FilterSection, MainStructure } from "./units";

const App = () => {
	const { getArray: getMember } =
		useSearchCryptoArray<MemberType>(URL_PARAM_MEMBER);

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
			<Pagination totalPage={Math.floor((getMember().length - 1) / 20) + 1} />
		</MainStructure>
	);
};

export default App;
