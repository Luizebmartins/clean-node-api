class LoginRouter {
  route(httRequest) {
    if (!httRequest.body.email) {
      return {
        statusCode: 400,
      }
    }
  }
}

describe('Login router', () => {
  test('Should return 400 if no emails is provided', () => {
    const sut = new LoginRouter()
    const httRequest = {
      body: {
        password: 'any_password',
      },
    }
    const httResponse = sut.route(httRequest)
    expect(httResponse.statusCode).toBe(400)
  })
})
