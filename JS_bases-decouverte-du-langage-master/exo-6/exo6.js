// 2. Créer l'objet team
var team = {};

// 3. Ajouter les propriétés players et games
team.players = [];
team.games = [];

// 4. Ajouter quelques joueurs
team.players.push(
  { firstName: "Pablo", lastName: "Sanchez", age: 11 },
  { firstName: "Maria", lastName: "Lopez", age: 13 },
  { firstName: "Liam", lastName: "Smith", age: 12 }
);

// 5. Ajouter quelques matchs
team.games.push(
  { opponent: "Broncos", teamPoints: 42, opponentPoints: 27 },
  { opponent: "Tigers", teamPoints: 38, opponentPoints: 30 },
  { opponent: "Eagles", teamPoints: 50, opponentPoints: 45 }
);

// 6. Ajouter une méthode pour ajouter un joueur
team.addPlayer = function(firstName, lastName, age) {
  this.players.push({ firstName, lastName, age });
};

// 8. Ajouter une méthode pour ajouter un match
team.addGame = function(opponent, teamPoints, opponentPoints) {
  this.games.push({ opponent, teamPoints, opponentPoints });
};

// 10. Somme des points de l'équipe
team.totalTeamPoints = function() {
  let sum = 0;
  for (let game of this.games) {
    sum += game.teamPoints;
  }
  return sum;
};

// 11. Moyenne des points adverses
team.averageOpponentPoints = function() {
  if (this.games.length === 0) return 0;
  let sum = 0;
  for (let game of this.games) {
    sum += game.opponentPoints;
  }
  return sum / this.games.length;
};

// 12. Trouver le joueur le plus âgé
team.oldestPlayer = function() {
  if (this.players.length === 0) return null;
  let oldest = this.players[0];
  for (let player of this.players) {
    if (player.age > oldest.age) {
      oldest = player;
    }
  }
  return oldest;
};

// 13. Bonus : trier les joueurs par ordre alphabétique (par lastName)
team.sortPlayersByLastName = function() {
  this.players.sort((a, b) => a.lastName.localeCompare(b.lastName));
};

// Fonction de démonstration
function demoTeam() {
  // Ajouter un joueur
  team.addPlayer("Emma", "Brown", 14);
  // Ajouter un match
  team.addGame("Sharks", 45, 35);

  console.log("Joueurs :", team.players);
  console.log("Matchs :", team.games);

  console.log("Total des points de l'équipe :", team.totalTeamPoints());
  console.log("Moyenne des points adverses :", team.averageOpponentPoints().toFixed(2));
  
  const oldest = team.oldestPlayer();
  console.log("Joueur le plus âgé :", oldest.firstName, oldest.lastName, "âge :", oldest.age);

  // Trier les joueurs
  team.sortPlayersByLastName();
  console.log("Joueurs triés par nom de famille :", team.players);

  alert("Les informations de l'équipe ont été affichées dans la console !");
}
