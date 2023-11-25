
let btnmenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
const btn = document.getElementById('btn-topo')

btnmenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')

})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')

})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')

})


document.addEventListener('scroll',ocultar)

function ocultar(){
    if(window.scrollY > 5){
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
        
    }
}

ocultar()
