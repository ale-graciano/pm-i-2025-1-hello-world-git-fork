const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        nameInput.value = '';
        messageP.innerText = '';
    }
});

nameInput.addEventListener('keyup', function (event) {
    if (nameInput.value === '') {
        messageP.innerText = '';
    }
    else{
        if (event.keyCode ==13)
            helloWorld()
    }
})

const helloWorld = () => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
}

function limpaCampos() {
    messageP.innerText = '';
    nameInput.value= '';
}