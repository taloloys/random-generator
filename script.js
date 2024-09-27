let dogz = document.getElementById("dogImage");
let btn = document.getElementById("btn1");

btn.addEventListener('click',randomDogImage);
const dogUrl = "https://dog.ceo/api/breeds/image/random";


function randomDogImage() {
    fetch(dogUrl)
    .then(response => response.json())
    .then(data => {
        dogz.innerHTML = `<img src ="${data.message}" width = "290" height = "290" class='dog-image'/>`;
    })

}


let cats = document.getElementById("catImage");
let bts = document.getElementById("btn2");

bts.addEventListener('mouseover',randomCatImage);
const apiKey = "live_SFcPx0u55f8gWdfvYaWJIakUWQOnU8UWtHDHyzr8ryPGWoIZxj9K7J1kGXZGEDnL";
const catUrl = "https://api.thecatapi.com/v1/images/search";

function randomCatImage() {
    fetch(catUrl)
    .then(response => response.json())
    .then(data => {
        cats.innerHTML = `<img src = "${data[0].url }" width = '280' height = '280' class= 'cat-image'/>`;
    })
}


let qoute = document.getElementById("quote");
let auth = document.getElementById("author");

let btns = document.getElementById("btn3");
btns.addEventListener("click",randomQuote);

let qouteUrl = "https://api.quotable.io/random";

function randomQuote() {
    fetch(qouteUrl)
    .then(response => response.json())
    .then(data => { 
         let limitedQuote = limitWordsPerLine(data.content, 7);
         qoute.innerHTML = `<div class="quote-bubble"><p>${limitedQuote.replace(/\n/g, '<br>')}</p></div>`;
         auth.innerHTML = `<div class="author-bubble">Author: ${data.author}</div>`;
    })
}

function limitWordsPerLine(text, wordsPerLine) {
    let words = text.split(' ');
    let lines = [];
    for (let i = 0; i < words.length; i += wordsPerLine) {
        let lineWords = words.slice(i, i + wordsPerLine);
        lines.push(lineWords.join(' '));
    }
    return lines.join('<br>');
}
function disableBackButton() {
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function () {
        window.history.pushState(null, '', window.location.href);
    };
}

function logout(){
    window.location.href = "../login/login.html";
    disableBackButton();

}
document.getElementById("logout").addEventListener('click',logout);