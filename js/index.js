import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

toggleLangMenu()
toggleMobMenu()
initSwiper();

//lang

function toggleLangMenu() {
    const langBlock = document.querySelectorAll('.header-lang');

    langBlock.forEach((item) => {
        item.addEventListener('click', function () {
            const langMenu = this.querySelector('.header-lang-menu');

            langMenu.classList.toggle('active');
        });
    });
}

function toggleMobMenu() {
    let mobMenu = document.querySelector('.header-mob-menu');
    let mobMenuOpen = document.querySelector('.header-mob-open');
    let mobMenuBg = document.querySelector('.header-mob-menubg');
    let headerLogo = document.querySelector('.header-logo');
    let mobMenuClose = document.querySelector('.header-mob-close');


    mobMenuOpen.addEventListener('click', ()=>{
        headerLogo.classList.toggle('active');
        mobMenuOpen.classList.toggle('active');
        mobMenuBg.classList.toggle('active');
        mobMenu.classList.toggle('active');
    })

    mobMenuClose.addEventListener('click', ()=>{
        headerLogo.classList.toggle('active');
        mobMenuOpen.classList.toggle('active');
        mobMenuBg.classList.toggle('active');
        mobMenu.classList.toggle('active');
    })
}

function initSwiper() {
    let clientsSection = document.getElementById('clients-section');
    if(clientsSection){
        new Swiper('.clients-swiper-container',
            {
                slidesPerView: 'auto',
                observerParents : true,
                obeserver : true,
                spaceBetween: 0,
                loop: true,
                loopedSlides: 8,
                speed: 8000,
                longSwipes: false,
                touchReleaseOnEdges: true,
                grabCursor: true,
                allowTouchMove: true,
                autoplay: {
                    delay: 100,
                    disableOnInteraction: false,
                }
            });
    }
  }