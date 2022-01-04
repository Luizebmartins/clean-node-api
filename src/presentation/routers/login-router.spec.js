class LoginRouter {
  route(httRequest) {
    const {email, password} = httRequest.body
    if (!email || !password) {
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

  test('Should return 400 if no passwotd is provided', () => {
    const sut = new LoginRouter()
    const httRequest = {
      body: {
        email: 'any_email@mail.com',
      },
    }
    const httResponse = sut.route(httRequest)
    expect(httResponse.statusCode).toBe(400)
  })
})
