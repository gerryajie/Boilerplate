const request = require('supertest');
const app = require('../index');
const { User, sequelize } = require('../models');
const { queryInterface } = sequelize;
const { encodePin } = require('../utils')

const hashedPass = encodePin('123456')
console.log(hashedPass, "<<<<< HASHED")

beforeAll(async () => {
})

afterAll(async () => {
  await queryInterface.bulkDelete("Users");
})

describe('Create User', () => {
  test('Success Create User', (done) => {
    request(app)
      .post('/user')
      .send({
        name: 'dummy Name',
        email: 'Dummy@mail.com',
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
        expect(body.data).toHaveProperty('email', 'Dummy@mail.com')
        expect(body.data.password).toBeTruthy()
        done()
      })
  })
})