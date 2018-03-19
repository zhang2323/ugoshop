$(function(){
	//手机input框获得焦点效果
	$('input').focus(function(){
		$(this).css({'borderColor':'#00dd00','borderRadius':'20px'}).siblings('.show_text').css({'display':'block'}).siblings('.show_text2').css({'display':'none'}).siblings('.reg_text').css({'display':'none'});

	});

	//手机input框失去焦点效果
	$('input').blur(function(){
		$(this).css({'borderColor':'#ff00ff','borderRadius':'0'}).siblings('.show_text').css({'display':'none'});
		if($(this).val() == ''){
			$(this).siblings('.show_text2').css({'display':'block'});
		}else if(cellPhone($(this).val())==false){
			$(this).siblings('.reg_text').css({'display':'block'}).siblings('.bg_true').css({'display':'none'});
		}else{
			$(this).siblings('.bg_true').css({'display':'block'});
		}
		
	});

	//点击换一张重新加载验证码
	$('.change_yzm').click(function(){
		changeCode();
	});

	function changeCode(){
      	document.getElementById("img").src="http://www.ugoshop.com/api/checkcode.php?code_len=4&font_size=14&width=89&height=30&font_color=%23313131&background=%23e3e3e3&is=1&num=1&time=2ff64dc53d642227fda1d574aaa4a2c5&rand=852"+Math.random();
   	}

   	//密码框获得焦点效果
   	$('input').focus(function(){
   		$(this).siblings('.reg_password').css({'display':'block'}).siblings('.show_password').css({'display':'none'}).siblings('.reg_word').css({'display':'none'});
   	});

   	//密码框失去焦点效果
   	$('input').blur(function(){
		$(this).siblings('.reg_password').css({'display':'none'});
		if($(this).val() == ''){
			$(this).siblings('.show_password').css({'display':'block'});
		}else if(passWord($(this).val())==false){
			$(this).siblings('.reg_word').css({'display':'block'}).siblings('.bg_true1').css({'display':'none'});
		}else{
			$(this).siblings('.bg_true1').css({'display':'block'});
		}	
	});

	//confirm获得焦点效果
	$('input').focus(function(){
		$(this).siblings('.show_password1').css({'display':'block'}).siblings('.show_password2').css({'display':'none'}).siblings('.reg_word1').css({'display':'none'});
	})

	//confirm失去焦点效果
	$('input').blur(function(){
		$(this).siblings('.show_password1').css({'display':'none'}).siblings('.show_password2').css({'display':'none'}).siblings('.reg_word1').css({'display':'none'});
		if($(this).val() == ''){
			$(this).siblings('.show_password2').css({'display':'block'}).siblings('.bg_true2').css({'display':'none'});
		}else{
			if($(this).val() == $('#passWord').val()){
				$(this).siblings('.reg_word1').css({'display':'none'}).siblings('.bg_true2').css({'display':'block'});
			}else{
				$(this).siblings('.reg_word1').css({'display':'block'}).siblings('.bg_true2').css({'display':'none'});
			}
		}
	});

	//SMS框获得焦点事件
	$('#SMS').focus(function(){
		$('.dentifyingCode').css({'display':'none'});
	})

	//点击提交事件
	$('#btn').click(function(){
		if($('#SMS').val() == ''){
			$('#SMS').siblings('.dentifyingCode').css({'display':'block'});
		}
	});

});
