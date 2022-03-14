const buttons = document.querySelectorAll('button');
const navLinks = document.querySelectorAll('.nav-links');

const header = document.querySelector('.head');
const nav = document.querySelector('.nav-bar');
const productSection = document.querySelector('.about-pruduct');
const service = document.querySelector('.deliveryServices');
const testimonal = document.querySelector('.scr-testimonal');
const contact = document.querySelector('.question-section');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

////////////////////////////////////////////
// Scrolling

navLinks.forEach(e => e.addEventListener('click', function(e){
    e.preventDefault();

    const coordsHome = header.getBoundingClientRect();
    const coordsProductdSec = productSection.getBoundingClientRect();
    const coordsServisec = service.getBoundingClientRect();
    const coordsTestimonal = testimonal.getBoundingClientRect();
    const coordsContact = contact.getBoundingClientRect();

    console.log(e.target.className); 
    
    // Guard clauses
    if(!(e.target.className)) return;

    if(e.target.className === 'nav-link_home') {

        window.scrollTo({
            top: coordsHome.top,
            left: coordsHome.left,
            behavior: 'smooth'
        })
    }

    if(e.target.className === 'nav-link_product') {
        
        window.scrollTo({
            top: coordsProductdSec.top + window.scrollY,
            left: coordsProductdSec.left + window.scrollX,
            behavior: 'smooth'
        })
    }

    if(e.target.className === 'nav-link_service') {
        console.log(coordsServisec);
        window.scrollTo({
            top: coordsServisec.top + window.scrollY,
            left: coordsServisec.left + window.scrollX,
            behavior: 'smooth'
        })
    }

    if(e.target.className === 'nav-link_testimonal') {
        window.scrollTo({
            top: coordsTestimonal.top + window.scrollY - Number(testimonal.style.marginTop.slice(0,-3)) * 10,
            left: coordsTestimonal.left + window.scrollX,
            behavior: 'smooth'
        })
    }

    if(e.target.className === 'nav-link_conatct') {
        
        window.scrollTo({
            top: coordsContact.top + window.scrollY,
            left: coordsContact.left + window.scrollX,
            behavior: 'smooth'
        })
    }
}))

////////////////////////////////////////////
// Modal

buttons.forEach(e => e.addEventListener("click", function(e){
    e.preventDefault();

    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}))

////////////////////////////////////////////
// Navbar fix

    // const navHeight = nav.getBoundingClientRect().height;

    // console.log(navHeight);

    // function stickyNav(entries) {
    //     // console.log(entries[0].isIntersecting);

    //     const [entry] = entries;

    //     if(!(entry.isIntersecting)){
    //         nav.classList.add('sticky');
    //         header.style.paddingTop = '0';

    //     } else {
    //         nav.classList.remove('sticky');
    //         header.style.paddingTop = '1rem';
    //     }
    // }

    // const headerObserver = new IntersectionObserver(stickyNav, {
    //     root: null,
    //     threshold: 0,
    //     rootMargin: `-${navHeight}px`,
    // })

    // headerObserver.observe(header);


