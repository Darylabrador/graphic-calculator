let formulaire = document.querySelector('#formulaire');
let inputField = document.querySelector('#touche');
let screen     = document.querySelector('#screen');

document.querySelectorAll('button').forEach(element => {
    element.addEventListener('click', e => {

        let data = element.getAttribute('value');
        screen.textContent += data ;

        if(data == "delete"){
            screen.textContent = "";
        }

    });
});