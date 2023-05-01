var sliderElement = document.querySelector('.main-container'),
    sliderSlides = sliderElement.querySelectorAll('.page, .page-graph, footer'),
    page = 0;


// find the page that is in view
function findCurrentPage() {
    var i = 0;
    for (i = 0; i < sliderSlides.length; i++) {
        if (sliderSlides[i].getBoundingClientRect().top >= 0 && sliderSlides[i].getBoundingClientRect().top <= 100) {
            return i;
        }
        if (sliderSlides[i].getBoundingClientRect().top > 0) {
            return i - 0.5;
        }

    }
    return i - 1;
}


let scrollend = () => {
    return scrolling = false;
};

if ('onscrollend' in window) {
    sliderElement.onscrollend = scrollend
  }
  else {
    sliderElement.onscroll = event => {
      clearTimeout(sliderElement.scrollEndTimer)
      sliderElement.scrollEndTimer = setTimeout(scrollend, 40)
    }
  }

scrolling = false;

// scroll to next slide upon mousewheel scroll
sliderElement.addEventListener('mousewheel', function (e) {
    e.preventDefault()
    if (scrolling) {
        return
    }
    page = findCurrentPage();
    
    var delta = e.wheelDelta;
    if (delta < 0) {
        page = Math.floor(page) + 1;
        
        if (page > sliderSlides.length - 1) {
            page = sliderSlides.length - 1;
            scrolling = false;
            return;
        }

        
        sliderSlides[page].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"});
        scrolling = true;
    } else {
        page = Math.ceil(page) - 1;
        if (page < 0) {
            page = 0
            scrolling = false;
            return;
        }
        sliderSlides[page].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        scrolling = true;

    }
})