


const navbar = document.querySelector('.FNavBar');
window.onscroll = () => {
    if (window.scrollY > 150) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

function BkColorWhite() {
    document.getElementById("FNavBar").style.backgroundColor= "white"
}




var Popular = document.getElementById("pills-Popular");
var fintech = document.getElementById("pills-FinTech");
var HealthTech = document.getElementById("pills-HealthTech");
var Ecommerce =  document.getElementById("pills-Ecommerce");
var Marketplaces = document.getElementById("pills-Marketplaces");
var Web3 =  document.getElementById("pills-Web3");
var FutureWork = document.getElementById("pills-Future-of-Work");
var media = document.getElementById("pills-media");

window.onload=function(){
    document.querySelector("#pills-Popular-tab").click();
};
function opencreate1() {
    fintech.style.display = "none"
    Popular.style.display = "flex"
    HealthTech.style.display = "none"
    Ecommerce.style.display = "none"
    Marketplaces.style.display = "none"
    Web3.style.display = "none"
    FutureWork.style.display = "none"
    media.style.display = "none"
}
function opencreate2() {
    fintech.style.display = "flex"
    Popular.style.display = "none"
    HealthTech.style.display = "none"
    Ecommerce.style.display = "none"
    Marketplaces.style.display = "none"
    Web3.style.display = "none"
    FutureWork.style.display = "none"
    media.style.display = "none"
}
function opencreate3() {
    fintech.style.display = "none"
    Popular.style.display = "none"
    HealthTech.style.display = "flex"
    Ecommerce.style.display = "none"
    Marketplaces.style.display = "none"
    Web3.style.display = "none"
    FutureWork.style.display = "none"
    media.style.display = "none"
}
function opencreate4() {
    fintech.style.display = "none"
    Popular.style.display = "none"
    HealthTech.style.display = "none"
    Ecommerce.style.display = "flex"
    Marketplaces.style.display = "none"
    Web3.style.display = "none"
    FutureWork.style.display = "none"
    media.style.display = "none"
}
function opencreate5() {
    fintech.style.display = "none"
    Popular.style.display = "none"
    HealthTech.style.display = "none"
    Ecommerce.style.display = "none"
    Marketplaces.style.display = "flex"
    Web3.style.display = "none"
    FutureWork.style.display = "none"
    media.style.display = "none"
}
function opencreate6() {
    fintech.style.display = "none"
    Popular.style.display = "none"
    HealthTech.style.display = "none"
    Ecommerce.style.display = "none"
    Marketplaces.style.display = "none"
    Web3.style.display = "flex"
    FutureWork.style.display = "none"
    media.style.display = "none"
}
function opencreate7() {
    fintech.style.display = "none"
    Popular.style.display = "none"
    HealthTech.style.display = "none"
    Ecommerce.style.display = "none"
    Marketplaces.style.display = "none"
    Web3.style.display = "none"
    FutureWork.style.display = "flex"
    media.style.display = "none"
}
function opencreate8() {
    fintech.style.display = "none"
    Popular.style.display = "none"
    HealthTech.style.display = "none"
    Ecommerce.style.display = "none"
    Marketplaces.style.display = "none"
    Web3.style.display = "none"
    FutureWork.style.display = "none"
    media.style.display = "flex"
}



// function BkColorWhite() {
//     var x = document.getElementById("FNavBar");
//     if (x.style.backgroundColor === "white") {
//       x.style.backgroundColor = "transparent";
//     } else {
//       x.style.backgroundColor = "white";}}

// function opencreate() {
//     document.getElementById("pills-FinTech").style.backgroundColor = "red"; 
//     document.getElementById("pills-Popular").style.display = "none"; 
// }