window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){var a=arguments;a.callee=a.callee.caller;a=[].slice.call(a);typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a)}};
(function(a){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),b;b=d.pop();)a[b]=a[b]||c})(function(){try{return console.log(),window.console}catch(a){return window.console={}}}());
var urlParams={};(function(){for(var a,b=/\+/g,c=/([^&=]+)=?([^&]*)/g,d=window.location.search.substring(1);a=c.exec(d);)urlParams[decodeURIComponent(a[1].replace(b," "))]=decodeURIComponent(a[2].replace(b," "))})();function showError(){$("#error").show();$("#landing").hide();$("#goodstuff").hide();$("#loading").hide()}function delete_image(a){a.parentNode.parentNode.removeChild(a.parentNode);total=$("#goodstuff li").size()}
function viewport(){windowWidth=window.innerWidth;windowHeight=window.innerHeight}viewport();function imgClean(){$(".dirty").each(function(){$(this).removeClass("dirty");$(this).addClass("clean");$(this).attr("width",windowWidth).attr("height",windowHeight)})}imgClean();num=0;
myJsonpCallback=function(a){$.each(a.response.posts,function(){$.each(this.photos,function(){var a=this.original_size.url;a.indexOf(".gif")>=0&&($("#goodstuff ul").append("<li><img class='dirty' src='"+a+"' onerror='delete_image(this)'></li>"),imgClean())})});num+=1;$("li").size()<8&&load();loadAgain(num)};
$(document).ready(function(){total=$("#goodstuff li").size();(url=urlParams.url)?($("#loading").show(),url.substr(-1)==="/"&&(url=url.substr(0,url.length-1)),url.substr(0,7)==="http://"&&(url=url.substring(7)),load(),setTimeout(function(){$("#goodstuff li").size()<1?showError():($("#loading").hide(),$("#goodstuff").show())},5E3)):($("#loading").hide(),$("#landing").show(),$("#url").focus(),imgClean(),$(document).keydown(function(a){if(a.keyCode==13)a=$("#url").val(),a.substr(-1)==="/"&&(a=a.substr(0,
a.length-1)),a.substr(0,7)==="http://"&&(a=a.substring(7)),window.location.href="http://lolwtfgif.com/?url="+a+""}));$("#url").click(function(){$(this).val("")});$("#url").blur(function(){$(this).val()||$(this).val("why did you do that?")});$(window).resize(function(){viewport();$(".clean").attr("width",windowWidth).attr("height",windowHeight)});$(window).click(function(){anyScroll();_gaq.push(["_trackEvent","Scroll","Mouse Click",""]);cycle("right")});$(document).keydown(function(a){anyScroll();
a.keyCode==39?(_gaq.push(["_trackEvent","Scroll","Right Arrow Key Press",""]),cycle("right")):a.keyCode==37&&(_gaq.push(["_trackEvent","Scroll","Left Arrow Key Press",""]),cycle("left"))})});var offset=0;function load(){$.ajax({type:"GET",url:"http://api.tumblr.com/v2/blog/"+url+"/posts?type=photo&limit=10&offset="+offset+"",dataType:"jsonp",data:{api_key:"fmCi0cMluKIabZEGPyUmaX3pDMA6VApivcTN6artFbU405Sv3K",jsonp:"myJsonpCallback"}});offset+=10}
function loadAgain(a){a<7&&($.ajax({type:"GET",url:"http://api.tumblr.com/v2/blog/"+url+"/posts?type=photo&limit=10&offset="+offset+"",dataType:"jsonp",data:{api_key:"fmCi0cMluKIabZEGPyUmaX3pDMA6VApivcTN6artFbU405Sv3K",jsonp:"myJsonpCallback"}}),offset+=10)}
function initiate(){current=$("#goodstuff li img:visible");prev=current.parent("li").prev("li").find("img");prev.size()||(prev=$("#goodstuff ul li:last-child img"));next=current.parent("li").next("li").find("img");next.size()||(next=$("#goodstuff ul li:first-child img"))}
function cycle(a){total=$("#goodstuff li").size();initiate();a==="right"?(next.show(),current.hide()):a==="left"&&(prev.show(),current.hide());a=$("#goodstuff li img:visible").parents("li").index();total-a<20&&load();_gaq.push(["_trackPageview","/?url="+url+""])}function anyScroll(){total=$("#goodstuff li").size();$("#goodstuff #click").hide()};
