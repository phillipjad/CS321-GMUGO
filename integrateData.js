const axios = require('axios');
/**
* This function syncs data to cosmosDB
* @param {object} data - the data to be pushed to cosmosDB
* @return {number} - a 1 if successful and a 0 if not
*/
async function integrateData(data){
  var returnid = 0, apiurl = ""; //apiurl will be Azure Function endpoint
  const headers = {
    'Content-Type': 'application/json',
    'clientid': clientid
  };
  const data = {
    data: data
  };
  try{
    await axios.post(apiurl, data, {headers});
    returnid = 1;
  }
  catch{
    returnid = 0;
  }
  return returnid;
}
