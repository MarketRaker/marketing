const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;


//arrage slides nect to each other
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

// slides.forEach((slide,index) =>{
//     slide.style.left = slideWidth * index + 'px';
// })

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index +'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track,currentSlide,targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    
}

const updateDots = (currentDot,targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
    

}



//when click left, move slide to left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;

    const currentDot = dotsNav.querySelector('.current-slide');
    let prevDot = currentDot.previousElementSibling;

    if (!prevSlide) {
        const last = track.children.length-1
        prevSlide = track.children[last]
        prevDot = dotsNav.children[last]
    }
    
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot,prevDot);
    
    
})

//when click right, move slide to right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    let nextDot = currentDot.nextElementSibling;

    if (!nextSlide) {
        nextSlide = track.children[0]
        nextDot = dotsNav.children[0]
    }

    moveToSlide(track, currentSlide, nextSlide);
    updateDots (currentDot,nextDot) ;

    
    // const amountToMove = nextSlide.style.left;
    // //move to the next slide
    // track.style.transform = 'translateX(-' + amountToMove + ')';
    // currentSlide.classList.remove('current-slide');
    // nextSlide.classList.add('current-side');

    
   
})
//when click nav indicator, move to that slide
dotsNav.addEventListener('click', e=>{
    //what indicator was clicked on?
    const targetDot = e.target.closest('button');

    // console.log('test1');
    // if(!targetDot) return;
    // console.log('test2');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots (currentDot,targetDot) ;

    // currentDot.classList.remove('current-slide');
    // targetDot.classList.add('current-slide');

    


})
