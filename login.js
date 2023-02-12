document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // pass section
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);
})