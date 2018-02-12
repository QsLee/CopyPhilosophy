//banner轮播代码
var oPrev=document.getElementsByClassName("prev")[0];
var oNext=document.getElementsByClassName("next")[0];
var oNo=document.getElementsByClassName("no")[0];
var oSpan=oNo.getElementsByTagName("span")[0];
var oT1=document.getElementsByClassName("t1")[0];
var oT2=document.getElementsByClassName("t2")[0];
var oPic=document.getElementsByClassName("pic");
var oUl=document.getElementById("ul");

var nos=['01','02'];
var t1s=['转 瞬 即 逝','把 一 切 铭 记'];
var t2s=['一处美丽的住所','终 生'];

var i=0;


	//点击轮播
	oPrev.onclick=function(){
		i--;
		i= (i<0) ? i=1 : i;
		oSpan.innerHTML=nos[i];
		oPic[i].id="on";
		for(var j=0;j<2;j++){
			if(i==1){
				oPic[0].id="";
			}
			if(j!=i)
				oPic[j].id="";
		}
		oT1.innerHTML=t1s[i];
		oT2.innerHTML=t2s[i];
		
	}

	oNext.onclick=function(){
		i++;
		i= (i>1) ? i=0 : i;
		oSpan.innerHTML=nos[i];
		oPic[i].id="on";

		for(var j=0;j<2;j++){
			if(i==0){
				oPic[1].id="";	
			}
			else if(j!=i){
				oPic[j].id="";
			}		
		}
		oT2.innerHTML=t2s[i];
		oT1.innerHTML=t1s[i];
		
	}
	//自动轮播
	var timer=null;
	timer=setInterval(function(){
		i++;
		i= (i>1) ? i=0 : i;
		oSpan.innerHTML=nos[i];
		oPic[i].id="on";
		for(var j=0;j<2;j++){
			if(i==0){
				oPic[1].id="";
			}
			else if(j!=i){
				oPic[j].id="";
			}	
		}

		oT2.innerHTML=t2s[i];
		oT1.innerHTML=t1s[i];
	},3000)

//向下滚动一屏 scroll
	$("h1").on('click',function(e){
			$("html,body").animate({scrollTop:$(window).height()},1000);
		});












//回到顶部
var bTop=document.getElementsByClassName("bTop")[0];
bTop.onclick = function(){
document.body.scrollTop = document.documentElement.scrollTop = 0;
}



//aos初始化
AOS.init({
			easing: 'ease-out-back',
			duration: 1000
		});
