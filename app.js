




let firstName = document.getElementById("fname");
let phone = document.getElementById("phone");
let paswd = document.getElementById("paswd");

let signupForm = document.getElementById("signupForm");
let email = document.getElementById("email");



signupForm.addEventListener('submit', function (e){
    e.preventDefault()
    
    const user = {
        firstName: firstName.value,
        phone: phone.value,
        paswd: paswd.value,
        email: email.value
      
    }
    console.log(user)
    window.localStorage.setItem("user", JSON.stringify(user))


})