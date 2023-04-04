const el = document.querySelector(".bg-graph-mask");

let isMouseHover = false

el.addEventListener("mouseleave", function (event) {
    isMouseHover = false
}, false);
el.addEventListener("mouseover", function (event) {
    isMouseHover = true
}, false);

document.addEventListener("mousemove", (e) => {

    // const x = e.clientX / window.innerWidth;
        el.setAttribute("style", `-webkit-mask-position-x:${e.clientX - 150}px; opacity:${isMouseHover? 1: 0}`);
    // el.style.maskPositionX = `${x * 100}%`;
    // el.style.width = `${x * 100}vw`
});





