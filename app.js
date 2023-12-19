let [seconds, minutes, hours] = [0,0,0];
const displayTimeEl = document.getElementById('display-time');
let timer = null;

//time counter
function  stopWatch(){
    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++
    }
    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    displayTimeEl.innerHTML = `${hours}:${minutes}:${seconds}`;
}

//stop watch start button function 
function startWatch(){
    if(timer !== null){
        clearInterval(timer);
    }
    setInterval(stopWatch, 1000);
}



