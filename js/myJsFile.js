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


var __nevbar = document.getElementById("myNavBarId");  
var __menuIcon = document.getElementById("menu-icon");
var __nevbarBtn = document.getElementById('myNavBarId').getElementsByTagName('a');
var __menuDefaultPos = true;
var __downloadBtn = document.getElementById('downloadBtn');

function __toggleMenuContent(){   
   // console.log('__menuDefaultPos  ==  '+__menuDefaultPos); 
    if(__menuDefaultPos === true){
        __menuIcon.style.backgroundPosition = 'right';
        __nevbar.style.left = '0';
        __menuDefaultPos=false;
        //console.log('__menuDefaultPos  ==  '+__menuDefaultPos); 
    }else{
            if(__menuDefaultPos === false){
            __nevbar.style.left = '-100%'; 
            __menuIcon.style.backgroundPosition = 'left';
        } 
         __menuDefaultPos=true;       
    }    
}

function __nevbarListToggle(){
    for(let i=0; i<__nevbarBtn.length; i++){
        var __llistBtn = __nevbarBtn[i];
       __llistBtn.onclick = function(){
           __nevbar.style.left = '-100%'; 
           __menuIcon.style.backgroundPosition = 'left';   
           __menuDefaultPos=true;          
        }        
    }
       
}

function __DownloadPdfFile() {
   const __link = document.createElement('a');
   __link.href = 'images/Hitesh-C-Resume.pdf';
   __link.click();    
};


 __nevbarListToggle();
 __menuIcon.onclick = function(){       
    __toggleMenuContent();
}
__downloadBtn.addEventListener('click',function(e){      
  __DownloadPdfFile();   
});










     
