const nav = document.querySelector("nav");

window.addEventListener("scroll",function(){
    nav.classList.toggle("sticky",window.scrollY > 0);
})

const sr = ScrollReveal({
    distance: '25px',
    duration: 2500,
    reset: true
})

sr.reveal('.content',{delay:190, origin:'bottom'})

sr.reveal('.main, .title, .card, .contact-text,.resume',{delay:150, origin:'bottom'})