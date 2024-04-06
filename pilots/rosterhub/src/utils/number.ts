/** 호출 시간을 기준으로 id 생성 */
export const generateIdByTime = (): number => {
	const current = new Date().getTime();
	const divide = current / 9070503010737;
	const multiple = Math.floor(divide * 1000000000000);
	const mod = multiple % 10000000;
	return mod;
};
/** 전화번호 파싱 */
export const parsePhoneNumber = (phone: string): string => {
	const length = phone.length;
	// 길이가 9보다 작거나 11보다 큰 경우 유효하지 않은 전화번호입니다.
	if (length < 9 || length > 11)
		throw new Error("유효하지 않은 전화번호입니다.");
	const lastPart = phone.slice(length - 4, length);
	const midPart = phone.slice(Math.ceil((length - 5) / 2), length - 4);
	const firstPart = phone.slice(0, Math.ceil((length - 5) / 2));
	return firstPart + "-" + midPart + "-" + lastPart;
};
