/* navbar toggle */
let collape = document.querySelector('.navbar-collapse');
let navToggle = document.querySelector('.navbar-toggle');
let toggle = true;
navToggle.addEventListener('click', navbar_toggle);
function navbar_toggle(){
    if(toggle){
        collape.style.height = '250px';
        toggle = false;
    }else{
        collape.style.height = '0';
        toggle = true;
    }
}

