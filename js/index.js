$(function(){

	//公告滚动效果
	setInterval(function(){
		var appTop=parseInt($(".App").css("top"));
		if(appTop<=-112){
			$(".App").css({"top":0});
		}
		$('.App').animate({'top':'+=-28px'});
	},3000);


	//nav菜单栏划过效果
	$('.nav_right span a').mouseover(function(){
		$(this).css({'color':'#f70800'});
	});
	$('.nav_right span a').mouseout(function(){
		$(this).css({'color':'#666'});
	});

	//logo点击事件
	$('.left_logo').click(function(){
		window.location.href="http://www.ugoshop.com";  
	})

	//搜索框获得焦点效果
	$('#search').focus(function(){
		if($(this).val() == '请输入商品名称或货号'){
			$(this).val('');
		}
	});

	//搜索框失去焦点效果
	$('#search').blur(function(){
		if($(this).val() == ''){
			$(this).val('请输入商品名称或货号');
		}
	});

	//shop购物车划过效果
	$('.right_shop').mouseover(function(){
		$(this).css({'border-bottom-color':'#fff'});
		$(this).find(".downArr").css({'display':'none'});
		$(this).find(".upArr").css({"display":"block"});
		$(this).next(".show_box").css({
			"display":"block"
		});
	});
	$('.right_shop').mouseout(function(){
		$(this).css({'border':'1px solid #ddd'});
		$(this).find(".downArr").css({'display':'block'});
		$(this).find(".upArr").css({"display":"none"});
		$(this).next(".show_box").css({
			"display":"none"
		});
	});

	//点击list菜单栏效果
	$('.list_z ul li').click(function(){
		$(this).addClass("activeLi").siblings().removeClass("activeLi");
	});

	// 右侧悬浮划过效果
	// $('.bar_top ul li').mouseover(function(){
	// 	console.log(1);
	// 	$(this).css({'background':'#f70800'});
	// });
});


//轮播图淡入淡出效果
var arr=["mi1.jpg","mi2.jpg","mi3.jpg","mi4.jpg"];
var ord=0;//的代表对当前 图片的序号，从0开始
var myTimer=null;

//初始化界面  首页加载时第一个的豆豆为红色
// function initUI(){
// 	$("#btns li:first").css({"background":"red"});
// }
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

	//点击豆豆自动跳转
	// $("#btns li").click(function(){
	// 	goImg($("#btns li").index(this));
	// });
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
	//改变豆豆的颜色
	// $("#btns li").eq(ord).css({"background":"red"}).siblings().css({"background":"orange"});

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
	//改变豆豆的颜色
	// $("#btns li").eq(ord).css({"background":"red"}).siblings().css({"background":"orange"});

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

//点击按钮返回顶部
document.getElementById("Top").onclick = function(){
	var myTimer = setInterval(function(){
		var nowScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		if(nowScrollTop>0){
			nowScrollTop -= 50;
			document.body.scrollTop = document.documentElement.scrollTop =nowScrollTop;
		}else{
			clearInterval(myTimer);
		}
	},5);
}
