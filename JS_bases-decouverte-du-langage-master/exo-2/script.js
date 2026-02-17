// 🔹 Activer ou désactiver le mode test
const isTesting = false;

// 🔹 Création de l'objet Date
const myDate = new Date();

// 🔹 Messages
const weekMessage = "Pas encore le weekend...";
const weekendMessage = "C'est le weekend ! ";

// 🔹 Variables jour et heure
let day;
let hour;

// 🔹 MODE TEST
if (isTesting === true) {

    // Demande le jour (0 = Dimanche, 1 = Lundi ... 6 = Samedi)
    day = Number(prompt("Entrez un jour (0=Dimanche ... 6=Samedi)"));

    // Demande l'heure
    hour = Number(prompt("Entrez une heure (0-23)"));

} else {

    // Jour actuel
    day = myDate.getDay();

    // Heure actuelle
    hour = myDate.getHours();
}

// 🔹 Logique principale

if (
    day === 0 || // Dimanche
    day === 6 || // Samedi
    (day === 5 && hour >= 17) || // Vendredi après 17h
    (day === 1 && hour < 9) // Lundi avant 9h
) {
    console.log(weekendMessage);
} else {
    console.log(weekMessage);
}

console.log('exo-2');