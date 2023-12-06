import axios from 'https://cdn.skypack.dev/axios';
var userInfo = localStorage.getItem('userInfo');
if (userInfo == null || userInfo == undefined) {
    userInfo = {};
}
else {
    userInfo = JSON.parse(userInfo);
}

console.log(userInfo);

try {
    let itinerary = document.getElementById('userItinerary');
    if (Object.keys(userInfo).length != 0) {
        let ret = await axios(
            {
                "url": 'https://gmugo-app.azurewebsites.net/api/itineraryRequest',
                "method": "post",
                "headers": {
                    "age": userInfo.age,
                    "gender": userInfo.gender,
                    "location": userInfo.location,
                    "interests": JSON.stringify(userInfo.interests)
                }
            }
        )
        document.getElementById('loading').style.display = "none";
        itinerary.innerHTML = '';
        ret = ret.data.split('\n');
        ret.forEach((plan) => {
            let listItem = document.createElement("li");
            let listInterest = document.createTextNode(plan.substring(3));
            listItem.append(listInterest);
            itinerary.append(listItem);
        })
    }
    else {
        document.getElementById('loading').style.display = "none";
        let listItem = document.createElement("li");
        let listInterest = document.createTextNode('Personal Information Not Set!');
        listItem.append(listInterest);
        itinerary.append(listItem);
    }
} catch (e) { console.error(e) }