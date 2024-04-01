import Button from './common/Button'

const ErrorFallback = ({error, resetErrorBoundary}) => {
	return (
		<div className='flex flex-col justify-center items-center gap-4'>
			<h4>{error.statusCode && error.statusCode}</h4>
			<p>{error.message && error.message}</p>
			<Button onClick={resetErrorBoundary}>페이지 새로고침</Button>
		</div>
	)
}

export default ErrorFallback
