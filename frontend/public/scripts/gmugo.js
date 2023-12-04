import axios from 'https://cdn.skypack.dev/axios';
var userInfo = localStorage.getItem('userInfo');
if (userInfo == null || userInfo == undefined) {
    userInfo = {};
}
else {
    userInfo = JSON.parse(userInfo);
}

console.log(userInfo);

function addListeners() {
    document.getElementById('addInterestButton').addEventListener("click", addInterest);
    document.getElementById('addInterestButton').addEventListener("change", addInterest);
    document.getElementById('addInterestButton').addEventListener("click", checkFormComplete);
    document.getElementById('interest').addEventListener("input", handleInterestChange);
    document.querySelectorAll('form > input').forEach((element) => {
        element.addEventListener("keyup", checkFormComplete);
    });
    document.querySelectorAll('form > input').forEach((element) => {
        element.addEventListener("change", checkFormComplete);
    });
    document.querySelector('form')
        .addEventListener('submit', (e) => {
            e.preventDefault();
            let info = new FormData(document.querySelector('form'));
            for (var pair of info.entries()) {
                if (pair[0] != 'interest') {
                    userInfo[pair[0]] = pair[1];
                }
            }
            userInfo['interests'] = []
            let list = document.getElementById('interestsList');
            for (var i = 0; i < list.children.length; i++) {
                userInfo['interests'].push(list.children[i].innerHTML);
            }
            console.log(userInfo);
            document.querySelector('form').reset();
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            console.log('stored');
            prefillForm();
        });
}

function prefillForm() {
    if (Object.keys(userInfo).length > 0) {
        var form = document.querySelector('form');
        for (var key in userInfo) {
            switch (key) {
                case 'age':
                    document.querySelector('form > input#age').value = userInfo[key];
                    break;
                case 'gender':
                    if (userInfo[key] == 'male') {
                        document.querySelector('form > input#genderMale').checked = true;
                    } else {
                        document.querySelector('form > input#genderFemale').checked = true;
                    }
                    break;
                case 'interests':
                    for (var i = 0, n = userInfo[key].length; i < n; i++) {
                        let interest = userInfo[key][i];
                        let list = document.getElementById('interestsList');
                        let listItem = document.createElement("li");
                        let listInterest = document.createTextNode(interest);
                        listItem.append(listInterest);
                        list.append(listItem);
                    }
                    break;
            }
        }
    }
    if (Object.keys(userInfo).length == 3) {
        document.querySelectorAll('form > input').forEach((element) => {
            element.disabled = true;
        });
        if (userInfo['interests'].length != 5) {

        }
    }
}

function handleInterestChange(e) {
    if (e.target.value && document.getElementById('interestsList').children.length < 5) {
        document.getElementById('addInterestButton').disabled = false;
    }
    else {
        document.getElementById('addInterestButton').disabled = true;
    }
}


function checkFormComplete(e) {
    var filled = true, radioFilled = false;
    document.querySelectorAll('form > input').forEach((element) => {
        if (element.type == 'text' || element.type == 'number') {
            if (element.name == 'interest') {
                let list = document.getElementById('interestsList');
                if (list.children[0].id == 'placeholder') {
                    filled = false;
                }
            }
            else {
                if (!(element.value)) {
                    filled = false;
                }
            }
        }
        else if (element.type == 'radio') {
            if (!(radioFilled)) {
                if (element.checked) {
                    radioFilled = true;
                }
            }
        }
    });
    console.log(`filled: ${filled}\nradioFilled: ${radioFilled}`)
    if (filled && radioFilled) {
        document.getElementById("userInfoSubmit").disabled = false;
    }
    else {
        document.getElementById("userInfoSubmit").disabled = true;
    }
}



function addInterest() {
    let interest = document.getElementById('interest').value;
    let list = document.getElementById('interestsList');
    if (list.children.length >= 5) {
        document.getElementById('addInterestButton').disabled = true;
        return;
    }
    if (list.children[0].id == 'placeholder') {
        list.innerHTML = '';
    }
    let listItem = document.createElement("li");
    let listInterest = document.createTextNode(interest);
    listItem.append(listInterest);
    list.append(listItem);
    document.getElementById('interest').value = '';
    document.getElementById('interest').focus();
    if (list.children.length >= 5) {
        document.getElementById('addInterestButton').disabled = true;
        return;
    }
}



document.addEventListener("DOMContentLoaded", () => {
    addListeners();
});
document.addEventListener("DOMContentLoaded", () => {
    prefillForm();
});