'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    debugger;
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const email = document.getElementById('Email').value
    const password = document.getElementById('pass').value
    const icon = document.getElementById('icon');
    const icon2 = document.getElementById('icon2');
    const icon3 = document.getElementById('icon3');
    const icon4 = document.getElementById('icon4');
    const error = document.getElementById('error');
    const error2 = document.getElementById('error2');
    const error3 = document.getElementById('error3');
    const error4 = document.getElementById('error4');
    
    if(firstName ===  ""){
        icon.style.display = 'inline-block';
        error.innerHTML = 'First name is required';
    }

    if(lastName === ""){
        icon2.style.display = 'inline-block';
        error2.innerHTML = 'Last name is required';
    }

    if(email === "" && !email.includes('@') && !email.includes('.com')){
        icon3.style.display = 'inline-block';
        error3.innerHTML = 'Email field cannot be empty';
    } else if(email !== ""){
        alert(`We just sent a link to ${email}`)
    }
    else{
        alert('Email incorrect');
    }

    if(password ===  ""){
        icon4.style.display = 'inline-block';
        error4.innerHTML = 'password is required';
    } 
})