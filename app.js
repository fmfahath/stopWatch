let [seconds, minutes, hours] = [0,0,0];
const displayTimeEl = document.getElementById('display-time');
let timer = null;

//time counter
function  stopWatch(){
    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }
    if(minutes == 60){
        minutes = 0;
        hours++; 
    }

    //display as two digit number
    let sec = seconds < 10 ? "0" + seconds : seconds;
    let min = minutes < 10 ? "0" + minutes : minutes;
    let hrs = hours < 10 ? "0" + hours : hours;

    displayTimeEl.innerHTML = `${hrs}:${min}:${sec}`;
}

//stop watch start button function 
function startWatch(){  
    if(timer !== null){
        clearInterval(timer);
    }

    timer = setInterval(stopWatch, 1000);
}

//stop timer 
function stopTimer(){
    clearInterval(timer);
}

//reset timer
function resetTimer(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTimeEl.innerHTML = "00:00:00";
}








