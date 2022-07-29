const request=require("supertest")("http://localhost:3001")
const expect = require("chai").expect;

describe("GET /iecho",  function(){
    it("Retorna el texto recibido pero revertido y status 200", async function () {
        const response = await request.get("/iecho?text=test")

        expect(response.status).to.eql(200)
        expect(response.body.text).to.eql("tset")
    }),
    it("Retorna un mensaje de error y status 400", async function () {
        const response = await request.get("/iecho?text=")

        expect(response.status).to.eql(400)
        expect(response.body.error).to.eql("no text")
    })
})

