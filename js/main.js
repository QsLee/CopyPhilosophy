var sBtn=document.getElementById("sbtn");
var nBtn=document.getElementById("nbtn");
var search=document.getElementsByClassName("search")[0];
var nav=document.getElementsByClassName("nav")[0];
var close=document.getElementsByClassName("close");

sBtn.onclick=function(){
	search.style.display="block";
}


nBtn.onclick=function(){
	nav.style.display="block";
}


for(var i=0;i<2;i++){
	close[i].onclick=function(){
		search.style.display="none";
		nav.style.display="none";
	}
}


//回到顶部
var bTop=document.getElementsByClassName("bTop")[0];
bTop.onclick = function(){
document.body.scrollTop = document.documentElement.scrollTop = 0;
}