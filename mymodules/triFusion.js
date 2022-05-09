function fusion(a,b){
	if (a.length == 0)
		return b;
	if (b.length == 0)
		return a;
	if (a[0] <= b[0]){
		return [...[a[0]],...fusion(a.slice(1),b)];
	}else return [...[b[0]],...fusion(a, b.slice(1))];
}

function triFusion(t){
	if (t.length <= 1)
		return t;
	return fusion(triFusion(t.slice(0,t.length/2)), triFusion(t.slice(t.length/2, t.length+1)));
}

module.exports = { fusion,triFusion };
