const fetchExternalEvents = require('./fetchExternalEvents.js');

test("return external events from api", async() =>{
	const event = await fetchExternalEvents();
	expect(event).toEqual('list of event here'); //insert events from the api here
	});