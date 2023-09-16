const select = () => {
  const selectHeader = document.querySelector('.select__header');
  const selectItem = document.querySelectorAll('.select__item');
  const contactsInfo = document.querySelector('.contacts__info');
  const city = document.querySelector('.city');
  const phone = document.querySelector('.phone');
  const adress = document.querySelector('.adress');
  const infoButton = document.querySelector('.info__button');
  
  const arr = [
    {
      'city': 'Canandaigua, NY',
      'phone': '+1 585 393 0001',
      'adress': '151 Charlotte Street'
    },
    {
      'city': 'New York City',
      'phone': '+1 212 456 0002',
      'adress': '9 East 91st Street'
    },
    {
      'city': 'Yonkers, NY',
      'phone': '+1 914 678 0003',
      'adress': '511 Warburton Ave'
    },
    {
      'city': 'Sherrill, NY',
      'phone': '+1 315 908 0004',
      'adress': '14 WEST Noyes BLVD'
    },
  ];

  selectHeader.addEventListener('click', (event) => {
    event.currentTarget.parentElement.classList.toggle('active');
    contactsInfo.classList.remove('active'); 
  });

  selectItem.forEach( el => {
    el.addEventListener('click', (event) => {
      const text = event.target.innerText;
      const select = event.target.closest('.contacts__select');
      const currentText = select.querySelector('.select__current'); 
      
      currentText.innerText = text;      
      select.classList.remove('active'); 
      contactsInfo.classList.add('active');      

      if(text === 'Canandaigua, NY') {
        city.innerText = arr[0].city;
        phone.innerText = arr[0].phone;
        adress.innerText = arr[0].adress;
        infoButton.setAttribute('href', `tel:${arr[0].phone.replace(/ /g,'')}`);        
      } else if (text === 'New York City') {
        city.innerText = arr[1].city;
        phone.innerText = arr[1].phone;
        adress.innerText = arr[1].adress;
        infoButton.setAttribute('href', `tel:${arr[1].phone.replace(/ /g,'')}`);
      } else if (text === 'Yonkers, NY') {
        city.innerText = arr[2].city;
        phone.innerText = arr[2].phone;
        adress.innerText = arr[2].adress;
        infoButton.setAttribute('href', `tel:${arr[2].phone.replace(/ /g,'')}`);
      } else {
        city.innerText = arr[3].city;
        phone.innerText = arr[3].phone;
        adress.innerText = arr[3].adress;
        infoButton.setAttribute('href', `tel:${arr[3].phone.replace(/ /g,'')}`);
      }      
    });
  });
}

select();