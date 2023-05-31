var outputSentence = document.getElementById("sentence");
var nextSentence = document.getElementById("next-button");
var sentences;

processSentences();
nextSentence.addEventListener("click", function(){
    generateRandomSentence(sentences)
});


function processSentences(){
    fetch('../json/sentences.json')
    .then(response => response.json())
    .then(data => {
        sentences = data.sentences;
        generateRandomSentence(sentences);
        
    })
    .catch(error => {
        console.error("Error loading JSON file: ", error)
    });
}

function generateRandomSentence(dataSentences){
    const randomIndex = Math.floor(Math.random() * dataSentences.length);
    const randomSentence = dataSentences[randomIndex];
    const english = randomSentence.english;
    const spanish = randomSentence.spanish;

    outputSentence.value = english;

    console.log(`English: ${english}`);
    console.log(`Spanish: ${spanish}`);
}
