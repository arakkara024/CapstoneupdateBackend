
// ===================================================================== SOUND EFFECTS ================================================================

// Sound Effects
let sfxMusic = new Audio ("Audio/SFX/Click.mp3");

// Play sfxMusic if button is click

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


// Function for Exit Button
let exitModal = document.getElementById("exit-modal");

let backBtn = document.getElementById("back").addEventListener("click", function() {
    exitModal.style.display = "grid";
});

// Function for closing exit modal
let exitClose = document.getElementById("no").addEventListener("click", function() {
    exitModal.style.display = "none";
});

// ===================================================================== SETTING FUNCTIONS ============================================================