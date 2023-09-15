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
/* switch list - grid */
let list = document.querySelector('.nav-tab #list');
let grid = document.querySelector('.nav-tab #grid');
list.addEventListener('click', listView);
grid.addEventListener('click', gridView);
function listView(){
    list.parentElement.classList.add('active');
    grid.parentElement.classList.remove('active');
}
function gridView(){
    grid.parentElement.classList.add('active');
    list.parentElement.classList.remove('active');
}
