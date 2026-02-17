// Référence au tableau et filtres
var tbody = document.querySelector("#articlesTable tbody");
var typeFilter = document.getElementById("typeFilter");
var sortField = document.getElementById("sortField");
var sortOrder = document.getElementById("sortOrder");
var inStockOnly = document.getElementById("inStockOnly");

// Remplir la liste déroulante des types
var uniqueTypes = [...new Set(articles.map(a => a.type))];
uniqueTypes.forEach(type => {
  var option = document.createElement("option");
  option.value = type;
  option.textContent = typeTranslations[type] || type;
  typeFilter.appendChild(option);
});

// Fonction pour afficher les articles
function displayArticles(list) {
  tbody.innerHTML = "";
  list.forEach(a => {
    var tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${a.name}</td>
      <td>${a.translatedType}</td>
      <td>${a.price}</td>
      <td>${a.stock}</td>
      <td>${a.contact}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Fonction pour filtrer et trier
function applyFilters() {
  let filtered = [...articles];

  // Filtrer par type
  if (typeFilter.value) {
    filtered = filtered.filter(a => a.type === typeFilter.value);
  }

  // Filtrer par stock
  if (inStockOnly.checked) {
    filtered = filtered.filter(a => a.stock > 0);
  }

  // Trier
  let field = sortField.value;
  let order = sortOrder.value;
  filtered.sort((a, b) => {
    if(a[field] < b[field]) return order === "asc" ? -1 : 1;
    if(a[field] > b[field]) return order === "asc" ? 1 : -1;
    return 0;
  });

  displayArticles(filtered);
}

// Événement sur bouton appliquer
document.getElementById("applyFilters").addEventListener("click", applyFilters);

// Formulaire ajout article
document.getElementById("addArticleForm").addEventListener("submit", function(e){
  e.preventDefault();
  var newArticle = {
    name: document.getElementById("newName").value,
    type: document.getElementById("newType").value,
    price: Number(document.getElementById("newPrice").value),
    stock: Number(document.getElementById("newStock").value),
    contact: document.getElementById("newContact").value,
    translatedType: typeTranslations[document.getElementById("newType").value] || document.getElementById("newType").value
  };
  articles.push(newArticle);

  // Si nouveau type, l'ajouter au filtre
  if(!uniqueTypes.includes(newArticle.type)){
    uniqueTypes.push(newArticle.type);
    var option = document.createElement("option");
    option.value = newArticle.type;
    option.textContent = newArticle.translatedType;
    typeFilter.appendChild(option);
  }

  applyFilters();
  this.reset();
});

// Afficher tous les articles au chargement
displayArticles(articles);
