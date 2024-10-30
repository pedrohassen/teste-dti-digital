export class ApiError extends Error {
  public statusCode: number
  constructor (statusCode: number, message: string) {
      super(message || 'Internal Server Error')
      this.name = 'ApiError'
      this.statusCode = statusCode || 500
  }
}