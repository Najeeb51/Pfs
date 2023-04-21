const signes = ["pierre", "feuille", "ciseau"];

function choisirSigne() {
  return signes[Math.floor(Math.random() * signes.length)];
}

function determinerGagnant(signeJoueur1, signeJoueur2) {
  if (signeJoueur1 === signeJoueur2) {
    return "match nul";
  } else if (
    (signeJoueur1 === "pierre" && signeJoueur2 === "ciseau") ||
    (signeJoueur1 === "feuille" && signeJoueur2 === "pierre") ||
    (signeJoueur1 === "ciseau" && signeJoueur2 === "feuille")
  ) {
    return "joueur 1";
  } else {
    return "joueur 2";
  }
}


function jouer() {
  let scoreJoueur1 = 0;
  let scoreJoueur2 = 0;
  let historique = [];


  for (let i = 0; i < 2; i++) {

    const signeJoueur1 = choisirSigne();
    const signeJoueur2 = choisirSigne();


    const gagnant = determinerGagnant(signeJoueur1, signeJoueur2);


    if (gagnant === "joueur 1") {
      scoreJoueur1++;
    } else if (gagnant === "joueur 2") {
      scoreJoueur2++;
    }

   
    historique.push({
      joueur1: signeJoueur1,
      joueur2: signeJoueur2,
      resultat: gagnant,
      score: `${scoreJoueur1} - ${scoreJoueur2}`,
    });

    // Si un joueur a atteint deux points, la partie est terminée
    if (scoreJoueur1 === 2 || scoreJoueur2 === 2) {
      break;
    }
  }

  // Déterminer le gagnant de la partie
  const gagnantPartie =
    scoreJoueur1 > scoreJoueur2 ? "joueur 1" : "joueur 2";


  console.log("Historique de la partie :");
  historique.forEach((manche, index) => {
    console.log(
      `Manche ${index + 1} : ${manche.joueur1} contre ${manche.joueur2}, résultat : ${manche.resultat}, score : ${manche.score}`
    );
  });

  console.log(`Le gagnant de la partie est ${gagnantPartie} !`);
}

jouer();
