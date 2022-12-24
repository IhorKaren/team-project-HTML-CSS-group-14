// главный слайдер
const slider = document.querySelector('#slider')
const sliderItems = Array.from(slider.children);


sliderItems.forEach(function (slide, index) {
    console.log(slide);

    
// скрыла все слайды, кроме первого
    if (index !== 0) {
        slide.classList.add('hidden')
    }

// добавила индексы
    slide.dataset.index = index;

// клик по слайдам
     slide.addEventListener('click', function () {
       
        // скрыла текущий слайд
        slide.classList.add('hidden');
       
        // рассчитала индекс след слайда
         let nextSladeIndex;
         if (index + 1 === sliderItems.length) {
             nextSladeIndex = 0;
         } else {
             nextSladeIndex = index + 1
         }
        
        //  нашла след слайд
        const nextSlide = slider.querySelector(`[data-index="${nextSladeIndex}"]`);

        // отобразила след слайд
         nextSlide.classList.remove('hidden');
         
     })

});

$('.slider-dots').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

$('.slider-dots .slider-dots__item').click(function() {
  var $this = $(this);
  $('.slider-dots').slick('slickGoTo', $this.data('index'))
});


