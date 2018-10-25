// 返回顶部
$(".scroll-top").click(function(){
	 $('html').animate({ scrollTop: 0 }, 700);
})

$("#js-go-tree").click(function() {
	$("html,body").animate({scrollTop: $("#js-tree").offset().top},500)
})

var treeData = null

function getTreeData(callback) {
	// todo 请求各种树的库存
	// $.ajax({
		// url: '',
		// success: function(res) {
		// 	treeData = res.data.obj
		// 	initTree();
		// callback()
		// }
	// })
	setTimeout(function() {
		treeData = {
			yun: {
				name: 'Tree of Cloud',
				total: 8,
				stock: 7
			},
			tan: {
				name: 'Tree of Pool',
				total: 8,
				stock: 0
			},
			yan: {
				name: 'Tree of Flame',
				total: 8,
				stock: 8
			},
			lei: {
				name: 'Tree of Thunder',
				total: 8,
				stock: 8
			},
			di: {
				name: 'Tree of Earth',
				total: 8,
				stock: 8
			},
			mai: {
				name: 'Tree of Veins',
				total: 8,
				stock: 8
			},
			liu: {
				name: 'Tree of Stream',
				total: 8,
				stock: 8
			},
			feng: {
				name: 'Tree of Wind',
				total: 8,
				stock: 8
			}
		}
		initTree();
		callback()
	}, 2000)
}
var currentTreeName = ''
$("#js-tree li").click(function() {
	var name = $(this).attr("name");
	currentTreeName = name
	$("#js-tree-content .left img").attr("src", "img/big-"+ name + ".jpg");
	$(this).addClass("active").siblings("li").removeClass("active");

	var treeObj = treeData[name]
	var descHtml = '';
	var sellOut = treeObj.total - treeObj.stock
	descHtml = sellOut + ' Sold , ' +  treeObj.stock+ ' Remained';
	if(treeObj.stock == 0) {
		$('#js-btn-buy').hide();
		$('#js-btn-sellout').show();
	} else {
		
		$('#js-btn-buy').show();
		$('#js-btn-sellout').hide();
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
			desc = "Sold Out"
		} else {
			desc = treeData[name].stock+' / '+treeData[name].total
		}
		$(list[i]).children(".desc").text(desc)
	}
}

getTreeData(function() {
	$("#js-tree li").eq(0).click();
})

$('#js-btn-buy').click(function(){
	console.log(currentTreeName)
})
