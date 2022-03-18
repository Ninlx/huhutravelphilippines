$(document).on('click', '.navbar ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
})

const menu = document.querySelector('#menu-btn')
const navbar = document.querySelector('.navbar')
menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

const searchbtn = document.querySelector('#search-btn')
const seachcontainer = document.querySelector('.search-container')
searchbtn.addEventListener('click', () =>{
    searchbtn.classList.toggle('active')
    seachcontainer.classList.toggle('active')
})


const hide1 = document.querySelector('#hide-1')
const hide2 = document.querySelector('#hide-2')
hide1.onclick = () =>{
    hide1.classList.toggle('active')
    hide2.classList.toggle('active')
}

const userbtn = document.querySelector('#user-btn')
const logincontainer = document.querySelector('.login-container')
const formclosed = document.querySelector('#form-closed-btn')
userbtn.addEventListener('click', () =>{
    userbtn.classList.toggle('active')
    logincontainer.classList.toggle('active')
})

formclosed.onclick = () =>{
    logincontainer.classList.remove('active')
    userbtn.classList.remove('active')
}

function myFuction(){
    var me = document.getElementById("inputPass")
    var you = document.getElementById("hide-1")
    var us = document.getElementById("hide-2")

    if(me.type === 'password'){
        me.type = "text";
        you.style.display = "block"
        us.style.display = "none"
    } else{
        me.type = "password"
        you.style.display = "none"
        us.style.display = "block"
    }
}

window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
    searchbtn.classList.remove('active')
    seachcontainer.classList.remove('active')
    hide1.classList.remove('active')
    hide2.classList.remove('active')
    userbtn.classList.remove('active')
    logincontainer.classList.remove('active')
}
