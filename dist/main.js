// Select all elements
const keys = document.querySelectorAll('.key');
const main = document.querySelector('body');
const promptSection = document.querySelector('.prompt-container');
const userInput = document.querySelector('.user-input');
const timer = document.querySelector('.timer');

// Get random quotes from api
const apiUrl = 'https://api.quotable.io/random';
const getQuote = async () => {
  promptSection.innerHTML = null;
  const res = await fetch(apiUrl);
  const json = await res.json();
  const quote = await json.content;
  await quote.split('').forEach(e => {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = e;
    promptSection.appendChild(characterSpan);
  }); 
  userInput.value = null;
  startTimer();
}

main.addEventListener('keydown', e => {
  for(let i = 0; i< keys.length; i++ ){
    if(keys[i].classList
        .contains(`${
          e.code.replace('Key','')
            .replace('Left','')
            .replace('Digit','')
            .toLowerCase()}-key`
          )){
      keys[i].style.backgroundColor = '#a01f1f';
    }
  }
})
main.addEventListener('keyup', e => {
  for(let i = 0; i< keys.length; i++ ){
    if(keys[i].classList
      .contains(`${
        e.code.replace('Key','')
          .replace('Left','')
          .replace('Digit','')
          .toLowerCase()}-key`
        )){
        keys[i].style.backgroundColor = '#cf4747';
    }
  }
})

let correct = true;
userInput.addEventListener('input', () => {
  const arrayQuote = promptSection.querySelectorAll('span');
  const arrayValue = userInput.value.split('');
  arrayQuote.forEach((characterSpan, i) => {
    const char = arrayValue[i];
    if(char == null){
      characterSpan.classList.remove('correct');
      characterSpan.classList.remove('incorrect');
      correct = false;
    } else if(char === characterSpan.innerText) {
      characterSpan.classList.add('correct');
      characterSpan.classList.remove('incorrect');
      correct = true
    } else{
      characterSpan.classList.add('incorrect');
      characterSpan.classList.remove('correct');
      correct = false;
    }
  })
  if(correct) getQuote();
})

let startTime;

const startTimer = () => {
  timer.innerText = 0;
  startTime = new Date;
  setInterval(() => {
    timer.innerText = getTimerTime();
  }, 1000);
}

const getTimerTime = () =>{
  return Math.floor((new Date() - startTime)/1000)
}

window.onload = () => {
  getQuote();
};

