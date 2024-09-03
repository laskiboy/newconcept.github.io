function openSidebar(){
    const sidebarOpen = document.querySelector('.sidebar')
    sidebarOpen.style.display = 'flex'
}

function closeSidebar(){
    const sidebarClose = document.querySelector('.sidebar')
    sidebarClose.style.display = 'none'
}

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.kartu', { delay: 100, origin: 'bottom' });
ScrollReveal().reveal('.name-logo,  nav', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.h1-first', { delay: 300, origin: 'left' });
ScrollReveal().reveal('.typing', { delay: 300, origin: 'right' });