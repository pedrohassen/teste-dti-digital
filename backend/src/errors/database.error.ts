export class DatabaseError extends Error {
  public statusCode: number
  public errorCode: string

  constructor(statusCode: number, errorCode: string, message: string) {
      super(message)
      this.name = 'DatabaseError'
      this.statusCode = statusCode
      this.errorCode = errorCode
  }
}