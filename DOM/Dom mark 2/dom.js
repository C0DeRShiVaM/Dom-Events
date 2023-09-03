// EXAMINE THE DOCUMENT OBJECT

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;          // you can also change title
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);

// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Namaste';   //changing content at index 10

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);



// //   SELECTORS
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello'; // It returns: The text content of the element and all descendaces, with spacing and CSS hidden text, but without tags.
// headerTitle.innerText = 'Namaste';  // It returns: Just the text content of the element and all its children, without CSS hidden text spacing and tags, except <script> and <style> elements.
// headerTitle.innerHTML = '<h3>Hello</h3>'; // The innerHTML property returns: The text content of the element, including all spacing and inner HTML tags.

// //changing style
// let header = document.querySelector('#main-header');
// header.style.borderBottom = '3px solid black'; //border-bottom is the actual css property but here you have to use camel case


// //
// let addItem = document.querySelector('.title');
// addItem.style.fontWeight = 'bold';   //check above why we used camel case instead of font-weight
// addItem.style.color = 'green';


// //Make the 3rd element in the list have green background color
// let thirdItem = document.querySelector('.list-group');
// thirdItem.children[2].style.backgroundColor = 'green';

// // Make all the items in the list bold
// thirdItem.style.fontWeight = 'bold';



// // // another way
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].style.color = 'yellow';
// items[1].style.backgroundColor = 'pink';
// items[1].style.fontWeight = 'bold';
// items[2].style.color = 'green';

// //items.style.backgroundColor = 'brown';  // here it will not work because items has a collection of array when using class

// for (let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = 'brown';
// }


// getElementsByTagName -> It will work in the exctly same way as you saw aove in class

let newlist = document.getElementsByTagName('li');
console.log(newlist);
newlist[4].style.color = 'yellow';
newlist[4].style.backgroundColor = 'orange';