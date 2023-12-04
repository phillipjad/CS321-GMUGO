import axios from 'https://cdn.skypack.dev/axios';
var userInfo = {};

function addListeners() {
    document.getElementById('addInterestButton').addEventListener("click", addInterest);
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
        for (var pair of info.entries()){
            if (pair[0] != 'interest'){
                userInfo[pair[0]] = pair[1];
            }
        }
        userInfo['interests'] = []
        let list = document.getElementById('interestsList');
        for (var i = 0; i < list.children.length; i++){
            userInfo['interests'].push(list.children[i].innerHTML);
        }
        console.log(userInfo);
        document.querySelector('form').reset();
    });
    document.getElementById('interestLink').addEventListener('click', ()=>{console.log('hi')})
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
    console.log();
}



document.addEventListener("DOMContentLoaded", () => {
    addListeners();
})