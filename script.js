function validateForm(event) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    

    // Remove any existing error messages
    

    // Validate name
    if (nameInput.value === '') {
        nameInput.classList.add('error');
        event.preventDefault();
    } else {
        nameInput.classList.remove('error');
    }

    // Validate email
    if (emailInput.value === '') {
        emailInput.classList.add('error');
        event.preventDefault();
    } else if (!isValidEmail(emailInput.value)) {
        emailInput.classList.add('error');
        event.preventDefault();
    } else {
        emailInput.classList.remove('error');
    }

    // Validate message
    
}



function isValidEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById('contact-form').addEventListener('submit', validateForm);
