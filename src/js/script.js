$('#nav-list li').not(".book").mouseover(function(){
	$(this).addClass("hover");
}).mouseout(function(){
	$(this).removeClass("hover");
})
$('#nav-list .link-item').click(function(){
	$(this).parents("li").addClass("active").siblings("li").removeClass("active");
})

var heightList = [];
var container = $(".g-container");
var h = $('.g-top').height() + $('.g-header').height() + parseInt($('.m-shadow').css('marginTop')) - $('.g-nav').height();
function calcHeight() {
	var scrollY = h;
	heightList.push(scrollY);
	for(var i=0; i<container.length-1; i++){
		scrollY += container[i].clientHeight;
		heightList.push(scrollY);
	}
	console.log(heightList)
}

calcHeight();

$(document).scroll(function(){
	console.log(heightList)
	console.log($(document).scrollTop())
	if($(document).scrollTop() > h){
		$('.g-nav').addClass('fixed');
	} else {
		$('.g-nav').removeClass('fixed');
	}
	// 返回顶部按钮
	var screenHeight = document.documentElement.clientHeight || window.innerHeight || 750;
	if($(document).scrollTop() >= screenHeight) {
		$(".g-totop").fadeIn();
	} else {
		$(".g-totop").fadeOut();
	}

	for(var i=0; i<heightList.length; i++){
		if($(document).scrollTop() >= heightList[i] && $(document).scrollTop() < heightList[i+1]){
			console.log(1)
				$("#nav-list .link-item").parents("li").removeClass('active')
				$("#nav-list .link-item").eq(i).parents("li").addClass('active')
			
		} else if($(document).scrollTop() >= heightList[heightList.length-1]){
			console.log(2)
			$("#nav-list .link-item").parents("li").removeClass('active')
			$("#nav-list .link-item").eq(heightList.length-1).parents("li").addClass('active')
		}
	}		
})
// 导航跳转到对应区域
$(".link-item").click(function(){
	var index = $(this).attr('index');
	var scrollY = heightList[index];
	$('html').animate({ scrollTop: scrollY }, 700);
})

// 更多资讯
$('#js-more').click(function(){
	if($('#js-mask').css("display") == 'none'){
		$('#js-mask').slideDown();
	} else {
		$('#js-mask').slideUp();
	}
})

// 返回顶部
$(".scroll-top").click(function(){
	 $('html').animate({ scrollTop: 0 }, 700);
})