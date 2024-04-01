import {NetworkError} from '../models/network-error'
import {getServerResponse} from './get-sever-response'

/**
 * @description 검색결과 수 패칭함수
 */
export const fetchSearchResultNumber = () => {
	let result = null
	let error = null

	/** 지연시간 (1 초 ~ 10 초) */
	const delayMillSecond = Math.floor(Math.random() * 10 + 1) * 1000

	/**
	 * 서버로 데이터 요청
	 * 요청-응답 과정이 늦어지는 경우를 가정
	 */
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			const response = getServerResponse(delayMillSecond)
			if (response.success) resolve(response)
			else reject(response)
		}, delayMillSecond)
	})
		.then((response) => {
			result = response.data
		})
		.catch((response) => {
			error = new NetworkError(response.error.message, response.error.status)
		})

	return {
		read() {
			if (result === null && error === null) throw promise
			if (!!error) throw error
			if (!!result) return result
			else throw new Error('알 수 없는 오류가 발생했습니다.')
		},
	}
}
