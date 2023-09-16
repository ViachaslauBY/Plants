const buttons = document.querySelectorAll('.service__button');
const cards = document.querySelectorAll('.service__card');
let count = 0;
const arr = [];

const checkButton = () => {   

  if(count === 0) {
      buttons.forEach((button) => {
        button.classList.remove('active');
      }); 

      cards.forEach((card) => {
        card.classList.remove('active');
      });

      arr.length = 0;
    }

    if(count === 1) {
      cards.forEach((card) => {
        card.classList.remove('active');
        if(!card.classList.contains(arr[0])) {
          card.classList.toggle('active');
        } 
      });
    }

    if(count === 2) {
      cards.forEach((card) => {
        card.classList.remove('active');
        if(!card.classList.contains(arr[0]) && !card.classList.contains(arr[1])) {
          card.classList.toggle('active');        
        }
      });
    }

    if(count === 3) {
      buttons.forEach((button) => {
        button.classList.remove('active');
      }); 

      cards.forEach((card) => {
        card.classList.remove('active');
      });	

      count = 0;
      arr.length = 0;
    };    
}

buttons.forEach((button) => {   
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    let buttonName = button.innerText.toLowerCase();

    if(button.classList.contains('active')) {
      count++;
      arr.push(buttonName);
    } else {
        count--;
        arr.pop(buttonName);
    };               
    
    checkButton();
  });         
});  