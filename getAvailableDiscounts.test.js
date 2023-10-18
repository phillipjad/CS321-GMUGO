const getAvailableDiscounts = require('./p2maybecode')


test('prints a list of discounts from the api', async() =>{
	const title = await getAvailableDiscounts();
	expect(title).toEqual('insert title here'); //insert a title from the api here
	});
	