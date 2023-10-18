const axios = require('axios');
/**
* This function syncs data to cosmosDB
* @param data - the data to be pushed to cosmosDB
* @return int - a 1 if successful and a 0 if not
*/
async function integrateData(data){
  var returned = 0, apiurl = ""; //apiurl will be Azure Function endpoint
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
