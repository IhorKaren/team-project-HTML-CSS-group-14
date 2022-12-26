const slider = document.querySelector('#gallery')
const sliderItems = Array.from(gallery.children);

Array.from(sliderItems).forEach(function (slide, index) {

    if (index !== 0) {
        slide.classList.add('hidden');
    }

    slide.dataset.index = index;


    slide.addEventListener('click', function () {
        slide.classList.add('hidden');

        let nextSlideIndex;
        if (index + 1 === sliderItems.length) {
            nextSlideIndex = 0;
        } else {
            nextSlideIndex = index + 1
        }

        const nextSlide = gallery.querySelector(`[data-index="${nextSlideIndex}"]`);
        
        nextSlide.classList.remove('hidden')
    })
})