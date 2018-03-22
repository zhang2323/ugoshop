$(function(){

	//购物车点击加减
	$('.add').click(function(){
		var count = parseInt($('.nums').val());
		count++;
		$('.nums').val(count);

	//改变小计值
	$('.subtotal').text($('.nums').val() * $('.unitPrice').text().substring(1));

	});
	$('.reduce').click(function(){
		var count = parseInt($('.nums').val());
		count--;
		if(count <= 1){
			count = 1;
		}
		$('.nums').val(count);

	//改变小计值
	$('.subtotal').text($('.nums').val() * $('.unitPrice').text().substring(1));
		
	});

});