// Log In js 


// let relay = document.getElementById("relay");
// let topLogBtn = document.getElementById("log-in-div-btn");
// let topRegBtn = document.getElementById("register-div-btn");
// let dualForm = document.getElementById("dual-form");

// // Top Log in Button Function

// topLogBtn.addEventListener("click", function() {
//     relay.classList.remove("relay-btn-active");
//     dualForm.classList.remove("register-form-active");
// });

// // Top Register Button Function

// topRegBtn.addEventListener("click", function() {
//     relay.classList.add("relay-btn-active");
//     dualForm.classList.add("register-form-active");
// });


// settings 
// let settingBtn = document.getElementById("setting-btn").addEventListener("click", function() {
//     settingModal.style.display = "grid";
// });
// let settingModal = document.getElementById("setting-modal");
// let closeSettings = document.getElementById("close").addEventListener("click", function() {
//     settingModal.style.display = "none";
// });

let timer = 0;
let percentage = 0;
let loadInterval;
let percentText = document.getElementById("percent-container");
window.onload = function(){
    percentText.classList.add("fadeIn-animation")
    setTimeout(loadInterval = setInterval(percentInterval,1500), 0);
};

function percentInterval() {

    if(timer<6){
        percentText.innerHTML = percentage + "<span class='percent-span'>%</span>";
        percentage += 20;
        timer++;
    } else{
        percentText.innerHTML = "Click Here";
        percentText.classList.add("blinkingClickHere");
        percentText.removeAttribute("disabled", "disabled");
        clearInterval(loadInterval);
        percentText.addEventListener("click", loadingFadeOut);

    }
        
}


// For Panel Audio

let panelAudio = document.createElement('audio');
let audioList = 0;

//Audio Track Elements
let panelAudioTrack = [

    {
        path: "Audio/storyboard-audio/Panel1.mp3"
    },

    {
        path: "Audio/storyboard-audio/Panel2.mp3"
    },

    {
        path: "Audio/storyboard-audio/Panel3.mp3"
    },

    {
        path: "Audio/storyboard-audio/Panel4.mp3"
    },

    {
        path: "Audio/storyboard-audio/Panel5.mp3"
    },

    {
        path: "Audio/storyboard-audio/Panel6.mp3"
    },

    {
        path: "Audio/storyboard-audio/Panel7.mp3"
    },

];



//Load Track 
function trackLoad(){  
    console.log("hello");
    if(audioList>panelAudioTrack.length-1){
        panelAudio.pause();
    }else{  
        panelAudio.src = panelAudioTrack[audioList].path;
        panelAudio.load();
    }
}

trackLoad();

function playAudio() {
    panelAudio.play();
}

// If Audio ended, it will play the next audio
panelAudio.onended = function() {
    if(audioList>=panelAudioTrack.length-1) {
        panelAudio.pause();
    } else {
        audioList += 1;
        trackLoad();
        playAudio();
    }
    
}



// This Function is for fadeOut of Loading div and fade in of storyboard

let loaderWrapper = document.getElementById("loader-wrapper");

// Storyboard Variables
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
let image5 = document.getElementById("image5");
let image6 = document.getElementById("image6");
let image7 = document.getElementById("image7");
let continueBtn = document.getElementById("continue-btn");
let openBtn = document.getElementById("open");
let storyBoard = document.getElementById("storyboard");
let startBtn = document.getElementById("start-btn");

function loadingFadeOut() {
    loaderWrapper.classList.add("loadingFadeOut");
    setTimeout(function(){
        loaderWrapper.style.display = "none";
    },2000);

    // this will start the animation of Storyboard boxes

    image1.classList.add("animation");  
    image2.classList.add("animation");
    image3.classList.add("animation");
    image4.classList.add("animation");
    image5.classList.add("animation");
    image6.classList.add("animation");
    image7.classList.add("animation");
    continueBtn.classList.add("animation");

    setTimeout(playAudio, 1000);
}


// let loaderContainer = document.getElementById("loader-container");

// loaderContainer.addEventListener("click", function(){
//     loaderContainer.style.display = "none";
// });

// console.log(loaderContainer)



