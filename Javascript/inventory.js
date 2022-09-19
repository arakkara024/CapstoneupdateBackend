let bgMusic = new Audio ("Audio/BGM/Inventory.mp3");

// ===================================================================== BACKGROUND MUSIC =============================================================

// Background Volume Controller Function
let bgVolume = document.getElementById("bgVolume");

function bgVolumeAdjust() {
        bgMusic.volume = bgVolume.value / 100;
}

// ===================================================================== BACKGROUND MUSIC =============================================================

// ============================================================== LOADING PAGE =======================================================================

// This function Will run when the page loads
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

// ============================================================== LOADING PAGE =======================================================================

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


let equipBtn = document.getElementById("equip");
let powerModal = document.getElementById('power-up-info-modal');
let powerImage = document.getElementById('power-up-image');
let nameContainer = document.getElementById('power-up-name');
let descriptionContainer = document.getElementById('power-up-description');
let powerToPass;

// This object is the storage of "Power Up informations"
let powerProperties = [

    {
        imageDirectory: "Images/Power-ups/harddrive.png",
        name: "HDD",
        description: "+1hp"
        
    },

    {
        imageDirectory: "Images/Power-ups/cpu.png",
        name: "CPU",
        description: "+5s time"
    },

    {
        imageDirectory: "Images/Power-ups/ram.png",
        name: "RAM",
        description: "+1 damage"
    },

    {
        imageDirectory: "Images/Power-ups/fan.png",
        name: "FAN",
        description: "25% chance to evade enemy attack"
    },

    {
        imageDirectory: "Images/Power-ups/psu.png",
        name: "PSU",
        description: "Heal 1hp every opponent defeated"
    },

];


// Power Up if click Functions 
// It will send an integer in choosePowerUp function
let powerUp1 = document.getElementById('power-up1');
let powerUp2 = document.getElementById('power-up2');
let powerUp3 = document.getElementById('power-up3');
let powerUp4 = document.getElementById('power-up4');
let powerUp5 = document.getElementById('power-up5');
let powerUp6 = document.getElementById('power-up6');

powerUp1.addEventListener('click', function(){
    alert("You don't have a Power Up");
    localStorage.setItem("equipment", -1);
});

powerUp2.addEventListener('click', function(){
    choosePowerUp(0);
});

powerUp3.addEventListener('click', function(){
    choosePowerUp(1);
});

powerUp4.addEventListener('click', function(){
    choosePowerUp(2);
});

powerUp5.addEventListener('click', function(){
    choosePowerUp(3);
});

powerUp6.addEventListener('click', function(){
    choosePowerUp(4);
});


// The purpose of code below is for displaying a modal and info about the clicked power Up 
function choosePowerUp(powerUpNo) {

    if (powerUpNo === -1) {

        powerUp1.classList.add('equipped');

            powerUp2.classList.remove('equipped');
            powerUp3.classList.remove('equipped');
            powerUp4.classList.remove('equipped');
            powerUp5.classList.remove('equipped');
            powerUp6.classList.remove('equipped');  

        localStorage.setItem("equipment", powerToPass);
        
    } else {
        powerModal.style.display = 'flex';
    
        powerImage.setAttribute('src', powerProperties[powerUpNo].imageDirectory);
        nameContainer.innerHTML = powerProperties[powerUpNo].name;
        descriptionContainer.innerHTML = powerProperties[powerUpNo].description;

        powerToPass = powerUpNo;   
    }

         
}

equipBtn.addEventListener('click', function() {

    powerModal.style.display = 'none';
    
    // The code below will save the chosen equipment to the local storage
    localStorage.setItem("equipment", powerToPass);
    console.log(localStorage.getItem("equipment"));


    // This switch will add "equipped" class to the chosen equipment
    switch (powerToPass) {

        // case 0
        case 0:
            powerUp2.classList.add('equipped');

                powerUp1.classList.remove('equipped');
                powerUp3.classList.remove('equipped');
                powerUp4.classList.remove('equipped');
                powerUp5.classList.remove('equipped');
                powerUp6.classList.remove('equipped');  
                break;
        // case 0

        // case 1    
        case 1:
            powerUp3.classList.add('equipped');

                powerUp1.classList.remove('equipped');
                powerUp2.classList.remove('equipped');
                powerUp4.classList.remove('equipped');
                powerUp5.classList.remove('equipped');
                powerUp6.classList.remove('equipped');  
                break;
        // case 1

        // case 2    
        case 2:
            powerUp4.classList.add('equipped');

                powerUp1.classList.remove('equipped');
                powerUp2.classList.remove('equipped');
                powerUp3.classList.remove('equipped');
                powerUp5.classList.remove('equipped');
                powerUp6.classList.remove('equipped');  
                break;
        // case 2  

        // case 3    
        case 3:
            powerUp5.classList.add('equipped');

                powerUp1.classList.remove('equipped');
                powerUp2.classList.remove('equipped');
                powerUp3.classList.remove('equipped');
                powerUp4.classList.remove('equipped');
                powerUp6.classList.remove('equipped');     
                break;
        // case 3 

        // case 4
        case 4:
            powerUp6.classList.add('equipped');

                powerUp1.classList.remove('equipped');
                powerUp2.classList.remove('equipped');
                powerUp3.classList.remove('equipped');
                powerUp4.classList.remove('equipped');
                powerUp5.classList.remove('equipped');    
            break;
        // case 4    

        // default
        default: 
            powerUp1.classList.add('equipped');

                powerUp2.classList.remove('equipped');
                powerUp3.classList.remove('equipped');
                powerUp4.classList.remove('equipped');
                powerUp5.classList.remove('equipped');
                powerUp6.classList.remove('equipped');
            break;   
        // default    
    }
});

// The code below is a function for cancel button
let cancelBtn = document.getElementById('cancel').addEventListener('click', function() {
    powerModal.style.display = 'none';
});