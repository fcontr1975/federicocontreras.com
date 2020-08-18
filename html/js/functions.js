numpages = 11;

// Query string is not present
if(document.location.href.indexOf("/p") > 1 
	&& document.location.href.indexOf(".html") > 1
	&& document.location.href.indexOf("?") == -1){
	var nextpage = Number(document.location.href.split("federicocontreras.com/p")[1].split(".html")[0]);
	document.location.href += "?pp="+nextpage+"&pages="+numpages;
}

function parseQueryString(){
	var qs = document.location.href.split("?")[1].split("&");
	return(qs);
}

qs = parseQueryString();
console.log(qs);

function getThisPage(){
	return qs[0].split("=")[1];
}

function getNumPages(){
	return qs[1].split("=")[1];
}

thispage = Number(getThisPage());
numpages = Number(getNumPages());

function getPage(p){
	console.log("numpages: "+numpages);
	switch (p) {
		case 'previous':
			// console.log("Getting previous...");
			nextpage = Number(thispage)-1;
			// console.log("nextpage: "+nextpage);
			if(nextpage < 1){
				nextpage = numpages;
			}
			// console.log("document.location.href = \"p"+nextpage+".html?pp="+nextpage+"&pages="+numpages);
			document.location.href = "p"+nextpage+".html?pp="+nextpage+"&pages="+numpages;
		break;
		
		case 'next':
			// console.log("Getting next...");
			nextpage = Number(thispage)+1;
			// console.log("nextpage: "+nextpage);
			if(nextpage>numpages){
				nextpage = 1;
			}
			// console.log("document.location.href = \"p"+nextpage+".html?pp="+nextpage+"&pages="+numpages);
			document.location.href = "p"+nextpage+".html?pp="+nextpage+"&pages="+numpages;
		break;
	}
}

