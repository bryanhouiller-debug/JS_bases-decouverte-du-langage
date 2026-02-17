// Tableau initial
var secretMessage = [
  "Learning", "isn't", "about", "what", "you", "get", "easily", "the", 
  "first", "time,", "it's", "about", "what", "you", "can", "figure", 
  "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"
];

function revealMessage() {
  // 1. Supprimer le dernier élément
  secretMessage.pop();

  // 2. Ajouter "to" et "program" à la fin
  secretMessage.push("to", "program");

  // 3. Remplacer "easily" par "right"
  var indexEasily = secretMessage.indexOf("easily");
  if (indexEasily !== -1) {
    secretMessage[indexEasily] = "right";
  }

  // 4. Supprimer le premier élément
  secretMessage.shift();

  // 5. Ajouter "Programming" au début
  secretMessage.unshift("Programming");

  // 6. Remplacer la série de cinq mots par "know"
  // La série est : 'get', 'right', 'the', 'first', 'time,'
  var startIndex = secretMessage.indexOf("get");
  if (startIndex !== -1) {
    secretMessage.splice(startIndex, 5, "know");
  }

  // 7. Afficher le message final
  var finalMessage = secretMessage.join(" ");
  console.log(finalMessage);
  alert(finalMessage);
}


console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];