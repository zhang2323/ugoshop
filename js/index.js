
//轮播图淡入淡出效果
var arr=["mi1.jpg","mi2.jpg","mi3.jpg","mi4.jpg"];
var ord=0;//的代表对当前 图片的序号，从0开始
var myTimer=null;

function initUI(){
 	$(".sBox img:first").css({"borderColor":"red"});
}

//事件处理程序
function initEvent(){
	//鼠标进入时停止
	$("#box").mouseenter(function(){
		stopPlay();
	});
	$(".sBox").mouseenter(function(){
		stopPlay();
	});
	//鼠标离开时自动播放
	$("#box").mouseleave(function(){
		autoPlay();
	});
	$(".sBox").mouseleave(function(){
		autoPlay();
	});

	//划过sbox时自动跳转
	$(".sBox img").mouseenter(function(){
		goImg($(".sBox img").index(this));
	})

	//点击左箭头实现向左跳转
	$("#leftArrow").click(function(){
		let transOrd=ord-1;
		transOrd>0?transOrd:arr.length-1;
		goImg(transOrd);
	});
	//点击右箭头实现向右跳转
	$("#rightArrow").click(function(){
		let transOrd=ord+1;
		transOrd>arr.length-1?0:ord+1;
		goImg(transOrd);
	});


}
//自动播放
function autoPlay(){
	myTimer=setInterval(function(){
		//记录进入时的图片序号
		let outOrd=ord;

		ord++
		if(ord>arr.length-1){
			ord=0;
		}
	//淡入淡出
	let $img=$("#box img");
	//淡入
	$img.eq(outOrd).stop(true).animate({"opacity":0},500);
	//淡出
	$img.eq(ord).stop(true).animate({"opacity":1},500);

	//改变.sBox img的border颜色
 	$(".sBox img").eq(ord).css({"borderColor":"red"}).siblings().css({'borderColor':'transparent'});
	},3000);
}
//停止播放
function stopPlay(){
	window.clearInterval(myTimer);
}
//指定图片自动跳转
function goImg(transOrd){
	let outOrd=ord;
	ord=transOrd;
	if(ord>arr.length-1){
		ord=0;
	}
	//淡入淡出
	let $img=$("#box img");
	//淡入
	$img.eq(outOrd).stop(true).animate({"opacity":0},500);
	//淡出
	$img.eq(ord).stop(true).animate({"opacity":1},500);

	//改变.sBox img的border颜色
 	$(".sBox img").eq(ord).css({"borderColor":"red"}).siblings().css({'borderColor':'transparent'});

}
//逻辑部分
$(function(){
	//初始化界面
	initUI();
	//绑定事件
	initEvent();
	//自动播放
	autoPlay();
});
