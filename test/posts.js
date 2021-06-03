const chai = require('chai')
const request = require('supertest')("http://localhost:3700")
const chaiHttp = require('chai-http')
const expect = require('chai').expect
chai.use(chaiHttp)
const nock = require('nock')
const url = 'http://localhost:3700'

describe('Test mock db', () => {
    it('should get status 200', (done) => {
        nock('http://localhost:3700')
        .get('/taskss')
        .reply(200,  {
            "name": "toawo"
        })
    request
        .get('/tasks')
        .end((err, res) => {
            expect(res.body).has.property("name");
            done()
        })
    })
})




// describe("Get all todo", () =>{
//     it("Shoul return status 200", () => {
//         chai.request(url)
//         .post('/tasks')
//         .send({name:"test 4"})
//         .end((err, res) => {
//             expect(res).to.have.status(200)
//         })
//     })
// })