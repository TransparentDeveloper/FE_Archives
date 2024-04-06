import lzString from "lz-string";

export const compressArrayLZW = <T>(origin: T[]): string =>
	lzString.compressToEncodedURIComponent(JSON.stringify(origin));

export const decompressArrayLZW = <T>(encoded: string): Array<T> =>
	JSON.parse(lzString.decompressFromEncodedURIComponent(encoded));
