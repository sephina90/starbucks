// YouTube IFrame Player API

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//onYouTubeIframeAPIReady() 이 함수명은 임으로 바꾸면 안됨, 외부에서 가져온 유튜브라이브러리에서 함수명을 찾기 때문에
function onYouTubeIframeAPIReady() {
   // 여기서 말하는 player 부분은 HTML에서 <div id="player"></div> 를 의미하므로  #을 붙이지 않는다! 
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',// 최초 재생할 유튜브 영상의 ID값
    playerVars: { //  playerVars(영상재생을 위한 변수들의 옵션) 
    autoplay: true, //자동재생
    loop: true, //반복재생
    playlist:'An6LvWQuj_8',//반복재생할 유튜브 영상의 ID값(loop: true 인경우 같이 넣어야 함)
    },
    //동영상 플레이어가 준비가 되면 아래 익명함수를 실행하게되고 함수를 실행할때 준비된 영상을 음소거로 처리하겠다 
    events: {
      onReady: function(event){
        event.target.mute() //해당 재생영상(target)음소거
      }
    }
    

  });
}