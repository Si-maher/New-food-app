const year = document.querySelector('.year')
const currentYear = new Date().getFullYear()
year.textContent = currentYear

const navBtnMobile = document.querySelector('.btn-mobile-nav')
const navHeader = document.querySelector('.header')
navBtnMobile.addEventListener('click', function () {
    navHeader.classList.toggle('nav-open')
})

// close mobile nav 
// if (link.classList.contains('main-nav-link')) {
// navHeader.classList.toggle('nav-open')
// }
// smooth scrolling for Safari 

// fixed nav 
const sectionHeroEl = document.querySelector('.section-hero')
const obs = new IntersectionObserver(function (entries) {
const entry = entries[0]
if (entry.isIntersecting === false) {
    document.body.classList.add('sticky')
}
if (entry.isIntersecting ) {
    document.body.classList.remove('sticky')
}

},
 {
    root:null,
    threshold:0,
    rootMargin: '-80px'
})
obs.observe(sectionHeroEl)