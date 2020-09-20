function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();

let headerContent = document.getElementById("header-content");    
let munuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");
sideNav.style.right = "-250px";
headerContent.style="opacity:1";
menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        headerContent.style="opacity:0";
    }else{
        sideNav.style.right = "-250px";
        headerContent.style="opacity:1";
    }
}  

// All animations will take exactly 500ms
let scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});