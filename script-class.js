class Slider {
    constructor (elm) {
        this.slides = elm.querySelectorAll('.slide')
        this.thumbnails = elm.querySelectorAll('.thumbnails > *')
        this.currentSlideIndex = 0

        elm.querySelector('.prev').addEventListener('click', this.previous.bind(this))
        elm.querySelector('.next').addEventListener('click', this.next.bind(this))
        this.thumbnails.forEach((thumbnail, index) => thumbnail.addEventListener('click', this.setCurrentSlide.bind(this, index)))
        this.intervalId
        this.showCurrentSlide()
        this.showCurrentThumbnails()
        this.slideshow()
    }

    previous() {
        const TARGET_SLIDE_INDEX = this.currentSlideIndex < 1 
            ? this.slides.length - 1 
            : this.currentSlideIndex - 1;
        this.setCurrentSlide(TARGET_SLIDE_INDEX)
    }

    next() {
        const TARGET_SLIDE_INDEX = this.currentSlideIndex < this.slides.length - 1 
        ? this.currentSlideIndex + 1 
        : 0;
        this.setCurrentSlide(TARGET_SLIDE_INDEX)
    }

    setCurrentSlide(newActiveSlideIndex) {
        this.currentSlideIndex = newActiveSlideIndex
        this.showCurrentSlide()
        this.showCurrentThumbnails()
        this.slideshow()
    }

    showCurrentSlide() {
        this.slides.forEach(
            (node, index) => 
                node.style.display = 
                    index == this.currentSlideIndex ? 'block' : 'none')
    }

    showCurrentThumbnails() {
        this.thumbnails.forEach(
            (node, index) =>  node.setAttribute('data-current', index === this.currentSlideIndex))
    }

    slideshow() {
        clearInterval(this.intervalId)
        this.intervalId = setInterval(this.next.bind(this), 3000)
    }
}

new Slider(document.querySelector('.container'))