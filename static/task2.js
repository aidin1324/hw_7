document.getElementById('calculateBtn').addEventListener('click', function() {
    document.getElementById('number1Error').textContent = '';
    document.getElementById('number2Error').textContent = '';
    document.getElementById('result').textContent = '';

    let valid = true;

    const num1 = document.getElementById('number1').value.trim();
    const num2 = document.getElementById('number2').value.trim();
    const operation = document.getElementById('operation').value;

    if (num1 === '' || isNaN(num1)) {
        valid = false;
        document.getElementById('number1Error').textContent = 'Введите корректное число.';
    }

    if (num2 === '' || isNaN(num2)) {
        valid = false;
        document.getElementById('number2Error').textContent = 'Введите корректное число.';
    }

    if (valid) {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        let result;

        switch(operation) {
            case 'add':
                result = number1 + number2;
                break;
            case 'subtract':
                result = number1 - number2;
                break;
            case 'multiply':
                result = number1 * number2;
                break;
            case 'divide':
                if (number2 === 0) {
                    document.getElementById('result').textContent = 'Ошибка: Деление на ноль.';
                    return;
                }
                result = number1 / number2;
                break;
            default:
                result = 'Неизвестная операция.';
        }

        document.getElementById('result').textContent = `Результат: ${result}`;
    }
});