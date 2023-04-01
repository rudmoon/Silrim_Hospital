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

function makingMap() {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
    center: new kakao.maps.LatLng(37.49255318116372, 127.04244271354173), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
};

// 지도를 생성한다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 지도에 마커를 생성하고 표시한다
var marker = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.49255318116372, 127.04244271354173), // 마커의 좌표
  map: map, // 마커를 표시할 지도 객체
});

marker.setMap(map);
}

// 모달창 구현시, 뒷배경 스크롤을 막아둠.
function disableScroll() {
    // 현재 스크롤 위치 저장
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // 스크롤 위치를 다시 설정하여 스크롤을 막음
window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
};
}

  // 스크롤 막기 해제
function enableScroll() {
    window.onscroll = function() {};
}

let modalButton = document.querySelector('.aside__doctors');
let modal = document.querySelector('#modal');
let modalXbutton = document.querySelector('.modal__xButton');
modalButton.addEventListener('click',() => {
    modal.style.display = 'flex';
    disableScroll();
});

modalXbutton.addEventListener('click',() => {
    modal.style.display = 'none';
    enableScroll();
})






// Arrow_totheTop Button
let Arrow_totheTop = document.querySelector('.aside__totheTop');
Arrow_totheTop.addEventListener('click',() => {
    window.scrollTo({
        top : 0,
        left : 0,
        behavior: 'smooth',
    })
})

function init() {
    scrollFadeOut();
    scrollFadein();
}

init();