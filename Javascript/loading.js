let timer = 0;
let percentage = 0;
let loadInterval;
let percentText = document.querySelector(".percent-container");
window.onload = function(){
    percentText.classList.add("fadeIn-animation")
    setTimeout(loadInterval = setInterval(percentInterval,1500), 0);
};

function percentInterval() {

    if(timer<6){
        percentText.innerHTML = percentage + "<span class='percent-span'>%</span>";
        percentage += 20;
        timer++;
        console.log(timer);
    } else{
        console.log("hello");
        percentText.innerHTML = "Click Here";
        clearInterval(loadInterval);
    }
  
}