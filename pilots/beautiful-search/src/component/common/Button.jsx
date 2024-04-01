const Button = ({children, ...rest}) => {
	if (typeof children !== 'string') {
		children === ''
	}
	return (
		<button
			className='w-fit h-fit px-2 py-1 border-solid rounded-md border-black border-2 active:bg-gray-600'
			{...rest}
		>
			{children}
		</button>
	)
}
export default Button
