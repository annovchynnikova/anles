showLangMenu();
showMobMenu();

//lang

function showLangMenu() {
    let langBlock = document.querySelectorAll('.header-lang');

    langBlock.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            let menu = e.target.closest('.header-lang');
            let langMenu = menu.querySelector('.header-lang-menu')

            if(langMenu.classList.contains('active')) {
                langMenu.classList.remove('active');
            } else {
                langMenu.classList.add('active');
            }
        })
    })
}

function showMobMenu() {
    let mobMenu = document.querySelector('.header-mob-menu');
    let mobMenuOpen = document.querySelector('.header-mob-open');
    let mobMenuBg = document.querySelector('.header-mob-menubg');
    let headerLogo = document.querySelector('.header-logo');
    let mobMenuClose = document.querySelector('.header-mob-close');


    mobMenuOpen.addEventListener('click', ()=>{
        if(mobMenu.classList.contains('active')) {
            headerLogo.classList.remove('active');
            mobMenuOpen.classList.remove('active');
            mobMenuBg.classList.remove('active');
            mobMenu.classList.remove('active');
        } else {
            headerLogo.classList.add('active');
            mobMenuOpen.classList.add('active');
            mobMenuBg.classList.add('active');
            mobMenu.classList.add('active');
        }
    })

    mobMenuClose.addEventListener('click', ()=>{
        if(mobMenu.classList.contains('active')) {
            headerLogo.classList.remove('active');
            mobMenuOpen.classList.remove('active');
            mobMenuBg.classList.remove('active');
            mobMenu.classList.remove('active');
        } else {
            headerLogo.classList.add('active');
            mobMenuOpen.classList.add('active');
            mobMenuBg.classList.add('active');
            mobMenu.classList.add('active');
        }
    })
}