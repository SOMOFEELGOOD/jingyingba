		$(function(){
		for(var i=0;i<$(".login_plist p").length;i++){
			$(".login_plist p").eq(i).click(function(){
				var index =$(this).index()
				$(this).addClass("login_plist_active").siblings().removeClass("login_plist_active")
				$(".login_wrap ul li").eq(index).addClass("login_active").siblings().removeClass("login_active")
			})
		}	

//		获取验证码倒计时
			$("#get_num").click(function(){
				$(this).css({
					borderColor:"#cccccc",
					backgroundColor:"#cccccc",
					color:"white"
				})
			})
			
			
		var wait=60;
		function time(o) {
        if (wait == 0) {
            o.removeAttribute("disabled");           
            o.value="获取验证码";
            wait = 60;
        } else {
            o.setAttribute("disabled", true);
            o.value="还剩" + wait + "秒";
            wait--;
            setTimeout(function() {
                time(o)
            },1000)
        }
    }
		$("#get_num").click(function(){
			time(this)
		})
//		请输入11位号码
		var reg = /^\d{11}$/;
		$("#phone").bind("input propertychange",function(){
		 var tel =$("#phone").val().trim();
		 if(!reg.test(tel)){
		 	$(".yishiyong").show()
		 	$(".kong").hide()
		 }else{
		 	$(".yishiyong").hide()
		 	$(".kong").hide()
		 }
		})
		
		
		$("#phone1").bind("input propertychange",function(){
		 var tel =$("#phone1").val().trim();
		 if(!reg.test(tel)){
		 	$(".yishiyong1").show()
		 	$(".kong1").hide()
		 }else{
		 	$(".yishiyong1").hide()
		 	$(".kong1").hide()
		 }
		})
		
//		不能为空
		$(".kong").hide()
		$("#phone").blur(function(){
			 var tel =$("#phone").val().trim();
			if(tel !== ""){
				$(".kong").hide()
			}else{
				$(".kong").show()
			}
		})
		$(".kong1").hide()
		$("#phone1").blur(function(){
			 var tel =$("#phone1").val().trim();
			if(tel !== ""){
				$(".kong1").hide()
			}else{
				$(".kong1").show()
			}
		})
		
		

		})		
		





