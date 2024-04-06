import { COLOR } from "@/styles";

export const pickBrandBySeed = (seed: number) => {
	const brandColors = Object.values(COLOR.brand);
	const targetIdx = seed % brandColors.length;
	return brandColors[targetIdx];
};
