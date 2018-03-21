$(function(){
	//点击小图片让其对应的图片显示
	$('.carousel_s ul li').click(function(){
		$(this).addClass('activeLi').siblings().removeClass('activeLi');
		var index = $(this).index()+1;
		$('.box_img img').attr({'src':'img/int_0'+index+'.jpg'});
		$('.hide_box img').attr({'src':'img/int_0'+index+'.jpg'});
		
	});

	//点击尺码效果
	$('.size').click(function(){
		$(this).attr({'id':'size_div'}).siblings().attr({'id':''});
	});

	//点击数量加减效果
	//减
	$('#reduce').click(function(){
		var count = parseInt($('#nums').val());
		count--;

		if(count <= 1){
			count = 1;
			$('#reduce').css({'background':'#eee','cursor':'not-allowed'});
		}else{
			$('#reduce').css({'background':'#fff','cursor':'pointer'});
			$('#add').css({'background':'#fff','cursor':'pointer'});

		}
		$('#nums').val(count);

		
	});

	//加
	$('#add').click(function(){
		var count = parseInt($('#nums').val());
		count++;

		if(count >= 6){
			count = 6;
			$('#add').css({'background':'#eee','cursor':'not-allowed'});
		}else{
			$('#reduce').css({'background':'#fff','cursor':'pointer'});
			$('#add').css({'background':'#fff','cursor':'pointer'});
		}
		$('#nums').val(count);
	});

	//失去焦点判断用户输入
	$('#nums').blur(function(){
		if($(this).val() > 6){
			$('#nums').val('6');
		}else if($(this).val() < 1){
			$('#nums').val('1');
		}
	});
	
	//点击Tab切换
	$(".fix_l a").click(function(){
		$(this).addClass('activeA').siblings().removeClass('activeA');
	});

	$(".int_top a").click(function(){
		$(this).addClass('activeA').siblings().removeClass('activeA');
	});

});

//悬浮窗显示效果
$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
	if(scrollTop > 1000){
		$('.fix_box').show();
	}else{
		$('.fix_box').hide(200);
	}
});

