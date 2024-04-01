import {Suspense} from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {useNavigate, useSearchParams} from 'react-router-dom'
import ErrorFallback from './component/ErrorFallback'
import LoadingFallback from './component/LoadingFallback'
import SearchResult from './component/SearchResult'
import Button from './component/common/Button'
import {URL_PARAM} from './constants/url-param'
import {fetchSearchResultNumber} from './utils/search-fetch'

const App = () => {
	const [params, setParams] = useSearchParams()
	const navigate = useNavigate()
	const keyword = params.get(URL_PARAM.KEYWORD)

	const onSearch = (e) => {
		e.preventDefault()
		const inputValue = e.target.elements[0].value
		setParams({[URL_PARAM.KEYWORD]: inputValue})
	}

	return (
		<div className='w-screen h-screen flex justify-center items-center flex-col gap-16'>
			<h3>🌈 아름다운 검색 사이트 📄</h3>
			<form
				onSubmit={onSearch}
				className='w-full h-fit flex justify-center gap-5'
			>
				<input className='text-center text-gray-500 rounded-md' />
				<Button type='submit'>search</Button>
			</form>
			<div className='w-full h-64 flex flex-col justify-start items-center'>
				{keyword && (
					<ErrorBoundary
						FallbackComponent={ErrorFallback}
						onReset={() => {
							navigate('/')
						}}
					>
						<Suspense fallback={<LoadingFallback />}>
							<SearchResult fetchResult={fetchSearchResultNumber()} />
						</Suspense>
					</ErrorBoundary>
				)}
			</div>
		</div>
	)
}

export default App
