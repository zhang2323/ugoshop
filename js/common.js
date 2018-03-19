/*
	缓冲运动函数
*/
function bufferMove(obj, target, fn, ratio = 8) {
	// 清除定时器
	clearInterval(obj.timer);

	// 开启新的定时器
	obj.timer = setInterval(function () {
		var allOk = true;

		for(var sAttr in target) {
			// 获取当前属性的值
			if(sAttr === 'opacity') {
				var cur = getStyle(obj, sAttr) * 100;
			} else {
				var cur = parseInt(getStyle(obj, sAttr));
			}

			// 计算速度
			var speed = (target[sAttr] - cur) / ratio;

			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			// 下一次的值
			var next = cur + speed;

			if(sAttr === 'opacity') {
				obj.style.opacity = next / 100;
				obj.style.filter = 'alpha(opacity=' + next + ')';
			} else {
				obj.style[sAttr] = next + 'px';
			}

			if(next !== target[sAttr]) {
				allOk = false;
			}
		}

		if(allOk === true) {
			clearInterval(obj.timer);
			fn && fn();
		}
	}, 50);
}

/*
	获取当前样式值
*/
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

/*
	碰撞检测函数
*/
function pz(a, b) {
	if(
		   a.offsetLeft + a.offsetWidth  <= b.offsetLeft
		|| a.offsetTop  + a.offsetHeight <= b.offsetTop
		|| b.offsetLeft + b.offsetWidth  <= a.offsetLeft
		|| b.offsetTop  + b.offsetHeight <= a.offsetTop
	) {
		return false;
	} else {
		return true;
	}
}


/*
	创建唯一的键名
*/
function createUniqueKey() {
	return new Date().getTime() + Math.random();
}


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
	// $('.left_logo').click(function(){
	// 	window.location.href="http://www.ugoshop.com";  
	// })

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