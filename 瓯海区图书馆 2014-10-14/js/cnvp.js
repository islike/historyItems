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
	str =  yy + "年" + MM + "月" + dd + "日  "  +ww ;
	document.write(str);
}
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
	if ($('#Keyword').val()=='' || $('#Keyword').val()=='请输入关键字')	
	{		
		alert('请输入关键字！');	
		$('#Keyword').focus();	
		return false;	
	};	
	return true;
};
function RemLastChar(Str,char){
	var lastindex = Str.lastIndexOf(char);
    if(lastindex>-1){Str = Str.substring(0,lastindex)};
	return Str;
}
function box2_tab(id){
	$('.box2_t .t a').each(function(i) {
        if(i == id){
			$(this).addClass("s");
			$('.box2_t .c').eq(i).show();
		}else{
			$(this).removeClass("s");	
			$('.box2_t .c').eq(i).hide();
		}
    });
}
function box3_tab(o){
	var _box3 = o.parent().parent();
	var _id = o.index()-1;
	_box3.find('.t a').each(function(i) {
        if(i == _id){
			$(this).addClass('s');
			_box3.find('.c').eq(i).show();
		}else{
			$(this).removeClass('s');
			_box3.find('.c').eq(i).hide();
		}
    });
}
function selectlink(o){
	var linkurl = o.options[o.selectedIndex].value;
	if(linkurl !="")
		window.open(linkurl);
}