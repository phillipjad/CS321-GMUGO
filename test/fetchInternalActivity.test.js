const fetchInternalEvents = require('./fetchInternalEvents.js');

test("return external events from api", async() =>{
	const event = await fetchInternalEvents(123);
	expect(event).toEqual('list of event here'); //insert events from the api here
	});
