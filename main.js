let hours = document.getElementById("hours");
let minutes = document.getElementById("mins");
let seconds = document.getElementById("sec");
let time = document.getElementById("time");
let toggle = document.getElementById("toggle");


function showtime(){
    let now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }else{
        hours = hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }else{
        minutes = minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds; 
    }else{
        seconds = seconds;
    }
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    if(time < 10){
        document.getElementById("time").innerHTML = "AM";
    }else{
        document.getElementById("time").innerHTML = "PM";
    }
}
showtime();
setInterval(showtime, 1000);
toggle.addEventListener('click', toggleShow);

function toggleShow(){
    document.getElementById("clock").classList.toggle('active');
    document.getElementById("hr").classList.toggle('active');
    document.getElementById("ss").classList.toggle('active');
    document.getElementById("mm").classList.toggle('active');
}