import { Logo, Pagination, RegisterPanel, Spacer } from "@/components";
import { URL_PARAM_MEMBER } from "@/constants";
import { useSearchCryptoArray } from "@/hooks";
import { MemberType } from "@/types";
import { MemberList } from "@/units";
import { FilterSection, MainStructure } from "./units";

const App = () => {
	const { getArrayLength: getMemberArrayLength } =
		useSearchCryptoArray<MemberType>(URL_PARAM_MEMBER);

	return (
		<MainStructure>
			<Logo />
			<RegisterPanel />
			<FilterSection />
			<MemberList />
			<Spacer
				width="100%"
				height="1rem"
			/>
			<Pagination totData={getMemberArrayLength()} />
		</MainStructure>
	);
};

export default App;
