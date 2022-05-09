//Création d'un fonction de tri par selection d'un tableau
function trierSelection(tab){
	let temporaire;
	//à l'aide des 2 boucles for, le programme fixe un element et le compare avec les elements suivants
	for (let i = 0; i < tab.length - 1; i++){
		for (let j = i+1; j < tab.length; j++){
			if (tab[i] > tab[j]){
				temporaire = tab[i];
				tab[i] = tab[j];
				tab[j] = temporaire;
			}
		}
	}
	return tab;
}
//exportation du fonction trierSelection vers d'autres fichiers JavaScript
module.exports = { trierSelection }
