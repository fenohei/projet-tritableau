//importation des modules
const prompt = require("prompt-sync")();
const triSelection = require("./mymodules/triSelection.js");
const triBull = require("./mymodules/triBull.js");
const triFusion = require("./mymodules/triFusion.js");

let tableau = [];
let reponse = "non";
let i = 1;
let input = '';

//Créer un tableau
console.log("Veulliez entrez un tableau : ");
do{
    input = prompt("Element "+ i +" :");
    if (input == ''){
        console.log("Aucun elements à trier");
    }else{
        tableau.push(input);
        i++;
        reponse = prompt("Voulez-vous ajouter une autre élement ? (oui / non)");   
    }
}while (reponse == "oui");

//Si le tableau est non vide alors proceder vers le triage
if (input !== ''){
    let tri;
    console.log("Tableau non trié \n" + tableau);
    do {
        console.log('1 - Tri par sélection\n2 - Tri à bull\n3 - Tri par fusion\n4 - Quitter\n ');
        tri = +prompt("Quelle type de triage voulez-vous éxécuter ?");
        switch (tri) {
            case 1:
                console.log(`Tri par selection :\n ${triSelection.trierSelection(tableau)}`);
                break;
            case 2:
                console.log(`Tri à bull :\n ${triBull.trierBull(tableau)}`);
                break;
            case 3:
                console.log(`Tri par fusion :\n ${triFusion.trierFusion(tableau)}`);
                break;
            case 4:
                console.log('A bientôt!');
                break;
            default:
                console.log('Option non disponible');
                break;
        }
    } while (tri != 4);
}


