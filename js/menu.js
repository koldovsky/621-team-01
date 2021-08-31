(function() {

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

    function showBurgerControls() {
        if (window.innerWidth < 990) {
            openMobileMenuButton.style.display = 'block';
            mobileMenu.style.display = 'none';
        } else {
            openMobileMenuButton.style.display = 'none';
            mobileMenu.style.display = 'flex';
        }
    }

    showBurgerControls();
    window.addEventListener('resize', showBurgerControls);
    
})();
