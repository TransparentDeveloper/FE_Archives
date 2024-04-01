import {useSearchParams} from 'react-router-dom'
import {URL_PARAM} from '../constants/url-param'

const SearchResult = ({fetchResult}) => {
	const [params] = useSearchParams()
	const result = fetchResult.read()

	if (!params.has(URL_PARAM.KEYWORD)) return <></>

	const KEYWORD_MAX_LENGTH = 6 // 문자열 최대 출력 길이
	let keyword = params.get(URL_PARAM.KEYWORD)
	/** 검색어가 너무 긴 경우, 가장 앞 6자리 + '...' 를 출력합니다. */
	if (keyword.length > KEYWORD_MAX_LENGTH)
		keyword = keyword.substring(0, KEYWORD_MAX_LENGTH) + '...'

	return (
		<div className='flex items-center justify-center'>
			<p>'{keyword}' 검색어에 대해</p>
			&nbsp;
			<p className='text-purple-500 text-2xl'>{result && result}</p>
			<p> (건) 의 결과를 찾았습니다.!</p>
		</div>
	)
}

export default SearchResult
