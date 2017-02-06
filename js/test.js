window.onload = function(){
	var o = {x:1, y:2, z:3}
	var a = new Array();
	var i = 0;
	for(a[i++] in o);
	for(i in o){
		alert(i);
	}
}