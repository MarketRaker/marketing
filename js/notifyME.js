
//Modal Items

const emailModalBackdrop = document.getElementById('email-modal');
const thanksModalBackdrop = document.getElementById('thanks-modal');

const notifyMeBtn = document.querySelector('.notify-me');
const subscribeBtn = document.getElementById('subscribe-btn');

const closeBtn = document.querySelector('.modal-close-btn');
const thanksCloseBtns = document.getElementsByName('thanks-modal-close-btn');
console.log(thanksCloseBtns)
//Click Events
subscribeBtn.addEventListener('click', () => {
    emailModalBackdrop.style.display = 'none'
    thanksModalBackdrop.style.display = 'flex';

});

thanksCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        thanksModalBackdrop.style.display = 'none';
    })
    
});


//Click Events
notifyMeBtn.addEventListener('click', () => {
    emailModalBackdrop.style.display = 'flex';

});

closeBtn.addEventListener('click', () => {
    emailModalBackdrop.style.display = 'none';
})

window.addEventListener('click', (e) => {
    if (e.target === emailModalBackdrop) {
        emailModalBackdrop.style.display = 'none';
    }

    if (e.target === thanksModalBackdrop) {
        thanksModalBackdrop.style.display = 'none';
    }


})

