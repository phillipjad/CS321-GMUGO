/**
 * Check for available discounts for GMU students/staff for each activity.
 * @param  {[type]} activityId the type of activity
 * @return {[type]} discount list the list of discounts curated    
 */
async function getAvailableDiscounts(activityId){
    let url = "" //insert api url here
    let discount_output = "" //the list of discounts
    
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        var discountList = document.getElementById("discount_output");
        data.array.forEach(element => {
            const discount = element.name
            let ul = document.createElement("ul");
            ul.innerText = discount;
            discountList.appendChild(ul);
            
        });
        console.log(discountList);
    })
    .catch(error => {
        console.log("Error: " , error);
    })
}
