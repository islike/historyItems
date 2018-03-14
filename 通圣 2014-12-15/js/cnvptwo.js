function showLocale()
{
	var objD = new Date();
	var str,colorhead,colorfoot;
	var yy = objD.getYear();
	if(yy<1900) yy = yy+1900;
	var MM = objD.getMonth()+1;
	if(MM<10) MM = '0' + MM;
	var dd = objD.getDate();
	if(dd<10) dd = '0' + dd;
	var hh = objD.getHours();
	if(hh<10) hh = '0' + hh;
	var mm = objD.getMinutes();
	if(mm<10) mm = '0' + mm;
	var ss = objD.getSeconds();
	if(ss<10) ss = '0' + ss;
	var ww = objD.getDay();
	if  ( ww==0 )  colorhead="<font color=\"#FF0000\">";
	if  ( ww > 0 && ww < 6 )  colorhead="<font color=\"#373737\">";
	if  ( ww==6 )  colorhead="<font color=\"#008000\">";
	if  (ww==0)  ww="星期日";
	if  (ww==1)  ww="星期一";
	if  (ww==2)  ww="星期二";
	if  (ww==3)  ww="星期三";
	if  (ww==4)  ww="星期四";
	if  (ww==5)  ww="星期五";
	if  (ww==6)  ww="星期六";
	colorfoot="</font>"
	str = yy + "年" + MM + "月" + dd + "日  "  +ww ;
	document.write(str);
}
function tick(Obj)
{
	var today;
	today = new Date();
	document.getElementById(Obj).innerHTML = showLocale();
	window.setTimeout("tick()", 1000);
}
function Flash(url,w,h,s){
	if (s==1){
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+w+'" height="'+h+'"> ');
	document.write('<param name="movie" value="' + url + '">');
	document.write('<param name="quality" value="high"> ');
	document.write('<param name="wmode" value="transparent"> ');
	document.write('<param name="menu" value="false"> ');
	document.write('<embed src="' + url + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'" wmode="transparent"></embed> ');
	document.write('</object> ');
	}
	else{
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+w+'" height="'+h+'"> ');
	document.write('<param name="movie" value="' + url + '">');
	document.write('<param name="quality" value="high"> ');
	document.write('<param name="menu" value="false"> ');
	document.write('<embed src="' + url + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed> ');
	document.write('</object> ');
	}
}
//加入收藏与设为首页
var hostName = "http://" + window.location.hostname;
var hostHref = window.location.href;
var tt;
var siteName;
$.get(hostHref,
	 {},
	 function(data){
	  tt = data.match(/<title>(.+)<\/title>/);
	  siteName=tt[1];
	 }
	);
function AddFavorite() 
{ 
	try
	{
		window.external.addFavorite(hostName,siteName); 
	}
	catch(e)
	{
		try
		{
			window.sidebar.addPanel(siteName, hostName, ""); 
		}
		catch(e)
		{
			alert("添加收藏夹失败，请手动添加");
		}
	}
}
function SetHomePage()
{
  if(window.netscape)
  {
        try
		{  
          	netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        }  
        catch (e)  
        {  
			alert("浏览器拒绝了设为首页的操作！");  //地址栏-->about:config,signed.applets.codebase_principal_support=true  
        }
	var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
  	prefs.setCharPref('browser.startup.homepage',hostName);
  }
  else
  {
     document.getElementById("homepage").style.behavior='url(#default#homepage)';
   	 document.getElementById("homepage").sethomepage(hostName);
  }
}
//顶部搜索脚本
$(function(){	
	$("input[name='Keyword']").bind("focus", function () {
		var v = $(this).val();
		var d = $(this).attr("data")
		if(d)
		if(v==d)
			$(this).val('');
	})
	$("input[name='Keyword']").bind("blur", function () {
		var v = $(this).val();
		var d = $(this).attr("data")
		if(d)
		if(v=="")
			$(this).val(d);
	})
	
})
function TopCheckForm(){	
	if ($('#Keyword').val()=='' || $('#Keyword').val()=='请输入搜索内容')	
	{		
		alert('请输入搜索内容！');	
		$('#Keyword').focus();	
		return false;	
	};	
	return true;
};
function RemLastChar(Str,char){
	var lastindex = Str.lastIndexOf(char)
    if(lastindex>-1)
	{
	  Str = Str.substring(0,lastindex)
	}
	return Str
}
function RemNumChar(Str,char,num){
	var TemStr = Str;
	var index = 0;
	var indextotal = 0;
	for(var i=0;i<num;i++){
		index = TemStr.indexOf(char);
		if(index >= 0){
			indextotal +=index+1;
			TemStr = TemStr.substring(index+1,TemStr.length);
		}
	}
	TemStr = Str.substring(0,indextotal-1) + Str.substring(indextotal+1,Str.length)
	return TemStr;   
}
function InsertStr(str,char,num){
	var Temstr = str;
	if(str.length > num)
		Temstr = str.substring(0,num)+char+str.substring(num,str.length);	
	return Temstr;
}
function selectlink(o){
	var linkurl = o.options[o.selectedIndex].value;
	if(linkurl !="")
	{
		window.open(linkurl);
	}
}
function IndexTab(o){
	var id = o.index()
	if(id == 2){id = 1;}else if(id == 4){id = 2;}else if(id == 6){id = 3;};
	o.parent().find("a").each(function(i){
		if(id == i){
			$(this).addClass("s");
			$(this).parent().parent().find("ul").eq(i).show();
		}else{
			$(this).removeClass("s");	
			$(this).parent().parent().find("ul").eq(i).hide();
		}
	})
}
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
function PageNavInit(){
  $(".PageNav li").each(function(){
	  if($(this).find("p").find("a").length > 0){
		  $(this).find(".one").attr("href","javascript:;");
		  $(this).find(".one").click(function(){
			  if($(this).parent().find("p").css("display") == "none"){
				 $(this).parent().find("p").slideDown(200);
				 $(this).parent().addClass("s");
			  }else{
				 $(this).parent().find("p").slideUp(150,function(){$(this).parent().removeClass("s");}); 				 
			  }
		  })
	  }	
  })
  var TwoID = $(".Loaction a:eq(2)").attr("rel");
  if($(".Loaction a").length > 3){
	$("#PL_"+TwoID+" p").show(); 
	$("#PL_"+TwoID).addClass("s");
	$("#PL_"+$(".Loaction a:eq(3)").attr("rel")).addClass("ts");
	//$(".PageRigTit span").html($(".Loaction a:eq(3)").html());	
  }else{
	//$(".PageRigTit span").html($(".Loaction a:last").html());
	
	if($("#PL_"+TwoID+" p a").length > 0){
		$("#PL_"+TwoID+" p").show();
		$("#PL_"+TwoID).addClass("s");	
	}else{
		$("#PL_"+TwoID).addClass("s2");	
	}
  }  
}
function FourNavCom(){
	if($("#FourNav").html() == "0"){
		$("#FourNav").remove();	
	}else{
		if($(".Loaction a").length > 4)
			$("#FourNav_"+$(".Loaction a:eq(4)").attr("rel")).addClass("s");	
	}
}
function GetRequest() {
   var url = location.search; //获取url中"?"符后的字串
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
   }
   return theRequest;
}
function WsbsThree(strid){
	var id = strid.substring(4,strid.length);
	$("#"+strid+" .WsbsTit dd").html($("#PL_"+id+" p").html());
	$("#"+strid+" .WsbsTit dd a").each(function(i) {
        $(this).attr("id","");
		if((i+1) != $("#"+strid+" .WsbsTit dd a").length)
			$(this).after(" | ");
    });
}
function Flash(url,w,h){
	var FlashData ;
	FlashData = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+w+'" height="'+h+'"> ';
	FlashData +='<param name="movie" value="' + url + '">';
	FlashData +='<param name="quality" value="high"> ';
	FlashData +='<param name="wmode" value="transparent"> ';
	FlashData +='<param name="menu" value="false"> ';
	FlashData +='<embed src="' + url + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'" wmode="transparent"></embed> ';
	FlashData +='</object> ';
	return FlashData;
	
}
$(function(){
	$(".logo").append("<p>"+Flash("images/top.swf",400,99)+"</p>");
})