//banner轮播代码
var oPrev=document.getElementsByClassName("prev")[0];
var oNext=document.getElementsByClassName("next")[0];
var oPic=document.getElementsByClassName("pic");
var oUl=document.getElementById("ul");

var i=0;

	//点击轮播
	oPrev.onclick=function(){
		i--;
		i= (i<0) ? i=3 : i;
		oPic[i].id="on";
		for(var j=0;j<4;j++){
			if(i==3){
				oPic[0].id="";
				oPic[1].id="";
				oPic[2].id="";

			}
			if(j!=i)
				oPic[j].id="";
		}
		
	}

	oNext.onclick=function(){
		i++;
		i= (i>3) ? i=0 : i;
		oPic[i].id="on";

		for(var j=0;j<4;j++){
			if(i==0){
				oPic[1].id="";
				oPic[2].id="";
				oPic[3].id="";

			}
			else if(j!=i){
				oPic[j].id="";
			}		
		}
	}
	//自动轮播
	var timer=null;
	timer=setInterval(function(){
		i++;
		i= (i>3) ? i=0 : i;
		oPic[i].id="on";
		for(var j=0;j<4;j++){
			if(i==0){
				oPic[1].id="";
				oPic[2].id="";
				oPic[3].id="";

			}
			else if(j!=i){
				oPic[j].id="";
			}	
		}
	},3000)


	//content轮播+选项卡
var oLb=document.getElementsByClassName("lb")[0];
var oImg=oLb.getElementsByTagName("img");
var oSpan=oLb.getElementsByTagName("span");
var oLi=oLb.getElementsByTagName("li");

for(var i=0;i<3;i++)
		{
			oLi[i].index=i;
			oLi[i].onclick=function(){
				for(var j=0;j<3;j++){
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
		for(var k=0;k<3;k++){
			if(j==0){
				oImg[1].className="";
				oImg[2].className="";

				oSpan[1].className="";
				oSpan[2].className="";

				oLi[1].className="";
				oLi[2].className="";

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
