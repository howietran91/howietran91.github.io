$(function(){
	$('.tab ul li a').click(function() {
		$('.tab ul li a').removeClass("active");
		$(this).addClass("active");

		$dem = $(this).parent().index()+1;
		
		$('.tabsanpham').removeClass("active");
		$('.tabsanpham:nth-child(' + $dem +')').addClass("active");
		return false;
	})
})
