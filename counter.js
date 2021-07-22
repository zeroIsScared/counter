window.onload= () =>{
let num = 1;
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let label = document.getElementById('value');
let message = document.getElementById('message');

label.innerText = num;


plus.onclick = () => {
    if(num >= 1) 
     {   
      num ++;
      label.innerText = num;
     }
    else
     {
        message.innerHTML ='The value can not be smaller than 1';
     };
    
};

minus.onclick = () => {
    if(num >= 2) 
     { 
        num --;
        label.innerText = num;
     } 
    else 
     {
     message.innerHTML ='The value can not be smaller than 1';
     };
};
};
 