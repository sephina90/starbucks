// 헤더영역의 검색창
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


searchEl.addEventListener('click', function(){
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused'); // 포커스드라는 클래스 추가
  searchInputEl.setAttribute('placeholder','통합검색');//인풋요소에 플레이스홀더 속성을 추가하고 그것의 값은 통합검색임
})

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused'); 
  searchInputEl.setAttribute('placeholder','');
})


// Footer영역 올해연도
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //Date(현재날짜를 뽑아내는 객체)라는 생성자 함수 생성 getFullYear: 현재 연도를 숫자데이터로 반환함