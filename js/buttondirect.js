//Refrences to buttons
var sentenceButton = document.getElementById("feat-1");
var imageToWordButton = document.getElementById("feat-2");
var trueFalse = document.getElementById("feat-3");

//Event listeners to buttons
sentenceButton.addEventListener("click", sentenceRedirect);
imageToWordButton.addEventListener("click", imageToWordRedirect);
trueFalse.addEventListener("click",trueFalseRedirect);

//Functions to redirect to new page
function sentenceRedirect(){
    window.location.href="./sentences.html";
}

function imageToWordRedirect(){
    window.location.href="./imagetoword.html";
}

function trueFalseRedirect(){
    window.location.href="./truefalse.html";
}