document.getElementById('celebrateBtn').addEventListener('click', function() {
    // 축하 메시지와 이미지 보이기
    document.getElementById('celebration').classList.remove('hidden');
    this.style.display = 'none'; // 버튼 숨기기

    // 색종이 애니메이션 효과
    const confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * -100 + 'vh'; // 화면 위에서 시작
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);
    }
});

function getRandomColor() {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800'];
    return colors[Math.floor(Math.random() * colors.length)];
}