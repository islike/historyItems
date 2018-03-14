// JavaScript Document
var Banneri = 0;
var BannerTime= 6000 ;
var BannerTimer;
var BannerTotal;
var gaintop;
$(function(){
	$("#Banner").append("<ul class='text'></ul><ul class='btn'></ul>");
	BannerTotal = $("#Banner .pic li").length;
	$("#Banner .pic li").each(function(i) {
        $("#Banner .btn").append("<li></li>");
	    $("#Banner .text").append("<li>"+$(this).find('img').attr('alt')+"</li>");
    });
	$("#Banner .btn li:first").addClass('s');
	//$("#Banner .btn").css({'left':665-30*BannerTotal-30});
	$("#Banner .btn li").hover(function(){
		BanliShow($(this).index());
	},function(){
		return ;
	})
	BanliShow(Banneri);
	BannerTimer = setTimeout(BanliAuto,BannerTime)
	
});
function BanliAuto(){
	var TemID = Banneri+1;
	TemID = TemID>=(BannerTotal)?0:TemID;	
	BanliShow(TemID);	
	BannerTimer = setTimeout(BanliAuto,BannerTime);
}
function BanliShow(TemID){
	clearTimeout(BannerTimer);
	$("#Banner .pic li").eq(Banneri).css("z-index",2);
	
	$("#Banner .text li").eq(Banneri).animate({opacity: 0},100);
	$("#Banner .text li").eq(TemID).animate({opacity: 1},200);
	Banneri = TemID;
	$("#Banner .pic li").stop();
	$("#Banner .pic li").eq(Banneri).css("z-index",3);
	$("#Banner .pic li").eq(Banneri).css("opacity",0);	
	$("#Banner .btn li").removeClass('s');
	$("#Banner .btn li").eq(Banneri).addClass('s');
	$("#Banner .pic li").eq(Banneri).animate({opacity: 1}, 500,function(){
		$("#Banner .pic li").each(function(i) {	
			  if( i != Banneri){
				  $("#Banner .pic li").eq(i).css("z-index",1);
				  $("#Banner .pic li").eq(i).css("opacity",0);	
			  }
		  });		
	});	
}
