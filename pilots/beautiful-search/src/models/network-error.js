export class NetworkError extends Error {
	constructor(message, statusCode) {
		super(message)
		this.name = this.constructor.name
		this.statusCode = statusCode
	}
}
