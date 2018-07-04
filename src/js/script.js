$('#nav-list li').not(".book").mouseover(function(){
	$(this).addClass("hover");
}).mouseout(function(){
	$(this).removeClass("hover");
}).click(function(){
	$(this).addClass("active").siblings("li").removeClass("active");
})

var heightList = [];
var container = $(".g-container");
function calcHeight() {
	var scrollY = 633;
	heightList.push(scrollY);
	for(var i=0; i<container.length; i++){
		scrollY += container[i].clientHeight;
		heightList.push(scrollY);
	}
}

calcHeight();

var h = $('.g-wrp').height() + $('.g-header').height() - $('.g-nav').height();
$(document).scroll(function(){
	if($(document).scrollTop() >= 637){
		$('.g-nav').addClass('fixed');
	} else {
		$('.g-nav').removeClass('fixed');
	}
	for(var i=0; i<heightList.length; i++){
		if($(document).scrollTop() >= heightList[i] && $(document).scrollTop() < heightList[i+1]){
			if(i == 4){
				i = 5;
			}
			$("#nav-list li").removeClass('active')
			$("#nav-list li").eq(i).addClass('active')
		}
	}		
})
$(".link-item").click(function(){
	var index = $(this).attr('index');
	var scrollY = heightList[index];
	window.scrollTo(0, scrollY)
})

// 更多资讯
$('#js-more').click(function(){
	if($('#js-mask').css("display") == 'none'){
		$('#js-mask').slideDown();
	} else {
		$('#js-mask').slideUp();
	}
})