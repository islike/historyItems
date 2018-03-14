var phsw,phsh,phs,phsi,phstotal,phspt,phspid;
var phsarray = new Array();
var image = new Image();
photoshow();
function photoshow(){
	phsw = 690;
	phsh = 470;
	phs = $("#photoshow");
	phstotal = phs.find(".data img").length;
	if(phstotal == 0)
		return ;
	phs.css({overflow:"hidden",position:"relative",width:phsw,height:phsh});
	phs.append("<div class='bigpic rad4'></div><div class='list'><div class='listpic rad4'><ul></ul></div></div>");
	phs.find('.bigpic').css({overflow:"hidden",width:phsw,height:phsh});
	phspt = Math.ceil(phstotal/5);
	if(phspt>1){
		phspid = 0;
		phs.find(".list ul").width(114*phstotal);
		phs.find(".list").append("<a href='javascript:;' class='prev amn2'></a><a href='javascript:;' class='next amn2'></a>");
		phs.find(".prev").click(function(){
			photolmove(-1);	
		})
		phs.find(".next").click(function(){
			photolmove(1);
		})
	}
	phs.find(".data img").each(function() {
        phsarray.push($(this).attr("src"));
		phs.find(".listpic ul").append("<li class='rad4 amn2'></li>");
    });
	phs.find(".listpic ul li").hover(function(){
		$(this).addClass("h");
	},function(){
		$(this).removeClass("h");
	})
	phs.find(".listpic ul li").click(function(){
		if($(this).find("img").length > 0)
			photobps($(this).index());	
	})
	phs.find(".data").remove();
	phsi = 0;
	photoimgload();
}
function photoimgload(){
	if(phsi >= phstotal)
		return ;
	image = null;
	image = new Image();
	image.onload = function(){
		if(phsi == 0)
			photobps(phsi);
		phs.find(".list li").eq(phsi).append("<img src='"+image.src+"' class='opa' />");
		phs.find(".list li:eq("+phsi+") img").animate({opacity:1},500);
		phsi++;	
		photoimgload();
	};
	image.onerror = function(){
		phsi++;	
		photoimgload();		
	}
	image.src = phsarray[phsi];  
	/*if(image.complete || image.width){
		alert("缓存存在")
	}*/
}
function photobps(id){
	phs.find(".list li").removeClass("s");
	phs.find(".list li").eq(id).addClass("s");
	phs.find(".bigpic").empty();
	phs.find(".bigpic").append("<img src='"+phsarray[id]+"' class='opa' />");
	phs.find(".bigpic img").animate({opacity:1},700);
}
function photolmove(a){
	if(a>0&&phspid<(phspt-1))
		phspid++;
	else if(a<0&&phspid>0)
		phspid--;
	phs.find(".list ul").animate({left:-phspid*5*144},500);
			
}