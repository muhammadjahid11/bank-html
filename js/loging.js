// step-1:add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function (event) {
    event.preventDefault();
    // step-2: get the email address inside the email input field
    //always remember to use .value to get text from an input

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);
    // step 3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);
    // DANGER: DO NOT VERIFY email password on the client side
    // step-4: verify email and password and check whether valid user or not valid user.
    if(email === 'jahid@hasan.com' && password === 'jahid'){
        window.location.href = 'bank.html'

    }
    else{
        alert('toi password vole gesos !! toke ami tejjo sontan korlam')
    }
});
