const MissingParamError = require('./missing-param-error')
const UnathozeidError = require('./unathorized-error')
const ServerError = require('./server-error')

module.exports = class HttpResponse {
  static badRequest(paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName),
    }
  }

  static serverError() {
    return {
      statusCode: 500,
      body: new ServerError(),
    }
  }

  static unathorizedError() {
    return {
      statusCode: 401,
      body: new UnathozeidError(),
    }
  }

  static ok(data) {
    return {
      statusCode: 200,
      body: data,
    }
  }
}
