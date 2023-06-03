let btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./assets/images/menu/menu-aberto.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./assets/images/menu/menu-fechado.svg";
    };
});