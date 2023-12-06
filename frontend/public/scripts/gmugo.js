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
    document.getElementById('resetUserInfo').addEventListener('click', resetForm);
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
            userInfo['interests'] = [];
            let list = document.getElementById('interestsList');
            for (var i = 0; i < list.children.length; i++) {
                userInfo['interests'].push(list.children[i].innerHTML);
            }
            console.log(userInfo);
            document.querySelector('form').reset();
            document.querySelector('#resetUserInfo').disabled = false;
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            prefillForm();
        });
}

function prefillForm() {
    if (Object.keys(userInfo).length > 0) {
        document.querySelector('#resetUserInfo').disabled = false;
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
                    let list = document.getElementById('interestsList');
                    list.innerHTML = '';
                    for (var i = 0, n = userInfo[key].length; i < n; i++) {
                        let interest = userInfo[key][i];
                        let listItem = document.createElement("li");
                        let listInterest = document.createTextNode(interest);
                        listItem.append(listInterest);
                        list.append(listItem);
                    }
                    break;
                case 'location':
                    document.querySelector('form > select').value = userInfo['location'];
                    break;
            }
        }
    }
    if (Object.keys(userInfo).length == 4) {
        document.querySelectorAll('form > input').forEach((element) => {
            if (element.id != 'interest' && element.id != 'resetUserInfo') {
                console.log(element.id);
                element.disabled = true;
            }
        });
        document.querySelector('form > select').disabled = true;
        if (userInfo['interests'].length == 5) {
            document.querySelector('form > input#interest').disabled = true;
        }
    }
}

function resetForm(e) {
    userInfo = {};
    localStorage.removeItem('userInfo');
    document.getElementById('interestsList').innerHTML = '';
    document.querySelectorAll('form > input').forEach((element) => {
        switch (element.type) {
            case 'radio':
                element.checked = false;
                element.disabled = false;
                break;
            case 'number':
            case 'text':
                element.value = '';
                element.disabled = false;
                break;
            case 'button':
                if (element.id == 'resetUserInfo') {
                    element.disabled = true;
                }
                break;
        }
    });
    document.querySelector('form > select').value = '';
    document.querySelector('form > select').disabled = false;
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
                if (!(list.children)) {
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
        document.getElementById('interest').disabled = true;
        return;
    }
    if (!(list.children)) {
        list.innerHTML = "";
    }
    let listItem = document.createElement("li");
    let listInterest = document.createTextNode(interest);
    listItem.append(listInterest);
    list.append(listItem);
    document.getElementById('interest').value = "";
    document.getElementById('interest').focus();
    if (list.children.length >= 5) {
        document.getElementById('addInterestButton').disabled = true;
        document.getElementById('interest').disabled = true;
        return;
    }
}



document.addEventListener("DOMContentLoaded", () => {
    addListeners();
});
document.addEventListener("DOMContentLoaded", () => {
    prefillForm();
});