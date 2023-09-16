document.querySelectorAll('.accordion__item').forEach( el => {
  el.addEventListener('click', () => {    
    document.querySelectorAll('.accordion__item').forEach( el => el.classList.remove('active'));
    let content = el.lastElementChild;    
    
    if(content.style.maxHeight) {
      el.classList.remove('active');
      document.querySelectorAll('.accordion__content').forEach( el => {
        el.style.maxHeight = null;
        el.style.visibility = 'hidden';
        el.style.overflow = 'hidden';
        el.style.marginTop = '0px'; 
        el.style.marginBottom = '0px'; 
        el.style.paddingTop = '0px';
      });         
    } else {
      el.classList.remove('active');
      document.querySelectorAll('.accordion__content').forEach( el => {
        el.style.maxHeight = null;
        el.style.visibility = 'hidden';
        el.style.overflow = 'hidden';
        el.style.marginTop = '0px'; 
        el.style.marginBottom = '0px'; 
        el.style.paddingTop = '0px';
      });
      el.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';                    
      content.style.visibility = 'visible'; 
      content.style.overflow = 'visible'; 
      content.style.marginTop = '8px'; 
      content.style.marginBottom = '5px'; 
      content.style.paddingTop = '8px';                        
    }
  });  
});

document.querySelectorAll('.accordion__button').forEach((el) => {
  el.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});