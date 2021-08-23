const countdownDate = new Date("May 25, 2022 14:25:33").getTime();
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance/(1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = days + "days " + hours + "hours " + minutes + "minutes " + seconds + "seconds ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = "EXPIRED";
    }
}, 1000);
