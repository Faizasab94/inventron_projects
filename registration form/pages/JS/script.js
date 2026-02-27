
function showGreeting(name) {
    alert(`Hello, ${name}! Registration Sucessfull.`);
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorDiv = document.getElementById('passwordError');
    const firstName = document.getElementById('firstName').value;

    if (password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match.';
        return;
    } else {
        errorDiv.textContent = '';
       
        showGreeting(firstName);
       
        
    }
});