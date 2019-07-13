function parallax(element, distance,speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;

}

window.addEventListener("scroll",function(){
    parallax('#cpp',window.scrollY,.2);
    parallax('#photoshop',window.scrollY,.05);
    parallax('#js',window.scrollY,.1);
    parallax('#css',window.scrollY,.3);
    parallax('.main',window.scrollY,.7);
   

});
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navUl');
    const navLinks = document.querySelector('.navUl li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.classList.toggle('navList-act');
        burger.classList.toggle('toggle');
    });

}


navSlide();

