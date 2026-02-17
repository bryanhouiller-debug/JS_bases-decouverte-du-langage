function translateWhaleLanguage() {
  // 1. Variable contenant la phrase à traduire
  var input = prompt("Entrez une phrase à traduire en langue des baleines :");

  // 2. Tableau des voyelles
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  // 3. Tableau pour stocker les voyelles trouvées
  var resultArray = [];

  // 4. Boucle pour parcourir toutes les lettres de la phrase
  for (var i = 0; i < input.length; i++) {
    var letter = input[i].toLowerCase(); // ignorer la casse
    console.log("Lettre courante :", letter);

    // 5. Vérifier si la lettre est une voyelle
    if (vowels.indexOf(letter) !== -1) {
      resultArray.push(letter); // 7. Ajouter la voyelle dans le tableau
    }

    // 6. Bonus : alternative avec boucle interne
    /*
    for (var j = 0; j < vowels.length; j++) {
      if (letter === vowels[j]) {
        resultArray.push(letter);
        break;
      }
    }
    */
  }

  // 8. Transformer le tableau en chaine et mettre en majuscules
  var whaleLanguage = resultArray.join("").toUpperCase();

  // Afficher le résultat
  console.log("Langue des baleines :", whaleLanguage);
  alert("Traduction : " + whaleLanguage);
}


console.log('exo-5');