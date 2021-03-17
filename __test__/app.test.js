const request = require('supertest');
const app = require('../app')


describe('Probar nuestro mini server express',()=>{
    test('Debe responder al GET',()=>{
        request(app).get('/').then((response)=>{
            expect(response.statusCode).toBe(200)
        })
    })
})