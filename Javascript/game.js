// document.addEventListener('contextmenu', event => event.preventDefault());

// function unloading() {
//     return "Changes you made may not be saved.";
// }

let questionNumber = 0;
let correctContainer = document.getElementById("correct");
let arvi = document.getElementById("arvi");
let enemy = document.getElementById("enemy");
let questionPara = document.getElementById("question-para");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let reset = document.getElementById("reset");
let submit = document.getElementById("submit")

let enemyLife = document.getElementById("enemy-life");
let arviLife = document.getElementById("arvi-life");
let arviHealthText = document.querySelector(".arvi-health-text");
let enemyHealthText = document.querySelector(".enemy-health-text");
let timerContainer = document.getElementById("timer-container");


// Temporary
let arviTotalHealth;
let arviHealth; 
let arviHealthWidth = 100; 
let negativeArvi;



let enemyHealth;
let enemyTotalHealth;
let negativeEnemy;
let enemyHealthWidth = 100;


let checkAnswer = 1;
let timerCorrect;
let timerVar;
let level;
let timerHolder;
let timer;

let powerUp = parseInt(localStorage.getItem('equipment'));


// Onload Function that will check what level the user is

function lvl(dataHere) {
    
    switch (parseInt(dataHere)) {
        case 0: 
            level = 0;
            enemyHealth = 3;
            enemyTotalHealth = 3;
            timer = 30;
            timerHolder = timer;
            checkPowerUp(powerUp);
            charscript.innerHTML = enemyObject[dataHere].script.scriptText[scriptIndex];
            break;
    }

}



function checkPowerUp (powerUpPara) {

    switch(parseInt(powerUpPara)) {
        case -1:
            // console.log(localStorage.getItem('equipment'));
            arviHealth = 3;
            arviTotalHealth = 3;
            break;
        
        case 0:
            // console.log(localStorage.getItem('equipment'));
            arviHealth = 4;
            arviTotalHealth = 4;
            break;
            
        case 1:
    
            // console.log(localStorage.getItem('equipment'));
            arviHealth = 3;
            arviTotalHealth = 3;
            timer += 5;
            timerHolder = timer;
            break;    
    
        case 2:
            // console.log(localStorage.getItem('equipment'));
            arviHealth = 3;
            arviTotalHealth = 3;
            break;  
            
        case 3:
            // console.log(localStorage.getItem('equipment'));
            arviHealth = 3;
            arviTotalHealth = 3;
            break;    
    
        case 4:
            // console.log(localStorage.getItem('equipment'));
            arviHealth = 3;
            arviTotalHealth = 3;
            break;        
    }

}

// Object For Questions

let enemyObject = [
    {
        // Question for level 1
        script: {
                scriptNo: 5,
                scriptText: [
                    "Scientist: What a mess, just a simple accident by my fellow scientist then BOOM, the whole lab turned into rubbles.",
                    "AVI: . . . . ?",
                    "Oh and I almost forgot that you were blown too, well you and along with your several parts.",
                    "AVI: ! . . ?",
                    "Don't you worry about that now my dear boy, we'll get you back in shape. First things first, let's start over with the basics."
                ]
       
        },


        questionsObject: [

            { // Question 1           
                questionType: 1,
                question: "print<span class='span1' id='span1'></span>Python is a Programming Language<span class='span2' id='span2'></span>",
                firstOption: "(     )",
                secondOption: "{     }",
                thirdOption: "[     ]",
            
                firstAnswer: function() {
                    correctAnswer = 1;
                    span1.innerHTML = enemyObject[level].questionsObject[questionNumber].firstOption[0];
                    span2.innerHTML = enemyObject[level].questionsObject[questionNumber].firstOption[6];
                },

                secondAnswer: function() {
                    correctAnswer = 0;
                    span1.innerHTML = enemyObject[level].questionsObject[questionNumber].secondOption[0];
                    span2.innerHTML = enemyObject[level].questionsObject[questionNumber].secondOption[6];
                },

                thirdAnswer: function() {
                    correctAnswer = 0;
                    span1.innerHTML = enemyObject[level].questionsObject[questionNumber].thirdOption[0];
                    span2.innerHTML = enemyObject[level].questionsObject[questionNumber].thirdOption[6];
                },

                correctAnswer: function() {
                    correctContainer.innerHTML = "Python is a Programming Language";
                },
            },

            {    // Question 2
                questionType: 2, //Trial for Input type Question
                question: '<input type="text" class="input" id="input">("Hello World")',
                inputAnswer: "print",
                correctAnswer: function() {
                    correctContainer.innerHTML = "Hello World";
                }
            }, 

            { // Question 3
                questionType: 1,
                question: "print<span class='span1' id='span1'></span>Hello Earth<span class='span2' id='span2'></span>",
                firstOption: "[ and ]" ,
                secondOption: "( and )",
                thirdOption: "{ and }",
        
                firstAnswer: function() {
                    correctAnswer = 0;
                    span1.innerHTML = enemyObject[level].questionsObject[questionNumber].firstOption[0];
                    span2.innerHTML = enemyObject[level].questionsObject[questionNumber].firstOption[6];
                },
        
                secondAnswer: function() {
                    correctAnswer = 1;
                    span1.innerHTML = enemyObject[level].questionsObject[questionNumber].secondOption[0];
                    span2.innerHTML = enemyObject[level].questionsObject[questionNumber].secondOption[6];
                },
        
                thirdAnswer: function() {
                    correctAnswer = 0;
                    span1.innerHTML = enemyObject[level].questionsObject[questionNumber].thirdOption[0];
                    span2.innerHTML = enemyObject[level].questionsObject[questionNumber].thirdOption[6];
                },
        
                correctAnswer: function() {
                    correctContainer.innerHTML = "Hello Earth";
                },
            }

        ]   
    },

    {
        // Questions for Level 2

        questionsObject: [
            {    // Question 1
               
                questionType: 1, //Trial for Option type Question
                question: "print<span class='span1' id='span1'></span>Python is a Programming Language<span class='span2' id='span2'></span>",
                firstOption: "( and )",
                secondOption: "{ and }",
                thirdOption: "[ and ]",
            
                firstAnswer: function() {
                    correctAnswer = 1;
                    span1.innerHTML = enemyObject[0].firstOption[0];
                    span2.innerHTML = enemyObject[0].firstOption[6];
                },

                secondAnswer: function() {
                    correctAnswer = 0;
                    span1.innerHTML = enemyObject[0].secondOption[0];
                    span2.innerHTML = enemyObject[0].secondOption[6];
                },

                thirdAnswer: function() {
                    correctAnswer = 0;
                    span1.innerHTML = enemyObject[0].thirdOption[0];
                    span2.innerHTML = enemyObject[0].thirdOption[6];
                },

                correctAnswer: function() {
                    correctContainer.innerHTML = "Python is a Programming Language";
                },
            },
     
            {    // Question 2
                questionType: 2, //Trial for Input type Question
                question: '<input type="text" class="span1" id="span1">("Hello World")',
                inputAnswer: "print",
                correctAnswer: function() {
                    correctContainer.innerHTML = "Hello World";
                }
            }, 

            {    // Question 3
                question: "print<span class='span1' id='span1'></span>Hello Earth<span class='span2' id='span2'></span>",
                firstOption: "[ and ]" ,
                secondOption: "( and )",
                thirdOption: "{ and }",
        
                firstAnswer: function() {
                    correctAnswer = 0;
                    span1.innerHTML = enemyObject[2].firstOption[0];
                    span2.innerHTML = enemyObject[2].firstOption[6];
                },
        
                secondAnswer: function() {
                    correctAnswer = 1;
                    span1.innerHTML = enemyObject[2].secondOption[0];
                    span2.innerHTML = enemyObject[2].secondOption[6];
                },
        
                thirdAnswer: function() {
                    correctAnswer = 0;
                    span1.innerHTML = enemyObject[2].thirdOption[0];
                    span2.innerHTML = enemyObject[2].thirdOption[6];
                },
        
                correctAnswer: function() {
                    correctContainer.innerHTML = "Hello Earth";
                },
            }
        ]   //Question for level 1
    },

    

];




// ===========================================================  Start & Next Button Functions =======================================================

let nextBtn = document.getElementById("next-btn");
let startBtn = document.getElementById("start-btn");
let script = document.getElementById("script");
let lectureContainer = document.getElementById("lecture-container");
let arviLifeContainer = document.getElementById("arvi-life-container");
let enemyLifeContainer = document.getElementById("enemy-life-container");


// nextBtn.addEventListener("click", function() {
//     nextBtn.style.display = "none";
//     nextBtn.style.zIndex = "-1";
//     startBtn.style.display = "flex";
//     startBtn.style.zIndex = "5";
//     script.style.backgroundColor = "rgb(66, 158, 245)";
//     arvi1Script.src = "Images/Characters/arvi/avi2-script.png";

// });

let leftBtn = document.getElementById('left-btn');
let rightBtn = document.getElementById('right-btn');
let arvi1Script = document.getElementById("arvi1-convo");
let scientist = document.getElementById('scientist-convo');
let charscript = document.getElementById('script-txt');
let scriptIndex = 0;

leftBtn.addEventListener('click', ()=> {
    scriptIndex--;
    let scriptNo = enemyObject[level].script.scriptNo;
    console.log(scriptNo);
    charscript.innerHTML = enemyObject[level].script.scriptText[scriptIndex];
    if(scriptIndex == 0){
        leftBtn.style.display = "none";
    }

    if(scriptIndex !== scriptNo-1) {
        rightBtn.style.display = "block";
        if(scientist.classList.contains('charTalking')) {
            scientist.classList.remove('charTalking');
            arvi1Script.classList.add('charTalking');
            arvi1Script.src = "Images/Characters/arvi/avi2-script.png";
            scientist.src = "Images/Characters/arvi/scientist 2.png";
        } else if(arvi1Script.classList.contains('charTalking')) {
            scientist.classList.add('charTalking');
            arvi1Script.classList.remove('charTalking');
            arvi1Script.src = "Images/Characters/arvi/avi1-script.png";
            scientist.src = "Images/Characters/arvi/scientist 1.png";
        }
    }

});

rightBtn.addEventListener('click', ()=> {
    scriptIndex++;
    if(scriptIndex !== 0) {
        leftBtn.style.display = "block";
        if(scientist.classList.contains('charTalking')) {
            scientist.classList.remove('charTalking');
            arvi1Script.classList.add('charTalking');
            arvi1Script.src = "Images/Characters/arvi/avi2-script.png";
            scientist.src = "Images/Characters/arvi/scientist 2.png";
        } else if(arvi1Script.classList.contains('charTalking')) {
            scientist.classList.add('charTalking');
            arvi1Script.classList.remove('charTalking');
            arvi1Script.src = "Images/Characters/arvi/avi1-script.png";
            scientist.src = "Images/Characters/arvi/scientist 1.png";
        }
    }
    let scriptNo = enemyObject[level].script.scriptNo;
    console.log(scriptNo);
    charscript.innerHTML = enemyObject[level].script.scriptText[scriptIndex];
    if(scriptIndex == 4){
        rightBtn.style.display = "none";
        startBtn.style.display = "flex";
    }
    
});


startBtn.addEventListener("click", function() {
    lectureContainer.style.display = "none";

    
    arviLifeContainer.style.display = "flex";
    enemyLifeContainer.style.display = "flex";
    arvi.style.display = "block";
    enemy.style.display = "block";
    submit.style.display = "flex";
    reset.style.display = "flex";

    arviHealthText.innerHTML = arviHealth + " / " + arviTotalHealth;
    enemyHealthText.innerHTML = enemyHealth + " / " + enemyTotalHealth;

    negativeArvi = 100/arviTotalHealth;
    negativeEnemy = 100/enemyTotalHealth;

    generateChallenge();

});


// ===========================================================  Start & Next Button Functions =======================================================


// Function that will Start and Stop a Timer
function startTimer() {
        if(timer == -1){   
            clearInterval(timerVar);  
            correctContainer.innerHTML = "Time's Up";
            if(powerUp === 3) {            

                let randNumber = Math.floor(Math.random() * 100) + 1;
                if(randNumber<= 25) {
                    enemyAttackArvi();  
                    if(arviHealth <= 0 || enemyHealth <= 0) {
                        setTimeout(gameOver, 1000);
                    } else {
                        timer = timerHolder; 
                        setTimeout(newChallenge, 6000);         
                    }

                } else {
                    arviHealth--;
                    enemyAttackArvi();

                    if(arviHealth <= 0 || enemyHealth <= 0) {
                        setTimeout(gameOver, 6200);
                    } else {
                        timer = timerHolder; 
                        setTimeout(newChallenge, 6000);         
                    }
                    setTimeout(() => {
                        if(arviHealth > 0) {        
                            arviHealthWidth = arviHealthWidth - negativeArvi; 
                            arviLife.style.width = arviHealthWidth + '%'; 
                
                        }else {
                            arviLife.style.width = '0%'; 
                        }
                    }, 6200);
                }

            } else {
                arviHealth--;
                enemyAttackArvi();
                setTimeout(() => {
                    if(arviHealth > 0) {        
                        arviHealthWidth = arviHealthWidth - negativeArvi; 
                        arviLife.style.width = arviHealthWidth + '%'; 
            
                    }else {
                        arviLife.style.width = '0%'; 
                    }
                }, 6200);

                if (arviHealth <= 0) {
                    timerContainer.innerHTML = "0<span class = 'timer-span'>SEC</span>";
                    clearInterval(timerVar);
                    setTimeout(gameOver, 9000);
                } else {
                    timer = timerHolder; 
                    setTimeout(newChallenge, 6200); 
                }  
            }   
                    
        } 
        // else if(enemyHealth <= 0) {
        //     clearInterval(timerVar);
        // } 
        // else if(timerCorrect === 1) {
        //     timer = timerHolder;
        //     console.log("hello " + timer);
        //     clearInterval(timerVar);
        //     setTimeout(timerVar, 2000);
        // } 
        else{
            console.log(arviHealth);
            console.log(timer);
            if (arviHealth <= 0) {
                clearInterval(timerVar);
                setTimeout(gameOver, 2000);
            }
            timerContainer.innerHTML = timer + "<span class = 'timer-span'>SEC</span>";
            timer--; 
        }                
}



// ============================================================== Game Buttons ====================================================================

// Codes for Choices
option1.addEventListener("click", function() {
    enemyObject[level].questionsObject[questionNumber].firstAnswer();
    reset.style.pointerEvents = "all";
    reset.style.opacity = "1";
    reset.style.filter = "grayscale(0%)";
    submit.style.pointerEvents = "all";
    submit.style.opacity = "1";
    submit.style.filter = "grayscale(0%)";
});

option2.addEventListener("click", function() {
    enemyObject[level].questionsObject[questionNumber].secondAnswer();
    reset.style.pointerEvents = "all";
    reset.style.opacity = "1";
    reset.style.filter = "grayscale(0%)";
    submit.style.pointerEvents = "all";
    submit.style.opacity = "1";
    submit.style.filter = "grayscale(0%)";
});

option3.addEventListener("click", function() {
    enemyObject[level].questionsObject[questionNumber].thirdAnswer();
    reset.style.pointerEvents = "all";
    reset.style.opacity = "1";
    reset.style.filter = "grayscale(0%)";
    submit.style.pointerEvents = "all";
    submit.style.opacity = "1";
    submit.style.filter = "grayscale(0%)";
});


// Reset Button
reset.addEventListener("click", function(){
    span1.innerHTML = "";
    span2.innerHTML = "";
    correctContainer.innerHTML = "";
    reset.style.pointerEvents = "none";
    submit.style.pointerEvents = "none";
    reset.style.filter = "grayscale(100%)";
    submit.style.filter = "grayscale(100%)";
    // Temporary For Demo Purposes only
    correctAnswer = 0; 

});

let readyModal = document.getElementById('ready-modal');
let count = document.getElementById('count');
let count3; 
let countNo = 3;

function newChallenge() {       
            questionNumber++;
            correctAnswer = 0;
            timer = timerHolder; 

            setTimeout(() => {
                readyModal.classList.add("ready-modal-fadeIn");
                count3 = setInterval(() => {
                    count.innerHTML = countNo;
                    countNo--;
                }, 1000);  
            }, 2000);

            setTimeout(() => {
                readyModal.classList.add("modal-fadeOut");    
                clearInterval(count3);
                countNo = 3;
            }, 6000);

            setTimeout(() => {   
                readyModal.classList.remove("ready-modal-fadeIn");
                readyModal.classList.remove("modal-fadeOut");
                count.innerHTML = countNo;
                generateChallenge();
            }, 7000);
           
}

// Submit Button
submit.addEventListener("click", function(){
    let typeQuestion = enemyObject[level].questionsObject[questionNumber].questionType;   
    if(typeQuestion === 1) {
        if (correctAnswer === checkAnswer){
            clearInterval(timerVar);
                if (powerUp === -1 || powerUp === 0 || powerUp === 1 || powerUp === 3) {                
                    
                    enemyObject[level].questionsObject[questionNumber].correctAnswer();
                    arviAttackEnemy();

                } else if (powerUp === 2) { // add 1 damage  

                    enemyObject[level].questionsObject[questionNumber].correctAnswer();
                    arviAttackEnemy();    

                } else if (powerUp === 4) {
                    enemyObject[level].questionsObject[questionNumber].correctAnswer();
                    if(arviHealth < arviTotalHealth) {   
                        enemyObject[level].questionsObject[questionNumber].correctAnswer();
                        arviAttackEnemy();
                    
                        setTimeout(()=>{
                            arviHealth++;
                            arviHealthText.innerHTML = arviHealth + " / " + arviTotalHealth;
                            arviHealthWidth = arviHealthWidth + negativeArvi; 
                            arviLife.style.width = arviHealthWidth + '%'; 
                        }, 9000); 
                    } else {
                        arviAttackEnemy();
                    }
                }

            } else { //Wrong Answer
                clearInterval(timerVar);
                if(powerUp === 3) {
                    let randNumber = Math.floor(Math.random() * 100) + 1;
                    // let randNumber = 25;
                    if(randNumber<= 25) {
                        enemyAttackArvi();
                        if(arviHealth <= 0 || enemyHealth <= 0) {
                            setTimeout(gameOver, 9000);
                        } else {
                            setTimeout(newChallenge, 6000);         
                        }
                    } else {
                        arviHealth--;
                        correctContainer.innerHTML = "Wrong";
                        enemyAttackArvi();

                        setTimeout(() => {
                            if(arviHealth !== 0) {        
                                arviHealthWidth = arviHealthWidth - negativeArvi; 
                                arviLife.style.width = arviHealthWidth + '%'; 
                    
                            }else {
                                arviLife.style.width = '0%'; 
                            }
                        }, 6200);

                        if(arviHealth <= 0 || enemyHealth <= 0) {
                            setTimeout(gameOver, 9000);
                        } else {
                            setTimeout(newChallenge, 6000);         
                        }
                    }
                    
                } else {
                    correctContainer.innerHTML = "Wrong";
                    arviHealth--;
                    enemyAttackArvi();


                    setTimeout(() => {
                        if(arviHealth > 0) {        
                            arviHealthWidth = arviHealthWidth - negativeArvi; 
                            arviLife.style.width = arviHealthWidth + '%'; 
                
                        }else {
                            arviLife.style.width = '0%';                            
                        }
                    }, 6200);

                    if(arviHealth <= 0 || enemyHealth <= 0) {
                        clearInterval(timerVar);
                        setTimeout(gameOver, 9000);
                    } else {
                        setTimeout(newChallenge, 6000); 
                    }
            
                }
        }

        
    } else if (typeQuestion === 2) {

     let correctInput = document.getElementById("input").value;
     let inputAnswer =  enemyObject[level].questionsObject[questionNumber].inputAnswer;

     clearInterval(timerVar);

        if (correctInput === inputAnswer){
            //    Trial 

                if (powerUp === -1 || powerUp === 0 || powerUp ===1 || powerUp === 3) {
                    
                    enemyObject[level].questionsObject[questionNumber].correctAnswer();    
                    arviAttackEnemy();
        
                } else if (powerUp === 2) { // add 1 damage
                    
                    enemyObject[level].questionsObject[questionNumber].correctAnswer();
                    arviAttackEnemy();
                   
                } else if (powerUp === 4) {
                    if(arviHealth < arviTotalHealth) {
                        enemyObject[level].questionsObject[questionNumber].correctAnswer();
                        arviAttackEnemy();
            
                        setTimeout(()=>{
                            arviHealth++;
                            arviHealthText.innerHTML = arviHealth + " / " + arviTotalHealth;
                            arviHealthWidth = arviHealthWidth + negativeArvi; 
                            arviLife.style.width = arviHealthWidth + '%'; 
                        }, 9000);

                       
                    } else {
                        arviAttackEnemy();
                    }
                }

            } else { // Wrong Answer
                clearInterval(timerVar);
                if(powerUp === 3) {            
                    let randNumber = Math.floor(Math.random() * 100) + 1;
                    if(randNumber<= 25) {
                        enemyAttackArvi();  
                        if(arviHealth <= 0 || enemyHealth <= 0) {
                            setTimeout(gameOver, 1000);
                        } else {
                            setTimeout(newChallenge, 6000);         
                        }
                    } else {
                        arviHealth--;
                        enemyAttackArvi();

                        if(arviHealth <= 0 || enemyHealth <= 0) {
                            setTimeout(gameOver, 1000);
                        } else {
                            setTimeout(newChallenge, 6000);         
                        }
                        setTimeout(() => {
                            if(arviHealth !== 0) {        
                                arviHealthWidth = arviHealthWidth - negativeArvi; 
                                arviLife.style.width = arviHealthWidth + '%'; 
                    
                            }else {
                                arviLife.style.width = '0%'; 
                            }
                        }, 6200);
                    }
  
                } else {
                    correctContainer.innerHTML = "Wrong";
                    arviHealth--;
                    enemyAttackArvi();
                    setTimeout(() => {
                        if(arviHealth > 0) {        
                            arviHealthWidth = arviHealthWidth - negativeArvi; 
                            arviLife.style.width = arviHealthWidth + '%'; 
                
                        }else {
                            arviLife.style.width = '0%'; 
                        }
                    }, 6200);

                    if(arviHealth <= 0 || enemyHealth <= 0) {
                        setTimeout(gameOver, 1000);
                    } else {
                        setTimeout(newChallenge, 6000); 
                    }
                }  
        }

    }
    
});


// ============================================================== Game Buttons ====================================================================



// Function if time is up
//  function timeIsUp() { 
//     // arviHealthWidth = arviHealthWidth - negativeArvi; 
//     console.log(arviHealthWidth);
//     var identity = setInterval(function() {
//         if (arviHealthWidth < 0) {
//           arviLife.style.width = '0%'; 
//           console.log("stop");
//           clearInterval(identity);
//         } else { 
//           console.log(arviHealthWidth);
//           arviLife.style.width = arviHealthWidth + '%'; 
//           clearInterval(identity)
//         }}, 0); 
// }

// ======== TEST SUCCESS =======
// ====== FOR DELETION ======== 

// =========================================================== Function Animation For Attacks =======================================================

let attackModal = document.getElementById('arvi-attack-modal');
let attackResult = document.getElementById('result');
let imageBeforeAttack = document.getElementById('before-A-image');
function arviAttackEnemy() {

    // if(powerUp === 2) {
    //     setTimeout(correctAnimation, 0);
    //     setTimeout(attackEvent1, 6200);
    //     setTimeout(attackEvent1, 6200);
    //     setTimeout(attackEvent2, 8000);
    // } else {
        setTimeout(correctAnimation, 0);
        setTimeout(attackEvent1, 6200);
        setTimeout(attackEvent2, 8000);
    // }

    // Dito maglalagay ng condition
    
    function correctAnimation () {

        // Run Modal FadeIn Animation 
        attackModal.classList.add('modal-fadeIn'); 

        // Run Bouncing Text
        attackResult.classList.add('bounce');  
            
        // Run Removing bounce class and adding result-FadeOut class
        setTimeout(() => {
            attackResult.classList.remove('bounce');
            attackResult.classList.add('result-FadeOut'); 
        }, 1500);

        // Run Adding result-inactive to attackResult to set display none
        setTimeout(() => {attackResult.classList.add('result-inactive')}, 2500);

        // Run adding fadeIn to Image 
        setTimeout(() => {imageBeforeAttack.classList.add('image-before-attack-animate');}, 2700); 

        // Run removing fadeIn to Image and add image-fadeOut
        setTimeout(() => {
            imageBeforeAttack.classList.remove('image-before-attack-animate');
            imageBeforeAttack.classList.add('image-fadeOut'); 
        }, 4000);

        // Run Add image-inactive to image
        setTimeout(() => {
            imageBeforeAttack.classList.add('image-inactive'); 
        }, 5000);
        
        // Run Add modal-inactive to attackModal
        setTimeout(() => {attackModal.classList.add('modal-inactive')}, 5100); 

        setTimeout(() => {
            attackModal.classList.remove('modal-fadeIn');
            attackResult.classList.remove('result-inactive');
            imageBeforeAttack.classList.remove('image-fadeOut');
            imageBeforeAttack.classList.remove('image-inactive'); 
            attackModal.classList.remove('modal-inactive');
        }, 6000);
        

    }

    function attackEvent1() {
        arvi.src = "Images/Characters/arvi/avi 3.png";
        arvi.classList.remove("movement");
        arvi.classList.add("attackAnimation");
        enemy.classList.add("enemyIsAttackAnimation");
        --enemyHealth;

        if( powerUp === 2) {
            let addDamage = negativeEnemy * 2;
            enemyHealth--; 
            if(enemyHealth <= 0) {
                enemyLife.style.width = '0%'; 
                enemyHealthText.innerHTML =  "0 / " +  enemyTotalHealth;
    
            } else {
                enemyHealthText.innerHTML = enemyHealth + " / " +  enemyTotalHealth;
            }
    
            if(enemyHealth >= 0) {        
                enemyHealthWidth = enemyHealthWidth - addDamage; 
                enemyLife.style.width = enemyHealthWidth + '%'; 
            }

        }

        if(enemyHealth <=0 ) {
            enemyLife.style.width = '0%'; 
            enemyHealthText.innerHTML =  "0 / " +  enemyTotalHealth;
            

        } else {
            enemyHealthText.innerHTML = enemyHealth + " / " +  enemyTotalHealth;
        }
        

        if(enemyHealth >= 0) {        
            enemyHealthWidth = enemyHealthWidth - negativeEnemy ; 
            enemyLife.style.width = enemyHealthWidth + '%'; 

        }
       
    }
    
    function attackEvent2() {
        arvi.src = "Images/Characters/arvi/avi 1.png";
        arvi.classList.add("movement");
        arvi.classList.remove("attackAnimation");
        enemy.classList.remove("enemyIsAttackAnimation");

        if(arviHealth <= 0 || enemyHealth <= 0) {
            setTimeout(gameOver, 1000);
        } else {
            newChallenge();
        }
    }
}


// Function to Call if the User's answer is wrong and lose a time
let enemyAttackModal = document.getElementById('enemy-attack-modal');
let enemyAttackResult = document.getElementById('enemy-result');
let enemyBeforeAttack = document.getElementById('enemy-A-image');
function enemyAttackArvi() {


    setTimeout(wrongAnimation, 0);
    setTimeout(wrongEvent1, 6200);
    setTimeout(wrongEvent2, 8000);


    function wrongAnimation() {
     // Run Modal FadeIn Animation 
     enemyAttackModal.classList.add('modal-fadeIn'); 

     // Run Bouncing Text
     enemyAttackResult.classList.add('bounce');  
         
     // Run Removing bounce class and adding result-FadeOut class
     setTimeout(() => {
         enemyAttackResult.classList.remove('bounce');
         enemyAttackResult.classList.add('result-FadeOut'); 
     }, 2000);

     // Run Adding result-inactive to enemyAttackResult to set display none
     setTimeout(() => {enemyAttackResult.classList.add('result-inactive')}, 2500);

     // Run adding fadeIn to Image 
     setTimeout(() => {enemyBeforeAttack.classList.add('enemy-before-attack-animate');}, 2700); 

     // Run removing fadeIn to Image and add image-fadeOut
     setTimeout(() => {
        enemyBeforeAttack.classList.remove('enemy-before-attack-animate');
        enemyBeforeAttack.classList.add('image-fadeOut'); 
     }, 4000);

     // Run Add image-inactive to image
     setTimeout(() => {
        enemyBeforeAttack.classList.add('image-inactive'); 
     }, 5000);
     
     // Run Add modal-inactive to enemyAttackModal
     setTimeout(() => {enemyAttackModal.classList.add('modal-inactive')}, 5100); 

     setTimeout(() => {
         enemyAttackModal.classList.remove('modal-fadeIn');
         enemyAttackResult.classList.remove('result-inactive');
         enemyBeforeAttack.classList.remove('image-fadeOut');
         enemyBeforeAttack.classList.remove('image-inactive'); 
         enemyAttackModal.classList.remove('modal-inactive');
     }, 6000);
    }

     

    // Animation if Arvi is Attacked by the Enemy 
    function wrongEvent1() {
        arvi.src = "Images/Characters/arvi/avi 2.png";
        enemy.classList.add("enemyAttackAnimation");
        arvi.classList.add("arviIsAttackAnimation");
        arviHealthText.innerHTML = arviHealth + " / " + arviTotalHealth;
    }
    
    function wrongEvent2() {
        arvi.src = "Images/Characters/arvi/avi 1.png";
        enemy.classList.remove("enemyAttackAnimation");
        arvi.classList.remove("arviIsAttackAnimation");
    }
}

// =========================================================== Function Animation For Attacks =======================================================


function generateChallenge () {

    let typeQuestion = enemyObject[level].questionsObject[questionNumber].questionType;
    correctContainer.innerHTML = "";
    if(typeQuestion === 1) {
            reset.style.filter = "grayscale(100%)";
            submit.style.filter = "grayscale(100%)";  
            reset.style.pointerEvents = "none";
            submit.style.pointerEvents = "none";
            option1.style.display = "flex";
            option2.style.display = "flex";
            option3.style.display = "flex";
            // timerCorrect = 0;
            let span1 = document.getElementById("span1");
            let span2 = document.getElementById("span2");
            questionPara.innerHTML =  enemyObject[level].questionsObject[questionNumber].question;
            option1.innerHTML = enemyObject[level].questionsObject[questionNumber].firstOption;
            option2.innerHTML = enemyObject[level].questionsObject[questionNumber].secondOption;
            option3.innerHTML = enemyObject[level].questionsObject[questionNumber].thirdOption;

    } else if (typeQuestion === 2) {
            reset.style.filter = "grayscale(0%)";
            submit.style.filter = "grayscale(0%)";  
            reset.style.pointerEvents = "all";
            submit.style.pointerEvents = "all";
            // timerCorrect = 0;
            questionPara.innerHTML =  enemyObject[level].questionsObject[questionNumber].question;
            option1.style.display = "none";
            option2.style.display = "none";
            option3.style.display = "none";
    }

//    trial
   setTimeout(timerVar = setInterval(startTimer,1000), 0);
    
}


// Game Over Modal (Variables)

let winModal = document.querySelector(".game-over-modal");
let loseContainer = document.querySelector(".lose-container");
let winContainer = document.querySelector(".win-container");

function gameOver() {
    if (enemyHealth <= 0) {
        // winModal.style.display = "flex";
        // winContainer.style.display = "flex";
        enemyLifeContainer.classList.add('health-fade-out');
        setTimeout(() => {
            enemyLifeContainer.style.display = "none";
        }, 1000);
        enemy.classList.add("new-power-up");
        setTimeout(() => {
            enemy.setAttribute('src','Images/Power-ups/cpu.png');
            enemy.style.cursor = "pointer";
        }, 1000);

        enemy.addEventListener("click", ()=>{
            winModal.style.display = "flex";
            winContainer.style.display = "flex";
        });

    } else if(arviHealth <= 0) {
        winModal.style.display = "flex";
        loseContainer.style.display = "flex";
    }
}


// =========================================================== Settings & Leave Button Functions =======================================================

let settingBtn = document.getElementById("setting-btn").addEventListener("click", function() {
    settingModal.style.display = "grid";
});

let settingModal = document.getElementById("setting-modal");

let closeSettings = document.getElementById("close").addEventListener("click", function() {
    settingModal.style.display = "none";
});


let no = document.getElementById("back").addEventListener("click", function() {
    exitModal.style.display = "grid";
});

let exitModal = document.getElementById("exit-modal");

let exitClose = document.getElementById("no").addEventListener("click", function() {
    exitModal.style.display = "none";
});

// =========================================================== Settings & Leave Button Functions =======================================================







