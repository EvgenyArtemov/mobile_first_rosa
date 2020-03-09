//Menu toggle

const menuToggle = () => {
    document.body.addEventListener('click', (el) => {
        const clNames = ['fa-bars', 'fa-times'];
        if(clNames.some( cl => el.target.classList.contains(cl))){
            document.body.classList.toggle('open')
        }        
    })
}

menuToggle();

ScrollReveal().reveal('.animate--left',{
    distance: '150%',
    origin: 'left',
    delay: 200,
    opacity: null
})

ScrollReveal().reveal('.animate--right',{
    distance: '150%',
    origin: 'right',
    delay: 200,
    opacity: null
})

ScrollReveal().reveal('.animate--top',{
    distance: '250%',
    origin: 'top',
    delay: 0,
    opacity: 0
})

ScrollReveal().reveal('.animate--bottom',{
    distance: '250%',
    origin: 'bottom',
    delay: 0,
    opacity: 0
})