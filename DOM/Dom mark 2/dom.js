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



//   SELECTORS
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


//Make the 3rd element in the list have green background color
// let thirdItem = document.querySelector('.list-group');
// thirdItem.children[2].style.backgroundColor = 'green';
// thirdItem.children[1].style.color = 'orange';

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

// let newlist = document.getElementsByTagName('li');
// console.log(newlist);
// newlist[4].style.color = 'yellow';
// newlist[4].style.backgroundColor = 'orange';




//             TRAVERSING THE DOM               //
// parentNode
// let itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'blue';
// itemList.parentNode.parentNode.parentNode.style.backgroundColor = 'brown';


// childNode    // useless don't use it.. we will use children instead of this one


// FirstChild   // Another useless product.. use firstElementChild instead of this one


// we can use children[1] instead of firstElementChild and lastElementChild in javascript dom


// nextElementSibling
// let itemList = document.querySelector('#items');
//console.log(itemList.nextElementSibling);
// previousElementSibling
//console.log(itemList.previousElementSibling);




                    // IMPORTANT
//   createElement method
// create a div
// let newDiv = document.createElement('div');

// // add class
// newDiv.className = 'hello';

// // add id
// newDiv.id = 'namaste';

// //add attribute using setAttribute method
// newDiv.setAttribute('title', 'hello div');

// // Create text node using createTextNode method
// let newDivText = document.createTextNode('Hello World');

// // add text to div using appendChild method
// newDiv.appendChild(newDivText);

// // Inserting things inside the dom
// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// //console.log(newDiv);
// // Here, you are using the insertBefore method to insert the newDiv (the div element you created) before the h1 element within the container. This means the newDiv will be placed as a sibling element before the h1 element inside the container
// container.insertBefore(newDiv, h1);



//Now go head and add HEllo word before Item 1

// let newHtoo = document.createElement('h2');
// newHtoo.className = 'htwo';
// let newHtooText = document.createTextNode('Hello word');
// newHtoo.appendChild(newHtooText);
// //console.log(newHtoo);

// let container = document.querySelector('header .title');
// let itemList = document.querySelector('#items');
// let firstListItem = itemList.firstElementChild;

// itemList.insertBefore(newHtoo, firstListItem);



// Add new li in the item list
let newList = document.createElement('li');
newList.classList.add('list-group-item');
let newListText = document.createTextNode('Item 0');
newList.appendChild(newListText);

let container = document.querySelector('.list-group');
let firstItem = document.querySelector('.list-group li:first-child');
container.insertBefore(newList, firstItem);
