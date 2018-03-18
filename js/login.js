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

	//input获得焦点效果
	$('input').focus(function(){
		if($(this).val() == '请输入您注册的手机号/邮箱/昵称'){
			$(this).val('');
		}
		
			$(this).css({'borderColor':'#00dd00','borderRadius':'20px'}).siblings('.show_input').css({'display':'none'}).siblings('.show_password').css({'display':'none'});
	});

	//text文本框失去焦点效果
	$('.one').blur(function(){
		if($(this).val()==''){
			$(this).css({'borderColor':'#a2a2a2','borderRadius':'0'}).siblings('.show_input').css({'display':'block'});
		}else{
			$(this).css({'borderColor':'#a2a2a2','borderRadius':'0'});
		}	
	});

	//密码框获得焦点效果
	// $('input').focus(function(){
	// 	$(this).css({'borderColor':'#00dd00','borderRadius':'20px'}).val('').siblings('.show_input').css({'display':'none'});
	// });


	//密码框失去焦点效果
	$('.two').blur(function(){
		if($(this).val()==''){
			$(this).css({'borderColor':'#a2a2a2','borderRadius':'0'}).siblings('.show_password').css({'display':'block'});
		}else{
			$(this).css({'borderColor':'#a2a2a2','borderRadius':'0'}).siblings('.show_password').css({'display':'none'});
		}
	});

	//点击登录按钮判断
	$('.login_btn').click(function(){
		if($('.two').val() == ''){
			$('.show_password').css({'display':'block'});
		}
		else if($('.one').val() == ''){
			$('.show_input').css({'display':'block'});
			
		}
	});
})


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