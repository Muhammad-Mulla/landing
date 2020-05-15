//Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

//Array Of Images

let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];


setInterval(function () {

    //Random Number

    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    //Change Background Image Url

    landingPage.style.backgroundImage = 'url("../image/' + imgsArray[randomNumber] + '")';
}, 3000);