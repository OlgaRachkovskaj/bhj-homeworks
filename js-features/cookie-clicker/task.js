let cookieID = document.getElementById ('cookie');//позволяет получить контент 

let clicker__counterID = document.getElementById('clicker__counter'); 
 
let counter = 0; //начальное значение счетчика 
 
cookieID.addEventListener('click', function(){ 
    
    counter++;//обновление счетчика  
    clicker__counterID.textContent = counter; //меняем контент тега 
 
    if (counter % 2 == 0) { 
      cookieID.width = '250'; 
    }  
    if (counter % 2 !== 0)  
      cookieID.width = '202'; 
});