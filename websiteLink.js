
 function readOutLoud(message){
     const speech = new SpeechSynthesisUtterance();

     speech.text = 'I am not able to understand ,sir';

     // youtube 
     if(message.includes('YouTube')){
         const finalText = 
             YouTube[Math.floor(Math.random()*YouTube.length)];
         speech.text = finalText; 
         window.open('https://www.youtube.com/')
         }
         // facebook 
     if(message.includes('Facebook')){
         const finalText = 
         Facebook[Math.floor(Math.random()*Facebook.length)];
         speech.text = finalText; 
         window.open('https://www.facebook.com/')
         }
         // programing hero 
     if(message.includes('programming')){
         const finalText = 
         programming[Math.floor(Math.random()*programming.length)];
         speech.text = finalText; 
         window.open('https://web.programming-hero.com/web-5/module-locked')
         }
         // bootstrap 
     if(message.includes('Bootstrap')){
         const finalText = 
         Bootstrap[Math.floor(Math.random()*Bootstrap.length)];
         speech.text = finalText; 
         window.open('https://getbootstrap.com/docs/5.1/getting-started/introduction/')
         }
         // netlify 
     if(message.includes('host')){
         const finalText = 
         host[Math.floor(Math.random()*host.length)];
         speech.text = finalText; 
         window.open('https://app.netlify.com/teams/tanjinhossain1/overview')
         }
         // git 
     if(message.includes('GitHub')){
         const finalText = 
         GitHub[Math.floor(Math.random()*GitHub.length)];
         speech.text = finalText; 
         window.open('https://github.com/')
         }
         // Gmail
     if(message.includes('Gmail')){
         const finalText = 
         Gmail[Math.floor(Math.random()*Gmail.length)];
         speech.text = finalText; 
         window.open('https://mail.google.com/mail/u/0/#inbox')
         }
         // map 
     if(message.includes('map')){
         const finalText = 
         map[Math.floor(Math.random()*map.length)];
         speech.text = finalText; 
         window.open('https://www.google.com/maps/@23.6548005,90.5160723,15z')
         }
         // tailwind
     if(message.includes('style')){
         const finalText = 
         style[Math.floor(Math.random()*style.length)];
         speech.text = finalText; 
         window.open('https://tailwindcss.com/docs/installation')
         }
        //  Google
        if(message.includes('Google')){
            const finalText = 
            Google[Math.floor(Math.random()*Google.length)];
            speech.text = finalText; 
            window.open('https://www.google.com/')
            }
            // song
        if(message.includes('song')){
            const finalText = 
            song[Math.floor(Math.random()*song.length)];
            speech.text = finalText; 
            window.open('https://www.youtube.com/watch?v=71gpwkuyzN8&list=RD71gpwkuyzN8&start_radio=1')
            }
     speech.volume = 1;
     speech.rate = 1.1;
     speech.pitch = 1;

     window.speechSynthesis.speak(speech);
 }