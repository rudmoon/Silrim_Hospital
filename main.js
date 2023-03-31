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

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var iwContent = '<div style="padding:5px;">Hello World! <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker); 


function init() {
    scrollFadeOut();
    scrollFadein();
}

init();