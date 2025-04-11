// function buttonClickHandler() {
//     console.log('Button clicked');
//     document.getElementById('demo').innerHTML = 'tekstas';
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     document.getElementById('demo').style.color = `rgb(${r}, ${g}, ${b})`;
//     changeButtonPosition(document.getElementById('clickMe'));
// }
// function changeButtonPosition(clickMeButton) {
//     const randomTop = Math.floor(Math.random() * 100);
//     const randomLeft = Math.floor(Math.random() * 100);
//     clickMeButton.style = `position: absolute; top: ${randomTop}%; left: ${randomLeft}%;`;
// }
function checkLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageBox = document.getElementById('messageBox');

    messageBox.style.display = 'none';
    messageBox.className = 'message-box';

    if (username === '' || password === '') {
        messageBox.textContent = 'Iveskite duomenys !';
        messageBox.classList.add('info');
        messageBox.style.display = 'block';
    } else if (
        (username === 'admin' && password === 'master') ||
        (password === username + '11')
    ) {
        messageBox.textContent = 'Sveiki prisijunge!';
        messageBox.classList.add('success');
        messageBox.style.display = 'block';
    } else {
        messageBox.textContent = 'Neteisingi prisijungimo duomenys!';
        messageBox.classList.add('error');
        //rgergergehrreh
        messageBox.style.display = 'block';


    }
}

