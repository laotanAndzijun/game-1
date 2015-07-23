/**
 * Created by Administrator on 2015/7/18 0018.
 * 根据 http://www.cnblogs.com/Wayou/p/how-to-make-a-simple-html5-canvas-game.html 改编
 * 1.加载角色
 */
 //招财猫
 var zcm = {
    speed: 200,
    x: 0,
    y: 0

};
function yb(){
     var speed=5,
        x=0;
        y=0;
}
yb.prototype.init = function(){
	this.speed = 3;
	this.y = -canvas.height * 2 * Math.random();
	this.x = (canvas.width+50) * Math.random()-33;
}
var ybs = [];
 //元宝
 
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
//游戏初始化
var reset = function () {
    zcm.x = canvas.width / 2 - 89;//猫居中
    zcm.y = canvas.height - 111;

    for (var i = 0,ybsl=5;i < ybsl; i++) {
        ybs[i] = new yb();
        ybs[i].init();
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
reset();
