var typed=new Typed(".input",{
    strings:["Graphic designer","UI designer","Web designer"],
    typespeed:70,
    backSpeed:60,
    loop:true
})
const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 0)
});

/*

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};
*/

var x = document.getElementById("mytestNavBar");  
x.style.display="none";

var __Xpos = "left";

var menuIcon = document.getElementById("menu-icon");
var menuChild = x.children;

menuIcon.onclick=function(){      
    myFunction();    
}
x.onclick=function(){
    navBtnNormalize();
}

function myFunction() {  
   if(__Xpos === 'left'){
     x.style.display = "block";
       menuIcon.style.backgroundPosition = 'right';
       __Xpos="right";          
   }else{
       x.style.display = "none"; 
       menuIcon.style.backgroundPosition = 'left'; 
       __Xpos = "left";          
   }
}
function navBtnNormalize(){
    __Xpos = "left";
    menuIcon.style.backgroundPosition = 'left';
    x.style.display = "none";
    console.log("__Xpos :: "+__Xpos);
}
