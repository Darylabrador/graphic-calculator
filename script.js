// Récupère les valeurs nécessaires à l'implémentation de l'interface 
let formulaire = document.querySelector('#formulaire');
let inputField = document.querySelector('#touche');
let screenResult  = document.querySelector('#screen');
var value = "";
var valueCalcul = [];
var chiffre1, chiffre2, chiffre1Float, chiffre2Float, result = 0;

screenResult.innerHTML = "Saisir deux nombres pour les calculs";

document.querySelectorAll('button').forEach(element => {
    element.addEventListener('click', e => {

        // On récupère la valeur courante liée au click
        if (e.currentTarget.value != "="){
            value += e.currentTarget.value;
        }
        
        // On met à jour l'écran d'affichage
        screenResult.innerHTML = value;

        // Les conditions pour effacer ou commencer à effectuer les calculs
        if (e.currentTarget.value == ""){
            screenResult.innerHTML = "";
            value = "";
        }
        
        // C'est on appui sur egale, l'expression régulière va divisé pour avoir des chiffres
        if(e.currentTarget.value == "="){

            // Expression régulière pour divisé en deux nombres et efface l'opérateur
            let operation = new RegExp(/[-+x]/);
            [chiffre1, chiffre2] = value.split(operation);

            // On recupère l'opérateur par le biais de match qui retour un tableau
            let operateur = value.match(operation)[0];

            // Condition pour avoir deux chiffres
            if(chiffre1 == undefined || chiffre2 == undefined){
                alert("Veuillez saisir deux nombres pour l'operation");
            }else{
                chiffre1Float = parseFloat(chiffre1);
                chiffre2Float = parseFloat(chiffre2);
            }

            switch(operateur){
                case "+":
                    result = parseFloat(chiffre1Float + chiffre2Float).toFixed(2);
                    screenResult.innerHTML = `${chiffre1Float} ${operateur} ${chiffre2Float} = ${result}`;
                    break;
                case "-":
                    result = parseFloat(chiffre1Float - chiffre2Float).toFixed(2);
                    screenResult.innerHTML = `${chiffre1Float} ${operateur} ${chiffre2Float} = ${result}`;
                    break;
                case "x":
                    result = parseFloat(chiffre1Float * chiffre2Float).toFixed(2);
                    screenResult.innerHTML = `${chiffre1Float} ${operateur} ${chiffre2Float} = ${result}`;
                    break;
                default:
                    alert("Une erreur est survenue");
            }
        }
    });
});

