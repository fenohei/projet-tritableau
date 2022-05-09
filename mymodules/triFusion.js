function fusion(a,b){
	if (a.length == 0)
		return b;
	if (b.length == 0)
		return a;
	if (a[0] <= b[0]){
		return [...[a[0]],...fusion(a.slice(1),b)];
	}else return [...[b[0]],...fusion(a, b.slice(1))];
}

function trierFusion(t){
	if (t.length <= 1)
		return t;
	return fusion(trierFusion(t.slice(0,t.length/2)), trierFusion(t.slice(t.length/2, t.length+1)));
}

module.exports = { fusion,trierFusion };
