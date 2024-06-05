window.addEventListener('scroll', function () {
    const scrollValue = window.scrollY;
    const image = document.querySelector('.scroll-slide-img');
    const imageWidth = image.offsetWidth;
    const viewportWidth = window.innerWidth;
    const maxTranslation = viewportWidth - imageWidth;
    image.style.transform = `translateX(${Math.min(scrollValue, maxTranslation)}px)`;
});