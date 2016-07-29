$(function() {
	// 头部 城市切换
	$("#address").click(function(){
		$(".city").toggle()	
		$(this).toggleClass("ar_active")
	});
	for(var i =0;i<$(".city div").length;i++){
		$(".city div").eq(i).click(function(){		
			var a = $(this).children("span").html()
			$("#address").children("span.change").html(a)
		})
	}
	// tab切换
	$(".info_tab li").click(function() {
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".info_list>div").eq(index).show().siblings().hide();
	})
})
