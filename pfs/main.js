const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const choixPossibles = ["pierre", "feuille", "ciseaux"];

function jouer() {
  console.log("ça commence :) !");
  rl.question(
    "Najeeb, choisissez entre pierre, feuille ou ciseaux : ",
    (choix1) => {
      choix1 = choix1.trim().toLowerCase();

      while (!choixPossibles.includes(choix1)) {
        rl.question(
          "Choix invalide, choisisentre pierre, feuille ou ciseaux : ",
          (nouveauChoix1) => {
            choix1 = nouveauChoix1.trim().toLowerCase();
          }
        );
      }

      rl.question(
        "Robot, choisissez entre pierre, feuille ou ciseaux : ",
        (choix2) => {
          choix2 = choix2.trim().toLowerCase();

          while (!choixPossibles.includes(choix2)) {
            rl.question(
              "Choix invalide, veuillez choisir entre pierre, feuille ou ciseaux : ",
              (nouveauChoix2) => {
                choix2 = nouveauChoix2.trim().toLowerCase();
              }
            );
          }

          console.log("Najeeb a choisi " + choix1);
          console.log("Robot a choisi " + choix2);

          if (choix1 === choix2) {
            console.log("Egalité !");
          } else if (
            (choix1 === "pierre" && choix2 === "ciseaux") ||
            (choix1 === "feuille" && choix2 === "pierre") ||
            (choix1 === "ciseaux" && choix2 === "feuille")
          ) {
            console.log("Najeeb gagne !");
          } else {
            console.log("Robot gagne !");
          }

          rl.question("Voulez-vous rejouer ? (oui/non) : ", (reponse) => {
            reponse = reponse.trim().toLowerCase();

            while (reponse !== "oui" && reponse !== "non") {
              rl.question(
                "Réponse invalide, veuillez répondre par oui ou non : ",
                (nouvelleReponse) => {
                  reponse = nouvelleReponse.trim().toLowerCase();
                }
              );
            }

            if (reponse === "oui") {
              jouer();
            } else {
              console.log("Merci au vainqueur :D!");
              rl.close();
            }
          });
        }
      );
    }
  );
}

jouer();
