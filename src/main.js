// The hamburger menu
let hamburger = document.querySelector(".hamburger")
let icon = document.querySelector(".hamburger i")
let nav = document.querySelector(".header_nav")
hamburger.addEventListener('click',()=> {
    nav.classList.toggle("show_nav")
    icon.classList.toggle("change_icon")
})
// the arrow up button 
let arrow_up = document.querySelector(".arrow_up")
window.addEventListener('scroll', ()=> {
    if ( window.scrollY >= 100) {
        arrow_up.classList.add("show_arrow_up")
    }
    else {
       arrow_up.classList.remove("show_arrow_up")  
    }
})
 arrow_up.addEventListener('click',()=> {
    window.scrollTo({
        top: 0, 
        behavior:"smooth"
    })
 })
//  the links animation
