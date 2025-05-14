const content = document.getElementById('content');
const character = document.querySelector('.character');
const moveLeftButton = document.getElementById('move-left');
const moveRightButton = document.getElementById('move-right');
let characterPos = { x: 10 };  // 캐릭터의 시작 위치 (10vw)

let sectionWidth = 100;  // 각 구역의 너비
let totalSections = 3;  // 구역의 수 (상점, 농장, 가축)
let maxX = sectionWidth * totalSections - sectionWidth;  // 캐릭터가 이동할 수 있는 최대 x 값

// 캐릭터 이동 함수
function moveCharacter(dx) {
    let newPosX = characterPos.x + dx;

    // 캐릭터가 이동 범위를 벗어나지 않도록 제한
    if (newPosX < 0 || newPosX > maxX) return;

    characterPos.x = newPosX;
    character.style.left = characterPos.x + 'vw';  // 캐릭터의 새로운 x 위치 설정

    // 카메라(맵) 이동: 캐릭터 위치에 맞게 콘텐츠 영역을 이동
    content.style.transform = `translateX(-${characterPos.x}vw)`;
}

// 왼쪽으로 이동
moveLeftButton.addEventListener('click', () => {
    moveCharacter(-10);  // 왼쪽으로 10vw 이동
});

// 오른쪽으로 이동
moveRightButton.addEventListener('click', () => {
    moveCharacter(10);  // 오른쪽으로 10vw 이동
});
