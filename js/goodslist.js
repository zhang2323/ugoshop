$(function(){
	//点击aList切换效果
	$('.aList a').click(function(){
		$(this).addClass('act_A').siblings().removeClass('act_A');
	})

	//点击goods_list切换效果
	$('.goods_list ul li').click(function(){
		$(this).addClass('r_li').siblings().removeClass('r_li');
	});

});