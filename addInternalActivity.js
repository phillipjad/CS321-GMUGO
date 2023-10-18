const axios = require('axios');

async function addInternalActivity(activityData){
  var posted;
  try{
    posted = await axios.get(apiurl);
    if (posted.data){
      posted = true;
      console.log("The internal activity was posted successfully");
    }
    else{
      posted = false;
      console.log("Unable to post internal activity");
    }
  }
  catch(error){
    posted = false;
    console.error("Error encountered while adding internal activity");
  }
  return posted;
}
