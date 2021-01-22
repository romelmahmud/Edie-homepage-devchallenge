

const navSlide = () => {
   const burger = document.querySelector('.burger-menu');
   const nav = document.querySelector('header nav ul');

   burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
   })
}

navSlide();