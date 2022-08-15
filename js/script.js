'use strict';

const main = document.querySelector('.menu_main');
let menu = document.querySelector('.main_bar');

let tops= getComputedStyle(main);

menu.addEventListener('click',function () {
        
        if(tops.top == "-549px")
        {
            console.log("done");
            main.style.top = "70px";
        }
        else if (tops.top == "70px") {
            main.style.top = "-549px";
        }
    })





document.addEventListener('keydown' , function(k) {
   
    if(k.key == 'W' || k.key == 'w')
    {
        if(tops.top == "-549px")
        {
            main.style.top = "70px";
        }
        else if (tops.top == "70px") {
            main.style.top = "-549px";
        }
    }

})

