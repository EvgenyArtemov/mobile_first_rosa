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