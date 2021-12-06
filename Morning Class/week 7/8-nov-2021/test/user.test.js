const request = require('supertest');
const app = require('../index');
const { User } = require('../models');
const { encodePin, createToken } = require('../utils')

const hashedPass = encodePin('123456')
let userId;
let token
beforeAll(async () => {
  const newUser = await User.create({
    name: 'dummy name 2',
    email: 'dummy2@mail.com',
    password: hashedPass
  })
  token = createToken(newUser)
  userId = newUser.dataValues.id;
})

afterAll((done) => {
  User.destroy({ where: {} })
    .then(() => done())
    .catch(err => done(err))
})

describe('Create User', () => {
  test('Success Create User', (done) => {
    request(app)
      .post('/user')
      .send({
        name: 'dummy Name',
        email: 'Dummy2@mail.com',
        password: hashedPass
      })
      .end((err, res) => {
        if (err) {
          done(err)
        }

        const { body, status } = res;
        console.log(body, "<<<<< BODY")
        expect(status).toBe(201)
        expect(body).toHaveProperty('data')
        expect(body.data).toHaveProperty('name', 'dummy Name')
        expect(body.data).toHaveProperty('email', 'Dummy2@mail.com')
        expect(body.data.password).toBeTruthy()
        done()
      })
  })
})

describe('Get Existing User', () => {
  test('succes get user by id', (done) => {
    request(app)
      .get(`/user/${userId}`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('acccess_token', token)
      .end((err, res) => {
        if (err) {
          done(err)
        }

        const { body, status } = res;
        expect(status).toBe(200)
        expect(body).toHaveProperty('data');
        expect(body.data).toHaveProperty('name', 'dummy name 2')
        expect(body.data).toHaveProperty('email', 'dummy2@mail.com')
        expect(body.data.password).toBeTruthy()
        done()
      })
  })
})