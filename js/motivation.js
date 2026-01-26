const container = document.querySelector('#container');

export function motivation() {
    const motivationDiv = document.createElement('div');
    motivationDiv.style.color = 'green';
    
    const messageSpan = document.createElement('span');
    messageSpan.textContent = 'Keep Working';
    
    const stopBtn = document.createElement('button');
    stopBtn.textContent = 'stop';
    
    motivationDiv.appendChild(messageSpan);
    motivationDiv.appendChild(document.createTextNode(' ')); // Add space
    motivationDiv.appendChild(stopBtn);
    
    container.appendChild(motivationDiv);
    
    const interval = setInterval(() => {
        messageSpan.textContent = 'Keep Working ';
    }, 5000);
    
    stopBtn.onclick = () => {
        clearInterval(interval);
        motivationDiv.style.display = 'none';
    };
}