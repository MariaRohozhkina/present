const input = document.getElementById('password');


input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {

        const text = input.value.trim();
        const messageDiv = document.getElementById('output');
        
        if (text.toLowerCase() != 'год') {
            messageDiv.textContent = 'Неправильный пароль';
            messageDiv.style.color = 'red';
        } else {
            messageDiv.textContent = 'Поздравляю!';
            messageDiv.style.color = 'black';
        }

       
        input.value = '';
    }
})