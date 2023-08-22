const oferta = document.querySelector('#header_navbar_li');
const menuOferta = document.querySelector('.oferta_click');

oferta.addEventListener('click', () => {
menuOferta.classList.toggle('flex')
})

menuOferta.addEventListener('click', (event)=>{
  if(event.target.classList.contains('menuOferta')){
        menuOferta.classList.toggle('flex') 
    }
})
