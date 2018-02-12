
//banner轮播代码
var oPrev=document.getElementsByClassName("prev")[0];
var oNext=document.getElementsByClassName("next")[0];
var oNo=document.getElementsByClassName("no")[0];
var oSpan=oNo.getElementsByTagName("span")[0];
var oT1=document.getElementsByClassName("t1")[0];
var oT2=document.getElementsByClassName("t2")[0];
var oPic=document.getElementsByClassName("pic");
var oUl=document.getElementById("ul");

var nos=['01','02','03'];
var t1s=['精 致 都 市','与 之 融 合','位于古老的港口城市'];
var t2s=['结合环保理念','从香薰到瑜伽','会让你忘记呼吸'];

var i=0;

/*//创建t1，t2
	function crt(){
		var oT1=document.createElement("li");
		var oT2=document.createElement("li"); 
		oUl.appendChild(oT1);
		oUl.appendChild(oT2);
		oT1.className="t1";
		oT1.aosName="fade-up";
		oT2.className="t2";
		oT2.aosName="fade-up";
	}
	//删除
	function ret(){
		oUl.removeChild(oT1);
		oUl.removeChild(oT2);

	}*/
	//点击轮播
	oPrev.onclick=function(){
		i--;
		i= (i<0) ? i=2 : i;
		oSpan.innerHTML=nos[i];
		oPic[i].id="on";
		for(var j=0;j<3;j++){
			if(i==2){
				oPic[0].id="";
				oPic[1].id="";
			}
			if(j!=i)
				oPic[j].id="";
		}
		oT1.innerHTML=t1s[i];
		oT2.innerHTML=t2s[i];
		
	}

	oNext.onclick=function(){
		i++;
		i= (i>2) ? i=0 : i;
		oSpan.innerHTML=nos[i];
		oPic[i].id="on";

		for(var j=0;j<3;j++){
			if(i==0){
				oPic[1].id="";
				oPic[2].id="";
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
		i= (i>2) ? i=0 : i;
		oSpan.innerHTML=nos[i];
		oPic[i].id="on";
		for(var j=0;j<3;j++){
			if(i==0){
				oPic[1].id="";
				oPic[2].id="";
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


//content轮播+选项卡
var oLb=document.getElementsByClassName("lb")[0];
var oImg=oLb.getElementsByTagName("img");
var oSpan=oLb.getElementsByTagName("span");
var oLi=oLb.getElementsByTagName("li");

for(var i=0;i<4;i++)
		{
			oLi[i].index=i;
			oLi[i].onclick=function(){
				for(var j=0;j<4;j++){
					oImg[j].className="";
					oSpan[j].className="";
					oLi[j].className="";
				}
				oImg[this.index].className="on";
				oSpan[this.index].className="on";
				oLi[this.index].className="on";
			}
			
		}

	//自动轮播
	var timer=null;
	var j=0;
	timer=setInterval(function(){
		j++;
		j= (j>2) ? j=0 : j;
			oImg[j].className="on";
			oSpan[j].className="on";
			oLi[j].className="on";
		for(var k=0;k<4;k++){
			if(j==0){
				oImg[1].className="";
				oImg[2].className="";
				oImg[3].className="";
				oSpan[1].className="";
				oSpan[2].className="";
				oSpan[3].className="";
				oLi[1].className="";
				oLi[2].className="";
				oLi[3].className="";
			}
			else if(k!=j){
				oImg[k].className="";
				oSpan[k].className="";
				oLi[k].className="";
			}	
		}
	},2000);






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
