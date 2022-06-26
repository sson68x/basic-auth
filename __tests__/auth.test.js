'use strict';

const { server } = require('../src/server');
const { sequelize } = require('../src/auth/models');
const supertest = require('supertest');
const mockRequest = supertest(server);

beforeAll(async () => {
    await sequelize.sync();
});

afterAll(async () => {
    await sequelize.close();
});

describe('Auth Tests', () => {
    test('allows a user to signup with a POST to /signup', async () => {
        let response = await mockRequest.post('/signup').send({
            username: 'tester',
            password: 'pass123'
        });
        console.log('response body: ', response.body);
        expect(response.status).toEqual(201);
        expect(response.body.username).toEqual('tester');
        expect(response.body.password).toBeTruthy();
        expect(response.body.password).not.toEqual('pass123');
    });
});
