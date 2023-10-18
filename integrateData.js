const axios = require('axios');

async function integrateData(data){
  var returnid, apiurl;
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
