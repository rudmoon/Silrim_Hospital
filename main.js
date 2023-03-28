let header = document.querySelector('#header');
let slider = document.querySelector('.header__slider');
let slides = document.querySelectorAll('.slide');
let slidesCount = slides.length;
let currentIndex = 0;
let square = document.querySelectorAll('.square');

// slides를 각각 left값을 줘서 옆으로 배열하기(안건드리면 겹쳐있는 상태)

for(let i=0; i<slidesCount; i++) {
    slides[i].style.left = i*100 + '%';
}

// Slider(ul)덩어리를 이동하는 함수
function gotoSlide(idx) {
    slider.style.left = -idx * 100 + '%';
    currentIndex = idx;
    for(let i=0; i<square.length; i++) {
        square[i].classList.remove('animated');
    }
}

// Square 마다 gotoSlide 부여하기
for(let i=0; i<square.length; i++) {
    square[i].addEventListener('click',(ev) => {    
        slider.classList.add('active');
        gotoSlide(i);
        square[ev.target.dataset.number].classList.add('animated');
    })
}

gotoSlide(0);
square[0].classList.add('animated');

// fadeInbtn에서 높이구하기(가장 높은것으로)

let content = document.querySelector('#content');
let contents = document.querySelector('.content__fadeIn');
let fadeInBtn = document.querySelectorAll('.fadeInBtn');


function scrollFadein() {
    window.addEventListener('scroll',() => {
        if(window.innerHeight>contents.getBoundingClientRect().top) {
            for(let i=0; i<fadeInBtn.length; i++) {
                fadeInBtn[i].classList.add('active');
            }
        }
    })
}
function scrollFadeOut() {
    window.addEventListener('scroll',() => {
        if(window.innerHeight<contents.getBoundingClientRect().top) {
            for(let i=0; i<fadeInBtn.length; i++) {
                fadeInBtn[i].classList.remove('active');
            }
        }
    })
}


function init() {
    scrollFadeOut();
    scrollFadein();
}

init();