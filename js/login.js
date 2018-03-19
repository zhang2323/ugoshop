$(function(){

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
