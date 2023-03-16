const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu'); 

burger.addEventListener('click', ()=>{
    if (menu.style.display === 'none'){
        menu.style.display= 'block';
    }else {
        menu.style.display = 'none';
    }
})