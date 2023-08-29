// Single element selectors
// console.log(document.getElementById('my-form'));  // we will use this sometimes. inside this we don't use # with id name but we have to use # inside query selector
// console.log(document.querySelector('.msg'));

// Multiple element selectors
// console.log(document.querySelectorAll('h1'));



// const ul = document.querySelector('.firstitem');
// // ul.lastElementChild.remove();  // removing elements from html using remove method

// ul.textContent = 'Hello'   //editing content
// ul.style.color = 'green';

// const secondUl = document.querySelector('.secondItem');
// secondUl.textContent = 'Vegeta';
// secondUl.style.color = 'yellow';

// //converting last element in ul to h1
// const last = document.querySelector('.items');
// last.children[2].innerHTML = '<h1>Perfect Cell</h1>'




//                 Javascript Events
//    click event
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log(e.target.className);
// });


// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'black';  // clicking the submit button will change the background color
//     document.querySelector('body').classList.add('bg-dark');
// });


// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     document.querySelector('.items').children[2].innerHTML = '<h1>Breathe air</h1>';
// });


// mouseover event
// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseover', (e)=>{
//     e.preventDefault();
//     document.querySelector('header').style.background = 'blue';
// });


// mouseout event
// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseout', (e)=>{
//     e.preventDefault();
//     document.querySelector('header').style.background = 'blue';
// });



// Putting the values in form and making it functional
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(()=> msg.remove(), 3000);
    }else{
        console.log('success');
    }
}
