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



const hover1 = document.getElementById('hover1');
const hover2 = document.getElementById('hover2');
const hover3 = document.getElementById('hover3');
const PlanYourTeam = document.getElementById('PlanYourTeam');
const ReviewYourTeam = document.getElementById('ReviewYourTeam');
const StartBuilding = document.getElementById('StartBuilding');

// ✅ Show hidden DIV on hover
hover2.addEventListener('mouseover', function handleMouseOver() {
    ReviewYourTeam.style.display = 'block';
    PlanYourTeam.style.display = 'none';
    StartBuilding.style.display = 'none';
});
hover1.addEventListener('mouseover', function handleMouseOver() {
    PlanYourTeam.style.display = 'block';
    ReviewYourTeam.style.display = 'none';
    StartBuilding.style.display = 'none';
});
hover3.addEventListener('mouseover', function handleMouseOver() {
    PlanYourTeam.style.display = 'none';
    ReviewYourTeam.style.display = 'none';
    StartBuilding.style.display = 'block';
});


// ✅ Show hidden DIV on hover
hover1.addEventListener('mouseover', function handleMouseOver() {
    FhoverJs.style.backgroundColor = '#7000E3';
    FhoverJs.style.color = 'white';
    ShoverJs.style.backgroundColor = 'white';
    ShoverJs.style.color = '#7000E3';
    ThoverJs.style.backgroundColor = 'white';
    ThoverJs.style.color = '#7000E3';
});
hover2.addEventListener('mouseover', function handleMouseOver() {
    FhoverJs.style.backgroundColor = 'white';
    FhoverJs.style.color = '#7000E3';
    ShoverJs.style.backgroundColor = '#7000E3';
    ShoverJs.style.color = 'white';
    ThoverJs.style.backgroundColor = 'white';
    ThoverJs.style.color = '#7000E3';
});
hover3.addEventListener('mouseover', function handleMouseOver() {
    FhoverJs.style.backgroundColor = 'white';
    FhoverJs.style.color = '#7000E3';
    ShoverJs.style.backgroundColor = 'white';
    ShoverJs.style.color = '#7000E3';
    ThoverJs.style.backgroundColor = '#7000E3';
    ThoverJs.style.color = 'white';
});



function firstpopup() {
    document.querySelector(".PopUppages1").style.display="flex"
    document.querySelector(".MainPopUppages").style.display="block"
    document.querySelector("body").style.overflow="hidden"
}
function IcoRemovePopUp1() {
    document.querySelector(".PopUppages").style.display="none"
    document.querySelector(".MainPopUppages").style.display="none"

    document.querySelector("body").style.overflowY="scroll"
    
}
function Secpopup() {
    document.querySelector(".PopUppages2").style.display="flex"
    document.querySelector(".MainPopUppages").style.display="block"

    document.querySelector("body").style.overflow="hidden"

}
function IcoRemovePopUp2() {
    document.querySelector(".PopUppages2").style.display="none"
    document.querySelector(".MainPopUppages").style.display="none"

    document.querySelector("body").style.overflowY="scroll"

}
function Thirdpopup() {
    
    document.querySelector(".PopUppages3").style.display="flex"
    document.querySelector(".MainPopUppages").style.display="block"

    document.querySelector("body").style.overflow="hidden"

}
function IcoRemovePopUp3() {
    document.querySelector(".PopUppages3").style.display="none"
    document.querySelector(".MainPopUppages").style.display="none"

    document.querySelector("body").style.overflowY="scroll"

}
function Fourthpopup() {
    document.querySelector(".PopUppages4").style.display="flex"
    document.querySelector(".MainPopUppages").style.display="block"

    document.querySelector("body").style.overflow="hidden"

}
function IcoRemovePopUp4() {
    document.querySelector(".PopUppages4").style.display="none"
    document.querySelector(".MainPopUppages").style.display="none"
    document.querySelector("body").style.overflowY="scroll"

}


