// const form=document.getElementById('my-form');
// console.log(document.querySelector('.container'));

//Selct multiple items

// const nodeitem=console.log(document.querySelectorAll('.item'));
// const colitems=document.getElementByIdClassName('item');
// console.log(document.getElementByIdClassName('item'));
//console.log(document.getElementByIdTagName('li'));

// for(let i=0;i<colitems.length;i++){
//     console.log(colitems[i]);
// }

// const ul=document.querySelector('.items');
// ul.firstElementChild.textContent="HTML";
// ul.children[1].innertext="Css";
// ul.lastElementChild.innerHTML="<h3>Javascript</h3>";
// const btn=document.querySelector('.btn');
// btn.style.backgroundColor='red';
// btn.style.textTransform='uppsercase';

// btn.addEventListener('click',e =>{
//     e.preventDefault();
//     console.log(e);
//     ul.lastElementChild.innerHTML="<h3>Javascript</h3>";
// })

//Form Manipulation
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

const userList = document.querySelector('#users');
const btn1= document.querySelector('#btn1');
const password = document.querySelector('#password');
var verify1 = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
myForm.addEventListener('submit', onSubmit);
var i=2;
function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '' || password.value===''){
        const msg3 = document.createElement("text");
          
        msg3.classList.add("error");
         msg.appendChild(msg3);
        msg3.innerText = 'Fill all fields';
  
        setTimeout(() => msg3.remove(), 3000);
    } else {
        
        if(password.value.length<=8 || !password.value.match(verify1)){
              const msg2 = document.createElement("text");
          
            msg2.classList.add("error");
             msg.appendChild(msg2);
            msg2.innerText = 'Enter Valid password';
      
            setTimeout(() => msg2.remove(), 3000);
        }
        else{
        const li = document.createElement('li');
        const text = document.createTextNode(`${nameInput.value}: ${emailInput.value}`);
        li.appendChild(text);
        userList.appendChild(li); 
        nameInput.value = '';
        emailInput.value = '';
        password.value = '';}
    }

 
  
}
 


