var introContainer = document.getElementById("intro-container");
var quizContainer = document.getElementById("quiz-container");

var beginQuizButton = document.getElementById("access-quiz");

beginQuizButton.addEventListener("click", begin);

function begin(){
    introContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
}


