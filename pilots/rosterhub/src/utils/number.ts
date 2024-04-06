/** 호출 시간을 기준으로 id 생성 */
export const generateIdByTime = () => {
	const current = new Date().getTime();
	const divide = current / 9070503010737;
	const multiple = Math.floor(divide * 1000000000000);
	const mod = multiple % 1000000;
	return mod;
};
