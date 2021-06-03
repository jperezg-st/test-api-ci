const chai = require('chai')
const request = require('supertest')("https://test-ci-api-js.herokuapp.com")
const chaiHttp = require('chai-http')
const expect = require('chai').expect
chai.use(chaiHttp)
const nock = require('nock')
// const url = 'http://localhost:3700'

describe('Test #3', () => {
    it('should get status 200', (done) => {
        nock('https://test-ci-api-js.herokuapp.com')
        .intercept('/tasks/', 'DELETE',  {
            "name": "toawo",
            'status': "pending",
            "date_created": "2021-03-2021"
        })
        .reply(200, {
            'status':200,
        })
        done()
    })
})
