function trierBull(tab){
	let permutation;
	do{
		permutation = false;
		let permut;
		for (let i=0; i < tab.length - 1; i++){
			if (tab[i] > tab[i+1]){
				permut = tab[i];
				tab[i] = tab[i+1];
				tab[i+1] =  permut;
				permutation = true;
			}
		}
	}while(permutation == true)
    return tab;
}
module.exports = { trierBull };
