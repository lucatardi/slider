function createSlider (elm) {

    const thumbnails = elm.querySelectorAll('.thumbnails > button')
    const slides = elm.querySelectorAll('.slide')
    const [prev, next] = elm.querySelectorAll('.controls > button')
    let currentSlideIndex = 0;
    let timerId;

    prev.addEventListener('click', () => setActiveSlide(currentSlideIndex - 1));
    next.addEventListener('click', () => setActiveSlide(currentSlideIndex + 1));

    thumbnails.forEach((thumbnail, index) => thumbnail.addEventListener('click', () => setActiveSlide(index)) );

    function setActiveSlide (newSlideIndex) {
        clearInterval(timerId)
        if (newSlideIndex > slides.length - 1) {
            newSlideIndex = 0;
        } if (newSlideIndex < 0) {
            newSlideIndex = slides.length - 1;
        }
        currentSlideIndex = newSlideIndex;
        slides.forEach((slide, index) => slide.style.display = currentSlideIndex !== index ? 'none' : 'block');
        thumbnails.forEach((thumbnail, index) => thumbnail.setAttribute('data-current', currentSlideIndex === index));
        timerId = setInterval(() => setActiveSlide(currentSlideIndex + 1), 3000)
    }

    setActiveSlide(currentSlideIndex);
}

createSlider(document.querySelector('.container'));