let end = new Date('2022-09-23T17:00:00');

setInterval(function(){
    let today = new Date();

    let days    = Math.floor( end.valueOf()/1000/60/60/24 - today.valueOf()/1000/60/60/24 );
    let hours   = Math.floor( end.valueOf()/1000/60/60    - today.valueOf()/1000/60/60    ) - days*24;
    let minutes = Math.floor( end.valueOf()/1000/60       - today.valueOf()/1000/60       ) - days*24*60; //fel
    let seconds = Math.floor( end.valueOf()/1000          - today.valueOf()/1000          ) - days*24*60*60; //fel
    
    document.getElementById('daySpan').innerHTML    = days;
    document.getElementById('hourSpan').innerHTML   = hours;
    document.getElementById('minuteSpan').innerHTML = minutes;
    document.getElementById('secondSpan').innerHTML = seconds;

},1000);



