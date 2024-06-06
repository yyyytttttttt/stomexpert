var texts = [
  {
      para1: 'Мы запустили свой сайт, теперь мы сможем прийти на помощь еще быстрее',
      para2: 'Наш новый сайт делает стоматологию удобнее! Запишитесь на прием, получите консультацию и узнайте стоимость услуг — всё это онлайн, быстро и легко. Экономьте время и дарите улыбку себе с помощью пары кликов!'
  },
  {
      para1: 'Прозрачные элайнеры для исправления прикуса',
      para2: 'Почему стоит выбрать элайнеры? Невидимы , Комфортны , Эффективны , Легки в уходе , Персонализированы'
  },
  {
      para1: 'Первое впечатление важно !',
      para2: 'Получите скидку  5%  на первое посещение и убедитесь в нашем профессионализме и заботе'
  },
  {
    para1: 'Мы запустили свой сайт, теперь мы сможем прийти на помощь еще быстрее',
    para2: 'Наш новый сайт делает стоматологию удобнее! Запишитесь на прием, получите консультацию и узнайте стоимость услуг — всё это онлайн, быстро и легко. Экономьте время и дарите улыбку себе с помощью пары кликов!'
  },
  {
    para1: 'Прозрачные элайнеры для исправления прикуса',
    para2: 'Почему стоит выбрать элайнеры? Невидимы , Комфортны , Эффективны , Легки в уходе , Персонализированы'
  }
  
  
];


const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    
  },
  effect: 'coverflow',
  
  
  loop: true,
  slidesPerView: 'auto',
  
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: false,
    
  },
  
  spaceBetween: 13,
  slideToClickedSlide:true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  createElements:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  speed:900,
  on: {
    slideChange: function () {
        var currentText = texts[this.realIndex];
        document.querySelector('.paragraph-1').textContent = currentText.para1;
        document.querySelector('.paragraph-2').textContent = currentText.para2;
    }
  
  
}

  
 
});
var initialText = texts[swiper.realIndex];
document.querySelector('.paragraph-1').textContent = initialText.para1;
document.querySelector('.paragraph-2').textContent = initialText.para2;

  
  




  
  


