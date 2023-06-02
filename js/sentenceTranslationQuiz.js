var outputSentence = document.getElementById("sentence");
var nextSentence = document.getElementById("next-button");

var sentences;
var sentenceInput;

var english;
var spanish;

processSentences();

nextSentence.addEventListener("click", function(){
    sentenceInput = document.getElementById("input-translation").value;

    if(isTranslationCorrect() === true){
        //Say congrats or something and add a point
        updateSentencePoint(sentencePoints + 1);
    }
    else{
        //Say wrong or something and dont add a point
    }
    generateRandomSentence(sentences);
});


function processSentences(){
    fetch('../json/sentences.json')
    .then(response => response.json())
    .then(data => {
        sentences = data.sentences;
        generateRandomSentence(sentences);
        
    })
    .catch(error => {
        console.error("Error loading JSON file: ", error);
    });
}

function generateRandomSentence(dataSentences){
    const randomIndex = Math.floor(Math.random() * dataSentences.length);
    const randomSentence = dataSentences[randomIndex];
    
    english = randomSentence.english;
    spanish = randomSentence.spanish;

    outputSentence.value = english;


    //Use to verify if outputting correctly
    //console.log(`English: ${english}`);
    //console.log(`Spanish: ${spanish}`);
}

function isTranslationCorrect(){
    if (sentenceInput === spanish){
        return true;
    }
    else{
        return false;
    }
    
}