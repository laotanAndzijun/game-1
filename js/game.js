/**
 * Created by Administrator on 2015/7/18 0018.
 * 根据 http://www.cnblogs.com/Wayou/p/how-to-make-a-simple-html5-canvas-game.html 改编
 * 1.加载角色
 */
//设置宽高
gWinHeight = document.body.clientHeight;

gWinWidth = document.body.clientWidth;

alert(gWinWidth + "," + gWinHeight);
//获取canvas对象
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

var width=window.innerWidth;
var height=window.innerHeight
canvas.width = width;
canvas.height = height;
document.body.appendChild(canvas);
//元宝图片
var ybReady=false;
var ybImage=new Image();
ybImage.onload=function(){
	ybReady=true;
};
ybImage.src="img/yb.png";


//招财猫图片
var zcmReady=false;
var zcmImage=new Image();

//页面加载
zcmImage.onload=function(){	
	zcmReady=true;
};
zcmImage.src="img/zcm.png";


//渲染画布
var render =function(){
	ctx.fillStyle='rgb(32,147,240)';
	ctx.fillRect(0,0,window.width,height);
	if(ybReady){
		ctx.drawImage(ybImage,0,0);
	}
	else{
		console.log(ybReady+'加载失败');
	}
	if(zcmReady){
		ctx.drawImage(zcmImage,100,100);
	}
	else{
		console.log('加载失败');
	}
}
//主函数
var main=function(){
	//渲染画布
	render();
}
window.onload=function(){
	main();
}
