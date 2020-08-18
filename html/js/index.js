thispage = 0;
console.log("?: "+document.location.href.split("?")[1]);

if(document.location.href.split("?")[1] == undefined){
	document.location.href += "?pp="+thispage+"&numpages="+numpages;
}