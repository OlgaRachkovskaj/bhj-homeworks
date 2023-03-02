
let cookieID = document.getElementById ('cookie');//позволяет получить контент 

let clicker__counterID = document.getElementById('clicker__counter'); 
 
let counter = 0; //начальное значение счетчика 
 
cookieID.addEventListener('click', function(){ 
    
    counter++;//обновление счетчика  
    clicker__counterID.textContent = counter; //меняем контент тега 
 
    cookieID.width = counter % 2 == 0 ? 250 : 202;
});