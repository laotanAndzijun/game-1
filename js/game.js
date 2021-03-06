/**
 * Created by Administrator on 2015/7/18 0018.
 * 根据 http://www.cnblogs.com/Wayou/p/how-to-make-a-simple-html5-canvas-game.html 改编
 * 1.加载角色
 */


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
//游戏对象
//招财猫
var zcm = {
	speed: 200,
	x: 0,
	y: 0

};
//元宝
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
//时间，元宝数量，分数
var ybsl=5;


//渲染画布
var render =function(){
	ctx.fillStyle='rgb(32,147,240)';
	ctx.fillRect(0,0,window.width,height);
	if(ybReady){
		for(var i=0;i<ybsl;i++){
			ctx.drawImage(ybImage,ybs[i].x,ybs[i].y);
		}
	}
	else{
		console.log(ybReady+'加载失败');
	}
	if(zcmReady){
		ctx.drawImage(zcmImage,zcm.x,zcm.y);
	}
	else{
		console.log('加载失败');
	}
}
//游戏初始化
var reset = function () {
	zcm.x = canvas.width / 2 - 89;//猫居中
	zcm.y = canvas.height - 111;

	for (var i = 0;i < ybsl; i++) {
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


//处理按键

//按向上键可以重新开始
var keysDown={};
addEventListener('keydown',function(e){
	keysDown[e.keyCode]=true;
},false);

addEventListener('keyup',function(e){
	delete keysDown[e.keyCode];
},false);

//处理触摸事件
//触摸开始
canvas.addEventListener('touchstart', function (e) {
	for(var i=0;i< e.touches.length;i++){
		var touch=touches[i];
		ctx.beginPath();//画布中开辟新的子路径集合,把当前的点设置为 (0,0)
		ctx.arc(touch.pageX,touch.pageY,20,0,2*Math.PI,true);//使用一个中心点和半径，为一个画布的当前子路径添加一条弧。
		ctx.fill();//填充路径
		ctx.stroke();//绘制路径
		console.log('touchstart:'+touch.pageX);
		if(touch.pageX<150){
			keysDown[37]=true;//左箭头
		}else{
			keysDown[39]=true;//右箭头
		}
	}
},false);

//触摸结束
canvas.addEventListener('touchend', function (e) {
	delete keysDown[39];//右箭头
	delete keysDown[37];//左箭头
	console.log('touchend');
},false);





















