function clock(){
    var date = new Date(),
           hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
           minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
           seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
           prepand = (hours >= 12)? " PM ":" AM "; hours = (hours >= 12)? hours - 12: hours;
    document.getElementById('clock-header').innerHTML = hours + ':' + minutes + ':' + seconds + prepand;
  }
  setInterval(clock, 1000);
  clock();
