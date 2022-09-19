
// ============================================================== LOADING PAGE =======================================================================

// This function Will run when the page loads
window.onload = function() {
    setTimeout(function() {
       let arviText = document.getElementById("arvi-text")
       arviText.innerHTML = "Click Here";
       arviText.style.cursor = "pointer";
       
       // Funcion for Click Here
       arviText.addEventListener("click", function() {
            let loader2Wrapper = document.getElementById("loader2-wrapper");
            loader2Wrapper.classList.add("loadingFadeOut");

            // TimeOut function for playing background music (1 second Delay after click)
            setTimeout(function(){
                bgMusic.play();
                bgMusic.setAttribute("loop", "loop");
            },1000);

            // TimeOut function for hiding the loader2Wrapper (2 Second Delay)
            setTimeout(function(){
                loader2Wrapper.style.display = "none";
            },1000);
            
       });
    }, 10000);
};

// ============================================================== LOADING PAGE =======================================================================



// ============================================================== BACKGROUND MUSIC ===================================================================

let bgMusic = new Audio ("Audio/BGM/Map.mp3");

// Background Volume Controller Function
let bgVolume = document.getElementById("bgVolume");

function bgVolumeAdjust() {
        bgMusic.volume = bgVolume.value / 100;
}

// ============================================================== BACKGROUND MUSIC ===================================================================


// Variables
let mainContainer = document.getElementById("main");
let leftBtn = document.querySelector(".left-btn");
let rightBtn = document.querySelector(".right-btn");
let initialPosition = 0;
let count = 0;

// ============================================================== BACKGROUND MUSIC ===================================================================

// ==============================================================  ARROW FUNCTIONS ===================================================================

// Function for Right Button

rightBtn.addEventListener("click", function() {
    sfxMusic.play();
    count++;
    console.log(count);
    initialPosition += -10;
    mainContainer.style.transform = 'translateX(' + initialPosition + '%)';
    leftBtn.style.display = "block";   

    if (count === 9) {
        rightBtn.style.display = "none";
    }
});

// Function for Left Button

leftBtn.addEventListener("click", function() {
    sfxMusic.play();
    count--;
    console.log(count);
    initialPosition -= -10;
    rightBtn.style.display = "block"; 
    mainContainer.style.transform = 'translateX(' + initialPosition + '%)';
    if(count === 0) {
        leftBtn.style.display = "none";
    }
});

// ==============================================================  ARROW FUNCTIONS ===================================================================

// // Function for Setting Button
// let settingBtn = document.getElementById("setting-btn");

// settingBtn.addEventListener("click", settingFunction);

// function settingFunction() {
//     let settingModal = document.getElementById("setting-modal");
//         sfxMusic.play();
//         settingModal.style.display = "grid";
        
//     // Function for Closing Setting Modal
//     let closeSettings = document.getElementById("close").addEventListener("click", function() {
//         sfxMusic.play();
//         settingModal.style.display = "none";
//     });
// }


// // Function for Exit Button

// let backBtn = document.getElementById("back");

// backBtn.addEventListener("click", exitFunction);

// function exitFunction() {
//     let exitModal = document.getElementById("exit-modal");
//         sfxMusic.play();
//         exitModal.style.display = "grid";


//     // Function for closing exit modal
//     let exitClose = document.getElementById("no").addEventListener("click", function() {
//         sfxMusic.play();
//         exitModal.style.display = "none";
//     });
// }

let startModal = document.getElementById("start-modal");
let startBtn = document.getElementById('startBtn');
let closeStart = document.getElementById("start-close").addEventListener("click", function() {
    startModal.style.display = "none";
});

let level1 = document.getElementById("lvl1");

level1.addEventListener("click", function() {
    startBtn.setAttribute("href", "level1.html");
    startModal.style.display = "grid";
});


 

