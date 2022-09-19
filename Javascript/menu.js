let bgMusic = new Audio ("Audio/BGM/Title.mp3");

let timer = 0;
let percentage = 0;
let loadInterval;
let loaderWrapper = document.getElementById("loader-wrapper");
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


function loadingFadeOut() {
    loaderWrapper.classList.add("loadingFadeOut");
    setTimeout(function(){
        loaderWrapper.style.display = "none";
    },2000);
    bgMusic.play();
    bgMusic.setAttribute("loop", "loop");
}


// ===================================================================== BACKGROUND MUSIC =============================================================

// Background Volume Controller Function
let bgVolume = document.getElementById("bgVolume");

function bgVolumeAdjust() {
        bgMusic.volume = bgVolume.value / 100;
}

// ===================================================================== BACKGROUND MUSIC =============================================================



// ===================================================================== SOUND EFFECTS ================================================================

// Play sfxMusic if button is click
let sfxMusic = new Audio ("Audio/SFX/Click.mp3");

function buttonClick() {
    sfxMusic.play();
}

// Background Volume Controller Function
let sfxVolume = document.getElementById("sfxVolume");

function sfxVolumeAdjust() {
        sfxMusic.volume = sfxVolume.value / 100;
}

// ===================================================================== SOUND EFFECTS ================================================================


// ===================================================================== SETTING FUNCTIONS ============================================================


// Setting Modal codes
let settingModal = document.getElementById("setting-modal");

let settingBtn = document.getElementById("setting-btn").addEventListener("click", function() {
    settingModal.style.display = "grid";
});

// Function for Closing Setting Modal
let closeSettings = document.getElementById("close").addEventListener("click", function() {
    settingModal.style.display = "none";
});

// ===================================================================== SETTING FUNCTIONS ============================================================
