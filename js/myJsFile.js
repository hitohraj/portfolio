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
var menuIcon = document.getElementById("menu-icon");
var menuChild = x.children;
let text = "";
for (let i = 0; i < menuChild.length; i++) {
  text += menuChild[i].children.tagName + "<br>";
}

var myNumber = 1;

menuIcon.onclick=function(){      
    myFunction();    
}

function myFunction() {  
   if(myNumber === 1){
     x.style.display = "none";
       console.log("this  =  "+this);
       menuIcon.style.backgroundPosition = 'right';
        myNumber=0; 
   }else{
       x.style.display = "block"; 
       menuIcon.style.backgroundPosition = 'left';
        myNumber=1;        
   }
}

