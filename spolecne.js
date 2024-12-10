// HAMBURGER (3)
const tlacitko = document.querySelector('#menu-tlacitko');
const menu = document.querySelector('#menu-polozky');
const ikona = tlacitko.querySelector('i'); 

tlacitko.addEventListener('click', function() {
 
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    ikona.classList.remove('fa-xmark');  
    ikona.classList.add('fa-bars');      
  } else {
    menu.classList.add('show');
    ikona.classList.remove('fa-bars'); 
    ikona.classList.add('fa-xmark');  
  }
});