//set minutes 
var mins = 2; 
var timeoutOne;
var timeoutTwo;
  
//calculate the seconds 
var secs = mins * 60; 

// Grab ahold of the dom elements needed
var video, resetBtn, volumeOn, volumeMute, time;

//countdown function is evoked when page is loaded 
function countdown() { 
    console.log(resetBtn.style)
    resetBtn.style.display = "none";
    timeoutOne = setTimeout('decrement()', 60); 
} 

//Decrement function decrement the value. 
function decrement() { 
    if (document.getElementById) { 
        minutes = document.getElementById("minutes"); 
        seconds = document.getElementById("seconds"); 
        //if less than a minute remaining 
        //Display only seconds value. 
        if (seconds < 59) { 
            minutes.innerHTML = 00;
            seconds.innerHTML = secs; 
        } 

        //Display both minutes and seconds 
        //getminutes and getseconds is used to 
        //get minutes and seconds 
        else { 
            minutes.innerHTML = getminutes(); 
            seconds.innerHTML = getseconds(); 
        } 
        //when less than a minute remaining 
        //colour of the minutes and seconds 
        //changes to red 
        if (mins < 1) { 
            // minutes.style.color = "red"; 
            // seconds.style.color = "red"; 
        } 
        //if seconds becomes zero, 
        //then page alert time up 
        if (mins < 0) {  
            minutes.innerHTML = 0; 
            seconds.innerHTML = "00";
            resetBtn.style.display = "block";
        } 
        //if seconds > 0 then seconds is decremented 
        else { 
            secs--; 
            timeoutTwo = setTimeout('decrement()', 1000); 
        } 
    } 
} 

function getminutes() { 
    //minutes is seconds divided by 60, rounded down 
    mins = Math.floor(secs / 60); 
    return mins; 
} 

function getseconds() { 
    var adjustedSeconds = secs - Math.round(mins * 60);
    var secString = "0" + adjustedSeconds
    //take minutes remaining (as seconds) away  
    //from total seconds remaining 
    if (adjustedSeconds === 0) {
        return "00";
    }
    // Checks to see if the number of seconds is less than ten seconds
    if (secString.length < 3) {
        return secString;
    }
    
    return adjustedSeconds; 
} 


// Reset Timer
function reset() {
    clearTimeout(timeoutOne);
    clearTimeout(timeoutTwo);
    mins = 2;
    secs = mins * 60;
    countdown();
}

// Play audio

function toggleAudio () {
    if (video.volume > 0) {
        video.volume = 0;
        volumeMute.style.display = "block";
        volumeOn.style.display = "none";
    } else {
        video.volume = .8;
        volumeMute.style.display = "none";
        volumeOn.style.display = "block";
    }
}


document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        toggleAudio();
    }
}

document.onmousemove = function () {
    reset();
};


window.onload = function () {
    video = document.getElementById("myVideo");
    resetBtn = document.getElementById("reset-btn");
    volumeOn = document.getElementById("volume-up");
    volumeMute = document.getElementById("volume-mute");
    time = document.getElementById("time");
    countdown();
}