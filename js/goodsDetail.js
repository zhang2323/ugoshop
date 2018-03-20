$(function(){
	//点击小图片让其对应的图片显示
	$('.carousel_s ul li').click(function(){
		$(this).addClass('activeLi').siblings().removeClass('activeLi');
		var index = $(this).index();
		$('.box_img img').eq(index).show().siblings().hide();
	});
});