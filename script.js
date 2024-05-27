function startCountdown(endDate) {
    const timer = document.querySelector('#timer');
    const targetDate = new Date(endDate).getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            timer.textContent = "00:00:00:00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.textContent = 
            (days < 10 ? '0' : '') + days + ':' +
            (hours < 10 ? '0' : '') + hours + ':' +
            (minutes < 10 ? '0' : '') + minutes + ':' +
            (seconds < 10 ? '0' : '') + seconds;
    }, 1000);
}

window.onload = function () {
    startCountdown("June 16, 2024 00:00:00");
};
