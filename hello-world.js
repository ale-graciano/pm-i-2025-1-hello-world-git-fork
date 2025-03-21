const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        nameInput.value = '';
        messageP.innerText = '';
    }
});

const helloWorld = () => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
}