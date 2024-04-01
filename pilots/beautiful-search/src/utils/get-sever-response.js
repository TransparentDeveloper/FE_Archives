/**
 * @param {number} delay fetching 이 진행되는 시간
 * @returns {Object}
 * @description
 * - delay 가 3 초 미만이라면, keyword 에 대한 검색 결과수를 포함한 객체가 반환됩니다.
 * - 그렇지 않다면, error 객체가 반환됩니다.
 */
export const getServerResponse = (delay) => {
	/** 검색결과 수 (1 건 ~ 200 건) */
	const searchResultNumber = Math.floor(Math.random() * 200 + 1)
	/** 정상 응답 객체 */
	const successResponse = {
		success: true,
		data: searchResultNumber,
	}
	/** 정상 응답 객체 */
	const errorResponse = {
		success: false,
		error: {
			code: -1,
			message: '',
		},
	}
	if (delay >= 10000) {
		errorResponse.error.message = '서버에 알 수 없는 오류가 발생했습니다.'
		errorResponse.error.status = 500
		return errorResponse
	}
	if (delay >= 9000) {
		errorResponse.error.message = '구현되지 않은 기능에 접근하였습니다.'
		errorResponse.error.status = 501
		return errorResponse
	}
	if (delay >= 8000) {
		errorResponse.error.message = 'Gateway 상태가 불량합니다.'
		errorResponse.error.status = 502
		return errorResponse
	}
	if (delay >= 7000) {
		errorResponse.error.message = '요청 시간이 초과되었습니다.'
		errorResponse.error.status = 408
		return errorResponse
	}
	if (delay >= 6000) {
		errorResponse.error.message = '요청한 리소스를 찾을 수 없습니다.'
		errorResponse.error.status = 404
		return errorResponse
	}
	if (delay >= 5000) {
		errorResponse.error.message = '요청한 리소스에 대한 접근은 금지되었습니다.'
		errorResponse.error.status = 403
		return errorResponse
	}
	if (delay >= 4000) {
		errorResponse.error.message = '해당 리소스에 대한 접근 권한이 없습니다.'
		errorResponse.error.status = 401
		return errorResponse
	}
	if (delay >= 3000) {
		errorResponse.error.message = '잘못된 요청입니다.'
		errorResponse.error.status = 400
		return errorResponse
	}
	return successResponse
}
