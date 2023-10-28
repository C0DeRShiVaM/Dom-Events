let form = document.querySelector('#myForm');
form.addEventListener('submit', addUserDetails);

function addUserDetails(e){
    e.preventDefault();

    const expenseAmount = document.querySelector('#expenseAmount').value;
    const description = document.querySelector('#description').value;
    const dropdown = document.querySelector('#dropdown').value;

    // Get the existing data from local storage or create an empty array if it doesn't exist
    let userArray = JSON.parse(localStorage.getItem('userData')) || [];

    let newUser = {
        expenseAmount: expenseAmount,
        description: description,
        dropdown: dropdown,
    };
    // Add the new user object to the array
    userArray.push(newUser);

    // store the updated user array back in local storage
    localStorage.setItem('userData', JSON.stringify(userArray));
    console.log('Data stored in local storage');

    //clear form after submitting
    form.reset();
    showDataOnForm(newUser);
}

function showDataOnForm(newUser){
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    // li.className = "list-group-item active";
    li.textContent = newUser.expenseAmount + ' - ' + newUser.description + ' - ' + newUser.dropdown;

    ul.appendChild(li);
    const container = document.querySelector('.container');
    container.appendChild(ul);

    // Add delete button
    const dBtn = document.createElement('button');
    dBtn.className = 'btn btn-danger';
    dBtn.appendChild(document.createTextNode('DeleteExpense'));
    li.appendChild(dBtn);

    // Add Edit button
    const eBtn = document.createElement('button');
    eBtn.className = 'btn btn-primary';
    eBtn.appendChild(document.createTextNode('EditExpense'));
    li.appendChild(eBtn);

    // delete functionality
    dBtn.addEventListener('click', removeItem);
    function removeItem(){
        if(confirm('kya taklif h aapko?')){
            const ul = li.parentElement;
            ul.removeChild(li);

            // Get the existing user data from local storage
            let userArray = JSON.parse(localStorage.getItem('userData')) || [];

            // Find and remove the user object by description
            userArray = userArray.filter(user => user.description !== newUser.description);

            // Store the updated user array back in local storage
            localStorage.setItem('userData', JSON.stringify(userArray));
        }
    }

    // Editing functionality
    eBtn.addEventListener('click', editItem)

    function editItem(){
        if (confirm('mita do')){
            ul.removeChild(li);
            let userArray = JSON.parse(localStorage.getItem('userData')) || [];
            userArray = userArray.filter(user => user.description !== newUser.description);
            localStorage.setItem('userData', JSON.stringify(userArray));

            document.querySelector('#expenseAmount').value = newUser.expenseAmount;
            document.querySelector('#description').value = newUser.description;
            document.querySelector('#dropdown').value = newUser.dropdown;
        }
    }
}