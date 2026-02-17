var articles = [
  {name: "Nintendo Switch", type: "videoGame", price: 299, stock: 5, contact: "alice@example.com"},
  {name: "PS5", type: "videoGame", price: 499, stock: 0, contact: "bob@example.com"},
  {name: "MacBook Pro", type: "computer", price: 1299, stock: 3, contact: "carol@example.com"},
  {name: "iPhone 13", type: "phone", price: 899, stock: 10, contact: "dave@example.com"}
];

// Objet de traduction des types
var typeTranslations = {
  videoGame: "Jeux Vidéos",
  computer: "Ordinateur",
  phone: "Téléphone"
};

// Ajouter le type traduit aux articles
articles.forEach(a => a.translatedType = typeTranslations[a.type] || a.type);
