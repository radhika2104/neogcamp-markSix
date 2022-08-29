var translateBtn = document.querySelector('#btn-translate');
var textinput = document.querySelector('textarea');
var outputarea = document.querySelector('#output');

var serviceURL = 'https://api.funtranslations.com/translate/minion.json';

function constructURL(textinput){
    return serviceURL + '?text=' + textinput };

function errorHandler(error){
    console.log('Error: ',error)
};


function dofetch(textinput){
    fetch(constructURL(textinput))
    .then(response => response.json())
    .then(data => {var translatedText = data.contents.translated
        outputarea.innerText = translatedText})
    .catch(errorHandler)
};

function clickHandler() {
    var translationText = textinput.value;
    dofetch(translationText);
};

translateBtn.addEventListener("click", clickHandler)
