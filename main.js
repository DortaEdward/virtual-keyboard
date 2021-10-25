// Select all elements
const keys = document.querySelectorAll('.key');

const main = document.querySelector('body');

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
