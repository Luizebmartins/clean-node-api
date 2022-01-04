module.exports = class UnathorizedError extends Error {
  constructor() {
    super('Unauthorized')
    this.name = 'MissingParamError'
  }
}
