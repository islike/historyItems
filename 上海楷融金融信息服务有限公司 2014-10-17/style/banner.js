// JavaScript Document
var Banneri = 0;
var BannerTime= 6000 ;
var BannerTimer;
var BannerTotal;
$(function(){
	BannerTotal = $("#banner .pic li").length;
	$("#banner .pic li").each(function(i) {
        $("#banner .btn").append("<li></li>");
    });
	$("#banner .btn li:first").addClass('s');
	$("#banner .btn li").hover(function(){
		if(Banneri!=$(this).index())
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
	BannerTimer = setTimeout(BanliAuto,BannerTime);
	$("#banner .pic li").eq(Banneri).css("z-index",2);
	
	Banneri = TemID;
	$("#banner .pic li").stop();
	$("#banner .pic li").eq(Banneri).css("z-index",3);
	$("#banner .pic li").eq(Banneri).css("opacity",0);	
	$("#banner .btn li").removeClass('s');
	$("#banner .btn li").eq(Banneri).addClass('s');
	$("#banner .pic li").eq(Banneri).animate({opacity: 1}, 800,function(){
		$("#banner .pic li").each(function(i) {	
			  if( i != Banneri){
				  $("#banner .pic li").eq(i).css("z-index",1);
				  $("#banner .pic li").eq(i).css("opacity",0);	
			  }
		  });		
	});	
}
// JavaScript Document