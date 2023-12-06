const assert = require('assert');
const supertest = require('supertest');
const app = require('./../'); 

const request = supertest(app);

describe('Integration Tests for API Endpoints', () => {
  it('gets events', async () => {
    const res = await request.get('/api/events');
    assert.strictEqual(res.status, 200, 'Expected status code 200');
    assert.strictEqual(Array.isArray(res.body), true, 'Expected response body to be an array');
  });

  it('gets activities', async () => {
    const res = await request.get('/api/activities');
    assert.strictEqual(res.status, 200, 'Expected status code 200');
    assert.strictEqual(Array.isArray(res.body), true, 'Expected response body to be an array');
  });

  it('gets discounts', async () => {
    const res = await request.get('/api/discounts');
    assert.strictEqual(res.status, 200, 'Expected status code 200');
    assert.strictEqual(Array.isArray(res.body), true, 'Expected response body to be an array');
  });

  it('searches', async () => {
    const res = await request.get('/api/search?q=name');
    assert.strictEqual(res.status, 200, 'Expected status code 200');
    assert.strictEqual(Array.isArray(res.body), true, 'Expected response body to be an array');
  });

  it('gets user favorites', async () => {
    const res = await request.get('/api/favorites');
    assert.strictEqual(res.status, 200, 'Expected status code 200');
    assert.strictEqual(Array.isArray(res.body), true, 'Expected response body to be an array');
  });

  it('adds to user favorites', async () => {
    const newItem = { id: 1, name: 'Favorite Item' };
    const res = await request.post('/api/favorites').send(newItem);
    assert.strictEqual(res.status, 200, 'Expected status code 200');
    assert.deepStrictEqual(res.body, { success: true, message: 'Item added to favorites' });
  });
});
