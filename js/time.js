function updateTimerDisplay(minutes, seconds) {
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('time').textContent = display;
}

function startTimer(duration) {
    let totalSeconds = duration;
    const timerInterval = setInterval(() => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        updateTimerDisplay(minutes, seconds);

        if (totalSeconds === 0) {
            clearInterval(timerInterval);
        }

        totalSeconds--;
        localStorage.setItem('quizTimer', totalSeconds);
    }, 1000);
}

const storedTimer = localStorage.getItem('quizTimer');
const defaultDuration = 3000; 

if (storedTimer !== null) {
    startTimer(parseInt(storedTimer, 10));
} else {
    startTimer(defaultDuration);
    localStorage.setItem('quizTimer', defaultDuration);
}