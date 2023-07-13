$('.events-row').owlCarousel({
    loop:true,
    margin:10,
	autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.review-row').owlCarousel({
    loop:true,
    margin:10,
	autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

const hamburger = document.querySelector(".nav-burger");
const navmenu = document.querySelector(".nav-ul");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

const hamclick = document.querySelectorAll(".nav-a");
hamclick.forEach(e => {
    e.addEventListener('click', () => {
        navmenu.classList.toggle("active"); 
    })
})