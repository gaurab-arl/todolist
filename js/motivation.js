const container = document.querySelector('#motivation-container');

export function motivation() {
    const messageSpan = document.querySelector('#motivation-message');
    if (!messageSpan) return;

    setInterval(() => {
        messageSpan.textContent = 'Keep Working ';
    }, 5000);
}