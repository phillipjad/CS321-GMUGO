const axios = require('axios');


//This function will call an Azure Function that will
//access an Azure CosmosDB instance and return matching
//activities within it

//Takes an activityId and returns an array of activities upon
//successful retrieval or an empty array otherwise
async function fetchInternalActivity(activityId){
  var internalActivities;
  var apiurl = ""; //Will eventually be set to the url endpoint of our Azure Function
  try{
    internalActivities = await axios.get(apiurl);
    internalActivities = internalActivities.data;
  }
  catch(error){
    console.error(`Error encountered while fetching internal activities: ${error}`);
    internalActivities = [];
  }
  return internalActivities;
}
