//Chargement du fichier .json et de ses recettes / vérification de son existence
async function load() {
    const data = await fetch("./javascript/livre_recette.json")
    console.log(data);
    const recettesList = await data.json()
    console.log(recettesList); //Test récup liste des recettes
    console.log(recettesList.livres[5]); //Test récup une recette particulière
    let maxLivres = recettesList.livres.length;
    console.log(maxLivres); //Test chercher nombre max de livres
        
    for(i = 0; i < maxLivres; i++) {
        
        let livre = recettesList.livres[i];
        let idLivre = livre.id;
        let titreLivre = livre.titre;
        let txtLivre = livre.description;
        let prixLivre = livre.prix;
        let lienLivre = livre.lien;
        let imgLivre = livre.image;
        console.log(livre);
        console.log(titreLivre);
        console.log(prixLivre);
            
        let divLivres = document.getElementById("les_livres");

        const cadreLivre = `
                <div class="livre">
                    <div>
                        <img id="couvertureLivre" src="${imgLivre}" alt="Couverture du livre">
                    </div>
                    <div class="texte_livre">
                    <h3>${titreLivre}</h3>
                    <p>${txtLivre}</p>
                    <a href="${lienLivre}"><button class="lien_livre">Retrouvez le ici</button></a>
                    </div>
                </div>
        `;

        divLivres.insertAdjacentHTML("beforeend", cadreLivre);
    }
}


load()