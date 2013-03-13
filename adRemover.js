//Remove Right COlumn Ad
//Look for comment <!-- Start of the right hand column
//Then delete td width="160"
var tdWidth160=document.querySelectorAll('td[width=\"160\"]')
for(var i=0; i<tdWidth160.length; i++){
	var b = tdWidth160[i];
	bParent = b.parentElement;
	bParent.removeChild(b);
}


//Remove bottom ads
//they are iframes with a width of 300
var iframeWidth300=document.querySelectorAll('iframe[width=\"300\"]');
for(var i=0; i<iframeWidth300.length; i++){
	var b = iframeWidth300[i];
	bParent = b.parentElement;
	bParent.removeChild(b);
}
//remove class="dloadt"
var a = document.getElementsByClassName("dloadt");
for(var i=0; i<a.length; i++){
	var b = a[i];
	bParent = b.parentElement;
	bParent.removeChild(b);
}
