 let keys = document.querySelectorAll('.keys');
let input = document.querySelector('.input');
 keys.forEach(function(key){
  key.setAttribute('value',key.textContent);
  key.addEventListener('click',function(e){
    e.preventDefault();
    input.value = input.value + this.getAttribute('value');
  });
});

