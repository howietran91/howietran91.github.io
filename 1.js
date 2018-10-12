$(function(){
	$('.tab ul li a').click(function() {
		$('.tab ul li a').removeClass("active");
		$(this).addClass("active");
		return false;
	})
})
