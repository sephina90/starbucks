// 뱃지영역(Lodash+GSAP)
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top'); // ScrollToPlugin에서 잘라붙임

//로대시 라이브러리 사용(스크롤이벤트가 발생하는 횟수를 임의로 줄여줌) _.throttle(함수, 시간)
window.addEventListener('scroll',_.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500){
    // 뱃지 숨기기
      //gsap.to(요소, 지속시간 , {옵션})
    gsap.to(badgeEl, 0.6 , {
      opacity:0, //요소를 시각적으로만 숨긴것
      display: 'none'  //요소를 실제로 제거
    });
    //스크롤 버튼 보이게
    gsap.to(toTopEl, 0.2, {
      x:0
    });
  } else {
    // 뱃지 보이기
    gsap.to(badgeEl, 0.6 , {
      opacity:1,
      display: 'block'   
    });
    //스크롤 버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x:100
    });
  }
}, 300)) //0.3s


// ScrollToPlugin
// const toTopEl = document.querySelector('#to-top'); *코드 최적화를 위해 위치변경*
// addEventListener(이벤트,실행할 함수(이벤트의 핸들러))
toTopEl.addEventListener('click', function(){ // 'click'이벤트에 대한 핸들러 ➜function(){} : 
  gsap.to(window, 0.7, {
    scrollTo:0 //ScrollToPlugin에서 가져온 옵션
  });
});


// 비주얼부분 순차적으로 나타내는 애니메이션효과
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){

  gsap.to(fadeEl, 1, {
    delay:(index+1) * .7, 
    opacity:1
  })
});


//수직 스와이퍼 new Swiper(선택자, {옵션})
new Swiper('.notice-line .swiper-container',{
  direction : 'vertical', //기본값 (direction:'horizontal')
  autoplay : true, //자동재생
  loop : true //반복재생
});

//수평 스와이퍼
new Swiper('.promotion .swiper-container',{
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번슬라이드가 가운데에 보이게
  loop: true, //반복재생
  autoplay: {
    delay: 5000 // 5s에 한번씩 슬라이드 재생(기본값은 3000(3초))
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지번호요소 선택자
    clickable: true //사용자가 페이지 번호요소를 제어 가능한가 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

//다중 요소 슬라이드(AWARDS)
// new Swiper(선택자,{옵션}) 
new Swiper('.awards .swiper-container',{
  autoplay: true, //자동재생
  loop: true, //반복재생
  spaceBetween: 30, //슬라이드간 여백 30px
  slidesPerView: 5, //한 화면당 보이는 슬라이드 갯수
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
}) 


//프로모션 토글버튼
const promotionEl = document.querySelector('.promotion');
const promotionTogglBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;//프로모션이 숨겨져있니? 아니 => 지금 현재 보이는 상태야
promotionTogglBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion //isHidePromotion의 부분에 false의 반대인 true가 할당되고 그값(true)이 if조건문으로 들어감
  if(isHidePromotion){
    //true면 숨김
    promotionEl.classList.add('hide') // hide는 css부분에서 제어
  }else{
    //false면 보임
    promotionEl.classList.remove('hide')
  }
});



//동영상 위에 float icon부분

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
//random(1,7): 최소1부터 최대7까지 랜덤한 수 반환

function floatingObject(selector, delay ,size){
  //gsap.to(css선택자=요소, 애니메이션 동작시간(초), {옵션})
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 지속시간을 1초 ➜ 1.5에서 2.5사이의 랜덤한 값으로 바꿈
    //옵션
    {
    y: size,//y축방향으로 20px움직임 ➜ size에서 지정한 픽셀만큼 내려오게 변경
    repeat: -1, // -1 : 무한반복
    yoyo: true, // yoyo : 한번 재생된 애니메이션을 뒤로 다시 재생하는 옵션
    ease: Power1.easeInOut, //gsap easing(움직이는 형태 변경)
    delay: random(0, delay) //지연시간 3초뒤 실행 ➜ 최소 0초에서 시작해서 최대 delay에 지정한 숫자까지로 지연시킴
    }
  );
}

//floatingObject(selector, delay(초) ,size(픽셀))
floatingObject('.floating1',1 ,15);
floatingObject('.floating2',0.5 ,15);
floatingObject('.floating3',1.5 ,20);


// ScrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) { //변수s.forEach() :변수s의 각각의 요소들을 반복
  new ScrollMagic
  //Scene():특정 요소를 감시하는 옵션 .setClassToggle(): 어떤 클래스를 넣었다뺏다(toggle) 할수있게 지정(set) .addTo():스크롤매직라이브러리에서 필요한 컨트롤러를 추가하기 위함
    .Scene({
      triggerElement: spyEl, // triggerElement: 보여짐 여부를 감시할 요소(spyEl)
      triggerHook: 0.8, //  triggerHook: 뷰포트의 80%지점에 걸리면 어떠한 내용이 트리거(실행)됨 , /
    })
    .setClassToggle(spyEl, 'show') //.setClassToggle(토글할요소,토글할클래스명): 실행
    .addTo(new ScrollMagic.Controller()); // 새롭게 할당한 ScrollMagic에 추가한 옵션들을 내부의 Controller에 내용을 할당해서 실제로 동작하도록 함
  
});


