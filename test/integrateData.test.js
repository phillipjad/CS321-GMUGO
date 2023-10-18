const integrateData = require('./p2maybecode')
const data;  //add on to get data

test('Integrates and merges data from both internal and external sources for a unifi    ed response.', async() =>{
  const retid = integrateData(data);
  expect(retid).toBeInstanceOf(int);
  expect(retid === 0 || rtid === 1).toBe(true);
});
