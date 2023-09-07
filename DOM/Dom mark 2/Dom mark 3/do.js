let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

//Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    let newItem = document.querySelector('#item').value;

    // Create new li elememt
    let li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem)); // here the textNode will be whatever form returns

    // create del button element
    let deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
    // Add edit button next to the delete icon
    let editButton = document.createElement('button');
    editButton.className = 'btn btn-danger btn-sm float-right delete';
    editButton.appendChild(document.createTextNode('Edit'));
    li.appendChild(editButton);
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if (e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
