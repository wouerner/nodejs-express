const request = require('supertest');
const app = require('../app');

describe("GET Book", () => {
  it("should return 200 and JSON", () => {
    return request(app)
      .get("/")
      .expect('Content-Type', /json/)
      .expect(200, [{ name: 'book 1'}, { name: 'book 2'}] )
      ;
  });
})

describe("GET SHOW Book", () => {
  it("should return 200 and JSON", () => {
    return request(app)
      .get("/show")
      .expect('Content-Type', /json/)
      .expect(200, { name: 'book'} )
      ;
  });
})

describe("POST Book", () => {
  it("should return 200 and JSON", () => {
    return request(app)
      .post("/")
      .expect('Content-Type', /json/)
          .expect(200, { message: 'Criado!', data: { name: 'book' } } )
      ;
  });
})

describe("PUT Book", () => {
  it("should return 200 and JSON", () => {
    return request(app)
      .put("/")
      .expect('Content-Type', /json/)
      .expect(200, { message: 'Atualizado!', data: { name: 'book' }});
  });
})

describe("DELETE Book", () => {
  it("should return 200 and JSON", () => {
    return request(app)
      .delete("/")
      .expect('Content-Type', /json/)
          .expect(200, { message: 'Excluido!', data: { name: 'book' }} )
      ;
  });
})
