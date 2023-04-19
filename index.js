const isScrolling = () => {
    const headerE1 = document.querySelector('.primary-header')
    let windowPosition = window.scrollY > 250
    headerE1.classList.toggle('active', windowPosition)
}
window.addEventListener('scroll',isScrolling)