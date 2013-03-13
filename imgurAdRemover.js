//imgur.com/gallery/'RANDOMSTRING' has one advertisement in div class "advertisment"
//so it's ok to just grab the first element here instead of iterate through the area. 
var a = document.getElementsByClassName("advertisement");
var b=a[0];
var bParent=b.parentNode;

bParent.removeChild(b);