// 返回顶部
$(".scroll-top").click(function(){
	 $('html').animate({ scrollTop: 0 }, 700);
})

$("#js-go-tree").click(function() {
	$("html,body").animate({scrollTop: $("#js-tree").offset().top},500)
})

var treeData = {
	yun: {
		name: '云之树',
		total: 8,
		stock: 7
	},
	tan: {
		name: '潭之树',
		total: 8,
		stock: 0
	},
	yan: {
		name: '炎之树',
		total: 8,
		stock: 8
	},
	lei: {
		name: '雷之树',
		total: 8,
		stock: 8
	},
	di: {
		name: '地之树',
		total: 8,
		stock: 8
	},
	mai: {
		name: '脉之树',
		total: 8,
		stock: 8
	},
	liu: {
		name: '流之树',
		total: 8,
		stock: 8
	},
	feng: {
		name: '风之树',
		total: 8,
		stock: 8
	}
}
$("#js-tree li").click(function() {
	var name = $(this).attr("name");
	$("#js-tree-content .left img").attr("src", "img/big-"+ name + ".jpg");
	$(this).addClass("active").siblings("li").removeClass("active");

	var treeObj = treeData[name]
	var descHtml = '';
	var sellOut = treeObj.total - treeObj.stock

	if(treeObj.stock == 0) {
		descHtml = '已售罄'
		$('#js-btn-buy').hide();
	} else {
		 descHtml = '已售' + sellOut + '棵，剩余' + treeObj.stock+ '棵';
		$('#js-btn-buy').show();
	}
	
	$("#js-tree-status").text(descHtml)
	$("#js-tree-name").text(treeObj.name)
	$(this).children(".desc").text(treeObj.stock+' / '+treeObj.total)
})

function initTree() {
	var list = $("#js-tree li");
	var name = "", desc = ""
	for	(var i=0; i<list.length; i++) {
		name = $(list[i]).attr("name")
		if (treeData[name].stock <= 0) {
			desc = "已售罄"
		} else {
			desc = treeData[name].stock+' / '+treeData[name].total
		}
		$(list[i]).children(".desc").text(desc)
	}
}
initTree();
$("#js-tree li").eq(0).click();
