// On va chercher la "section" qui va contenir les div crée  par le script
let containDiv = document.getElementById('tbody');

// On crée une fonction pour récupérer les recettes qui sont dans notre .json
let RecupJson = async () => {

// On demande au fichier db-recipesSmall.json de nous donner les recettes
  let result = await fetch('./javascript/db-recipesSmall.json');

// On transforme les recettes récupérées pour qu’on puisse les lire
  let ContenueJson = await result.json();


// On compte combien de recettes on a dans notre .json
  let max = ContenueJson.recipes.length;

// On met toutes les recettes dans une liste
    let arr = ContenueJson.recipes;

// Fonction pour mélanger les recettes pour en avoir des différentes à chaque fois
    function shuffle(arr) {
// Une nouvelle liste pour nos recettes mélangées
      let shuffleArr = [];
// Une liste pour se rappeler quelles recettes on a déjà choisies
      let useIndexs = [];

      let j = 0;
// On continue jusqu’à avoir toutes les recettes
      while (j < max) {
// On choisir un nombre au hasard maximum le nombre de recettes max
        let random = Math.floor(Math.random() * max );
// Si on n’a pas déjà cette recette
        if (!useIndexs.includes(random)) {
// On ajoute la recette dans notre nouvelle liste
          shuffleArr.push(arr[random]);
// On note qu’on a utilisé cette recette
          useIndexs.push(random);
// On passe à la recette suivante
          j++;
        }
      }
     return shuffleArr;

    }

// On mélange les recettes et les stocke dans "recettes"
    let recettes = shuffle(arr);


    let i = 0;

// On fait une boucle pour afficher les 3 premières recettes qui sorte du mélangeur (shuffle)
while (i < max) {
// On prend la recette numéro "i"
    let recette = recettes[i];

    
// On récupère les infos importantes de la recette
    let id = recette.id;
    let Noms = recette.name;
    let TempsDePréparation = recette.preptime;
    let TempsDeCuisson = recette.waittime;
    let cooktime = recette.cooktime;
    let Portions = recette.servings;
    let Commentaires = recette.comments;
    let calories = recette.calories;
    let Graisses = recette.fat;
    let GraissesSaturées = recette.satfat;
    let Glucide = recette.carbs;
    let Fibre = recette.fiber;
    let Sucre = recette.sugar;
    let protein = recette.protein;

//je convertir le number en caractére pour pouvoir le clice plustrard (impossible de slice() un nombre)
let instruFull = recette.instructions.toString()


// je crée une variable qui va bloqué le nombre de caractére max afficher max 600 puis ajoute ... a la fin
function car () {

  if (instruFull.length > 600) {
    //modifier pour le nombre de caractére dans l'instructions
    return instruFull.slice(0, 600) + '...'; // Ajoute les points de suspension
  }
  return instruFull
}



let instruct = car();

console.log(instruct)

    let instructions = car();
    let ingredients = recette.ingredients;
    let tag = recette.tags;
    let Pays = recette.Contry;
    let Imag =  recette.image;

// On crée un ID spécial pour le bouton
    let Bid = 'B' + id;



// On afficheles infos de la recette
      const carte = `

      <div id="card"  class="${id}">

        <img id="ImageR" class="${id}" src="${Imag}" alt="Photo De  La Recette">

        <h5 class="${id}">Nom du plat : </h5>
         <div class="${id}">
          ${Noms}
        </div>

        <h5 class="${id}">Instructions : </h5>
        
        <div class="${id}">
          ${instructions}
        </div>

      </div>

      <div class="${id}" id="divBT">
      <a href="./test.html?${id}">
        <button id="Bcard" class="${Bid}" >Voir Plus</button>
        </a>
        </div>
    `

// On ajoute cette carte dans notre index pour que tout le monde puisse la voir
    containDiv.insertAdjacentHTML('beforeend', carte);
    i++


  }



}
// On lance la fonction pour récupérer et afficher les recettes
RecupJson();