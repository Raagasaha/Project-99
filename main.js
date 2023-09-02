var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition;

function start()
{
    document.getElementById("textbox").innerHTMl = "";
    recognition.start();

}

recognition.onresult = function(event) {
    console.log(event);
}