 // The JavaScript Part Starts
 const btn = document.querySelector('.talk');
 const content = document.querySelector('.content');
 const YouTube = [
     'ok boss open youtbe'
];
 const Facebook = [
     'ok boss open facebook'
];
 const programming = [
     'boss programming hero.com open Now'
];
 const Bootstrap = [
     'opening Bootstrap sir'
];
 const host = [
     'opening Netlify sir'
];
 const GitHub = [
     'opening GitHub sir'
];
 const Gmail = [
     'opening Gmail sir'
];
 const map = [
     'opening map sir'
];
 const style  = [
     'opening tailwind sir'
];
 const Google  = [
     'opening Google sir'
];
 

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition =  new SpeechRecognition();

recognition.onstart = function(){
    console.log('How Can I Help You ?')
}
recognition.onresult = function (event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);

};

btn.addEventListener('click', () =>{
    recognition.start();
});

