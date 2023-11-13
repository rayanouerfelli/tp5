console.log("Script chargée");
let jour = document.querySelector('input[name="jour"]');
let mois = document.querySelector('input[name="mois"]');
let envoyer = document.querySelector('button[name="envoyer"]');
let reset = document.querySelector('button[name="reset"]');
let affichage = document.createElement("div");
affichage.classList.add("affichage");
document.body.appendChild(affichage);

jour.addEventListener("input", async function () {
  // Récupérez ce que l'utilisateur a tapé.
  let contenuduJour = jour.value;

  mois.addEventListener("input", async function () {
    let contenuduMois = mois.value;

    const aujourdHui = new Date();

    // Date de l'anniversaire
    let dateAnniversaire = new Date(
      aujourdHui.getFullYear(),
      contenuduMois - 1,
      contenuduJour
    );
    console.log("ma date d'anniverssaire:" + dateAnniversaire);
    // Si l'anniversaire est déjà passé cette année, ajoutez une année
    if (aujourdHui > dateAnniversaire) {
      dateAnniversaire.setFullYear(aujourdHui.getFullYear() + 1);
    }

    // Date actuelle
    let dateActuelle = new Date();

    // Calcul du nombre de jours restants
    let differenceEnJours = Math.ceil(
      (dateAnniversaire - dateActuelle) / (1000 * 3600 * 24)
    );

    // Affichage du résultat
    affichage.textContent =
      "Il reste " + differenceEnJours + " jours avant votre anniversaire !";
    console.log(
      "Il reste  " + differenceEnJours + " jours avant votre anniversaire !"
    );
  });
});
affichage.style.display = "none";

envoyer.addEventListener("click", () => {
  console.log("ici");
  if (envoyer.checked) {
    affichage.style.display = "none";
  } else {
    affichage.style.display = "inline";
  }
});

reset.addEventListener("click", () => {
  console.log("ici");
  affichage.style.display = "none";
  jour.value = "";
  mois.value = "";
});
