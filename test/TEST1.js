const request = require('supertest')("https://test-ci-api-js.herokuapp.com")
const expect = require('chai').expect
const nock = require('nock')

describe('Test #1', () => {
    it('should get status 200', (done) => {
        nock('https://test-ci-api-js.herokuapp.com')
        .post('/tasks')
        .reply(200,  {
            "name": "toawo",
            'status': "pending",
            "date_created": "2021-03-2021"
        })
    request
        .post('/tasks')
        .end((err, res) => {
            expect(res.body).has.property("name");
            done()
        })
    })
})