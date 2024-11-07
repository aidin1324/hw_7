document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.querySelectorAll('.error').forEach(span => span.textContent = '');
    document.querySelectorAll('input').forEach(input => input.classList.remove('error'));
    
    let valid = true;
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    if (name === '') {
        valid = false;
        document.getElementById('nameError').textContent = 'Имя не может быть пустым.';
        document.getElementById('name').classList.add('error');
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        valid = false;
        document.getElementById('emailError').textContent = 'Некорректный email.';
        document.getElementById('email').classList.add('error');
    }
    
    if (password.length < 8) {
        valid = false;
        document.getElementById('passwordError').textContent = 'Пароль должен содержать минимум 8 символов.';
        document.getElementById('password').classList.add('error');
    }
    
    if (valid) {
        alert('Форма успешно отправлена!');
    }
});