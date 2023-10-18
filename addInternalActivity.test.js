const addInternalActivity = require('./p2maybecode')

test('Adds a new activity to the internal database.' async() =>{
  const mockCreateActivity = jest.fn((data) => {
    return {
      id: 'uniqueActivityID',	//add more properties
    };
  });
  
  const createdActivity = addInternalActivity(activityData)
  expect(createdActivity).toEqual({
    id: 'uniqueActivityID', // add more property checks if applicable
  });
});
