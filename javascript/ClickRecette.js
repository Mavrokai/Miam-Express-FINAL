let containerDiv = document.getElementById('container');

let RecupJson = async () => {

  let result = await fetch('javascript/db-recipesSmall.json');
  let data = await result.json();



  let url = new URLSearchParams(window.location.search);
  let lastNumber = url.toString();
  let id = lastNumber.replace('=', '');




    let recette = data.recipes[id-1];
    let Noms = recette.name;
    let TempsDePréparation = recette.preptime;
    let TempsDeCuisson = recette.waittime;
    let cooktime = recette.cooktime;
    let Portions = recette.servings;
    let Commentaires = recette.comments;
    let calo = recette.calories;
    let Graisses = recette.fat;
    let GraissesSaturées = recette.satfat;
    let Glucide = recette.carbs;
    let Fibre = recette.fiber;
    let Sucre = recette.sugar;
    let protein = recette.protein;
    let instructions = recette.instructions;
    let ingredients = recette.ingredients;
    let tag = recette.tags;
    let Pays = recette.Contry;
    let Imag = recette.image;
    let timeTotal = TempsDeCuisson + TempsDeCuisson + cooktime; 



  document.querySelector('.img img').src = Imag;
  document.querySelector('.img img').alt = `Photo de ${Noms}`;
  

  // je fais .join() pour concaténer les éléments du tableau en une chaîne de caractères, 
// en les séparant par une chaîne vide, ce qui me permet de supprimer les virgules entre les éléments.
  document.querySelector('#ingredients table').innerHTML = ingredients.map(ingredient => `
    <tr>
      <td>${ingredient}</td>
    </tr>
  `).join('');


  // Affiche l'image de la recette avec une description
document.querySelector('.img img').src = Imag;
document.querySelector('.img img').alt = `Photo de ${Noms}`;



// Affiche les instructions de préparation de la recette en modifiant directement le text qui se trouve dans l'élément qu'on cible
  document.querySelector('.preparation p').textContent = instructions;
  document.getElementById('portion-span').textContent = `${Portions} personnes`;
  document.getElementById('time-span').textContent = `${timeTotal} mins`;
  document.getElementById('calories-span').textContent = `${calo} kcal`;

}
RecupJson();