// Récupère le bouton
let button = document.getElementById("convertBtn");

// Récupère le champ input
let input = document.getElementById("kelvinsInput");

// Récupère la zone d'affichage
let result = document.getElementById("result");

// Quand on clique sur le bouton
button.addEventListener("click", function() {

    // Convertit la valeur saisie en nombre
    let kelvins = Number(input.value);

    // Conversion en Celsius
    let celsius = kelvins - 273;

    // Conversion en Fahrenheit
    let fahrenheits = celsius * (9/5) + 32;

    // Arrondi
    fahrenheits = Math.floor(fahrenheits);

    // Affichage du résultat
    result.textContent = "La température est de " + fahrenheits + "°F";

});

console.log('hello from file');