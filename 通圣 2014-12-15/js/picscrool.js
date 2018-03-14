// JavaScript Document
function IndBox1Init(){
	var pageid,pagetotal;
	pagetotal = Math.ceil($("#IndBox1 li").length / 4);
	if(pagetotal > 1){
		pageid = 0;
		arrow();
		$("#IndBox1 ul").width($("#IndBox1 li").length * 250);
	}
	function move(action){
		var tempageid = pageid + action;
		if(action>0){
			pageid = tempageid >= pagetotal?(pagetotal-1):tempageid;
		}else{
			pageid = tempageid < 0?0:tempageid;	
		}
		$("#IndBox1 ul").animate({left:-pageid*1000},1000,"easeInOutQuart");
		arrow();
	}
	function arrow(){
		if(pageid >= (pagetotal-1)){
			$("#IndBox1 h2").css("cursor","default");
			$("#IndBox1 h2").unbind("click");
			$("#IndBox1 h2").unbind("hover");
			$("#IndBox1 h2").css("background-position","0px 0px");
		}else{
			$("#IndBox1 h2").css("cursor","pointer");
			$("#IndBox1 h2").click(function(){move(1);});
			$("#IndBox1 h2").hover(function(){$(this).css("background-position","0px 0px");},function(){$(this).css("background-position","0px 0px");});	
		}
		if(pageid <= 0){
			$("#IndBox1 h1").css("cursor","default");
			$("#IndBox1 h1").unbind("click");
			$("#IndBox1 h1").unbind("hover");
			$("#IndBox1 h1").css("background-position","0px 0px");
		}else{
			$("#IndBox1 h1").css("cursor","pointer");
			$("#IndBox1 h1").click(function(){move(-1);});
			$("#IndBox1 h1").hover(function(){$(this).css("background-position","0px 0px");},function(){$(this).css("background-position","0px 0px");});	
		}
	}
}