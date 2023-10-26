function valiDate() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;

    checkUsername(username);
    checkEmail(email);
    checkPassword(password);
    checkcPassword(password, cpassword);
    
}

function checkUsername(username) {
    if (username.length >= 8 && /^[a-z]+$/.test(username)) {
        document.getElementById('username').classList.add('success');
        document.getElementById('username').classList.replace('error', 'success');
        document.getElementById('username_error').innerText = '';
    } else {
        document.getElementById('username').classList.add('error');
        document.getElementById('username_error').innerText = 'Username must be at least 8 characters long and contain only lowercase letters';
    }
}

function checkEmail(email) {
    if (email.length >= 8 && email.includes('@gmail')) {
        document.getElementById('email').classList.add('success');
        document.getElementById('email').classList.replace('error', 'success');
        document.getElementById('email_error').innerText = '';
    } else {
        document.getElementById('email').classList.add('error');
        document.getElementById('email_error').innerText = 'Please enter a valid Gmail address';
    }
}

function checkPassword(password) {
    if (password.length >= 8 && password.includes('.')) {
        document.getElementById('password').classList.add('success');
        document.getElementById('password').classList.replace('error', 'success');
        document.getElementById('password_error').innerText = '';
    } else {
        document.getElementById('password').classList.add('error');
        document.getElementById('password_error').innerText = 'Password must be at least 8 characters long and contain a dot (.)';
    }
}

function checkcPassword(password, cpassword) {
    if (password === cpassword && cpassword !== '') {
        document.getElementById('cpassword').classList.add('success');
        document.getElementById('cpassword').classList.replace('error', 'success');
        document.getElementById('cpassword_error').innerText = '';
    } else {
        document.getElementById('cpassword').classList.add('error');
        document.getElementById('cpassword_error').innerText = 'Passwords do not match';
    }
}
