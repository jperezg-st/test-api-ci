const chai = require('chai')
const request = require('supertest')("https://test-ci-api-js.hsrokuapp.com")
const chaiHttp = require('chai-http')
const expect = require('chai').expect
chai.use(chaiHttp)
const nock = require('nock')
// const url = 'http://localhost:3700'

describe('Test #2', () => {
    it('should get status 200', (done) => {
        nock('https://test-ci-api-js.herokuapp.com')
        .get('/tasks')
        .reply(200,  {
            "name": "toawo",
            'status': "pending",
            "date_created": "2021-03-2021"
        })
    request
        .get('/tasks')
        .end((err, res) => {
            expect(res.body).has.property("name");
            done()
        })
    })
})

