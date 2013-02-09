function countdownTime () {
    var countdown_d, countdown_h, countdown_m, countdown_s;
    var endTime = new Date(2013, 1, 14, 7, 0, 0);
    var timeNow = new Date();
    var diffTime = endTime - timeNow;
    diffTime = Math.floor(diffTime/1000);
    countdown_d = Math.floor(diffTime / 86400);
    diffTime = diffTime % 86400;
    countdown_h = Math.floor(diffTime / 3600);
    diffTime = diffTime % 3600;
    countdown_m = Math.floor(diffTime / 60);
    countdown_s = diffTime % 60;

    if(countdown_s < 10) ausgabe_s = '0'+countdown_s;
    else ausgabe_s = countdown_s;
    if(countdown_m < 10) ausgabe_m = '0'+countdown_m;
    else ausgabe_m = countdown_m;
    if(countdown_h < 10) ausgabe_h = '0'+countdown_h;
    else ausgabe_h = countdown_h;

    return countdown_d + ':' + ausgabe_h + ':' + ausgabe_m + ':' + ausgabe_s;
}

$(document).ready(function(){
    $('#counter').countdown({
      image: 'images/digits.png',
      startTime: countdownTime()
    });
  }
);
