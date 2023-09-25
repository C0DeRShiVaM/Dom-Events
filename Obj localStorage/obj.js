// function saveToLocalStorage(e){
//     e.preventDefault();

//     const name = e.target.username.value;
//     const email = e.target.emailId.value;
//     const phonenumber = e.target.phoneNumber.value;

//     localStorage.setItem('name', name);
//     localStorage.setItem('email', email);
//     localStorage.setItem('phonenumber', phonenumber);
//     console.log('data stored in local storage');

//     let userDetails = {
//         name: name,
//         email: email,
//         phonenumber: phonenumber,
//     }
//     localStorage.setItem('userDetails', JSON.stringify(userDetails));
// }




// STORING MULTIPLE DATA IN LOCAL STORAGE

let form = document.querySelector('#myForm');

form.addEventListener('submit', addUserDetails);

function addUserDetails(e){
    e.preventDefault();

    const name = document.querySelector('#userName').value;
    const email = document.querySelector('#emailId').value;
    const phoneNo = document.querySelector('#phoneNumber').value;

    // Get the existing user data from local storage or create an empty array if it doesn't exist
    let userArray = JSON.parse(localStorage.getItem('userDetails')) || [];

    let newUser = {
        name: name,
        email: email,
        phoneNo: phoneNo,
    };

    // Add the new user object to the array
    userArray.push(newUser);

    // Store the updated user array back in local storage
    localStorage.setItem('userDetails', JSON.stringify(userArray));
    console.log('Data stored in local storage');

    // clear form after submitting
    form.reset();
    showUserOnScreen(newUser);
}

function showUserOnScreen(newUser){
    const ul = document.querySelector('#itemList');
    const li = document.createElement('li');
    li.textContent = newUser.name + ' - ' + newUser.email + ' - ' + newUser.phoneNo;
    ul.appendChild(li);
}
