// 1. Récupérer le choix de l'utilisateur via prompt
function getPlayerChoice(playerInput) {
  // 3. Insensible à la casse
  playerInput = playerInput.toLowerCase();

  // 4. Vérifier que le choix est valide ou cheat code
  if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors' || playerInput === 'bomb') {
    return playerInput;
  } else {
    console.error("Choix invalide ! Tapez rock, paper, scissors ou bomb.");
    return null;
  }
}

// 5. Choix aléatoire de l'ordinateur
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3); // 0,1,2
  return choices[randomIndex];
}

// 6. Comparer les choix et déterminer le gagnant
function findWinner(playerChoice, computerChoice) {
  // 13. Cheat code
  if (playerChoice === 'bomb') {
    return 'Won';
  }

  // 7. Cas d'égalité
  if (playerChoice === computerChoice) {
    return 'Tied';
  }

  // 8-10. Cas où quelqu'un gagne
  if (playerChoice === 'rock') {
    return computerChoice === 'scissors' ? 'Won' : 'Lost';
  }

  if (playerChoice === 'paper') {
    return computerChoice === 'rock' ? 'Won' : 'Lost';
  }

  if (playerChoice === 'scissors') {
    return computerChoice === 'paper' ? 'Won' : 'Lost';
  }
}

// 11-12. Fonction principale du jeu
function playGame() {
  var playerInput = prompt("Votre choix (rock, paper, scissors) ?");
  var uChoice = getPlayerChoice(playerInput);

  if (!uChoice) return; // arrêter si choix invalide

  var computerChoice = getComputerChoice();

  console.log("Votre choix :", uChoice);
  console.log("Choix de l'ordinateur :", computerChoice);

  var result = findWinner(uChoice, computerChoice);
  console.log("Résultat :", result);

  alert(`Vous avez choisi : ${uChoice}\nOrdinateur : ${computerChoice}\nRésultat : ${result}`);
}

console.log('exo-3');