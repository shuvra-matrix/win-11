const main = document.getElementsByClassName('menu_main');
menu = document.getElementsByClassName('task_icon');


    menu.addEventListener('click',()=>{
        console.log("hi")
        if(main.style.top == "-549px")
        {
            main.style.top = "70px";
        }
    })
