window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.querySelector('#linkedin').addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://www.linkedin.com/in/hoang-minh-quan-32095428b/');
});

document.querySelector('#github').addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://github.com/minhquan490');
});

document.querySelector('#facebook').addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://www.facebook.com/profile.php?id=100009585947523&mibextid=b06tZ0')
});

document.querySelector('#gitProject').addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://github.com/minhquan490/Order-Shop');
});