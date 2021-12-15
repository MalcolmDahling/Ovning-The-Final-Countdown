let end = new Date('2022-09-23T17:00:00');

setInterval(function(){
    let today = new Date();
    let diff = end - today;

    let days = Math.floor(diff/1000/60/60/24);
    let hours = Math.floor(diff/1000/60/60 - days*24);
    let minutes = Math.floor(diff/1000/60 - days*24*60 - hours*60);
    let seconds = Math.floor(diff/1000 - days*24*60*60 - hours*60*60 - minutes*60);


    
    document.getElementById('daySpan').innerHTML    = days;
    document.getElementById('hourSpan').innerHTML   = hours;
    document.getElementById('minuteSpan').innerHTML = minutes;
    document.getElementById('secondSpan').innerHTML = seconds;

},1000);



