const input = document.getElementById('password');


input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {

        const text = input.value.trim();
        const messageDiv = document.getElementById('output');
        
        if (text.toLowerCase() != 'год') {
            messageDiv.textContent = 'Неправильный пароль';
            messageDiv.style.color = 'red';
        } else {
            messageDiv.textContent = 'Спутник юности и взрослых путей. Помогает перенести трудности. Он путник с тобой, на двоих одна тень.';
            messageDiv.style.color = 'black';
        }

       
        input.value = '';
    }
})