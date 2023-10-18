const axios = require('axios');

/**
 * This would be used internally, mainly for administrative purposes, 
 * to add or update activities in your database. 
 * It might not map directly to one of your high-level functionalities 
 * but is essential for managing your data.
 * @param {String} activityData the activity to be added
 * @returns {String} posted the status whether activity was added
 */
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
