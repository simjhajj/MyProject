// script for navbar toggle during responisve size
document.addEventListener('DOMContentLoaded', function () {
    const allIcon = document.querySelector('.panel-all');
    const mobileNav = document.getElementById('mobileNav');

    allIcon.addEventListener('click', function () {
        mobileNav.classList.toggle('show');
    });
});
