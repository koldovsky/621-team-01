const openMobileMenuButton = document.querySelector('.open-mobile-menu-js');
const closeMobileMenuButton = document.querySelector('.close-mobile-menu-js');
const mobileMenu = document.querySelector('.title-page');

openMobileMenuButton.addEventListener('click', showMobileMenu);
closeMobileMenuButton.addEventListener('click', hideMobileMenu);

function showMobileMenu(){
    openMobileMenuButton.style.display = 'none';
    closeMobileMenuButton.style.display = 'block';
    mobileMenu.style.display = 'block';
}

function hideMobileMenu(){
    openMobileMenuButton.style.display = 'block';
    closeMobileMenuButton.style.display = 'none';
    mobileMenu.style.display = 'none';
}

