//전역 변수들의 모음
let Start_img, Load_img, Exit_img; //시작하기, 이어하기, 종료하기 이미지


//시작할 때 필요한 데이터 올려놓기
//이미지 등 올려놓기
function init() {
    // 이미지 추가해야 함 (필요 시 코드 추가)
    
    // 스타트 이미지를 누르면 게임이 시작됨
    const start_img = document.getElementById("start");
    start_img.addEventListener('click', function() {
        // 게임 시작 로직 작성
        console.log("게임 시작!");
        // 예: 게임 상태 초기화, 화면 전환 등
    });
}

//페이지 로드
addEventListener('load', function(){
    init();
})