function saveToLocalStorage(e){
    e.preventDefault();

    const name = e.target.username.value;
    const email = e.target.emailId.value;
    const phonenumber = e.target.phoneNumber.value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phonenumber', phonenumber);
    console.log('data stored in local storage');

    let userDetails = {
        name: name,
        email: email,
        phonenumber: phonenumber,
    }
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
}
