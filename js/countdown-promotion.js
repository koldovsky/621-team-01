const countdown = () => {
    const countDate = new Date('April 24, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const seconds = 1000; 
    const minutes = seconds * 60; 
    const hours = minutes * 60; 
    const day = hours * 24;

    const textDay = Math.floor(gap / day);
    const textHours = Math.floor((gap % day) / hours);
    const textMinutes = Math.floor((gap % hours) / minutes);
    const textSeconds = Math.floor((gap % minutes) / seconds);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hours").innerText = textHours;
    document.querySelector(".minutes").innerText = textMinutes;
    document.querySelector(".seconds").innerText = textSeconds;


}

setInterval(countdown, 1000);

