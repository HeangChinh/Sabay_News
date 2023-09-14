/* navbar toggle */
let collape = document.querySelector('.navbar-collapse');
let toggle = true;
function navbar_toggle(){
    if(toggle){
        collape.style.height = '250px';
        toggle = false;
    }else{
        collape.style.height = '0';
        toggle = true;
    }
}