/*<![CDATA[*/ Defer.all('script[type="deferjs"]', 50, true);Defer.dom('.lazy', 200, 'lazied', null, {rootMargin:'1px'}),'undefined'!=typeof infinite_scroll&&infinite_scroll.on('load',function(){Defer.dom('.lazy', 200, 'lazied', null, {rootMargin:'1px'}) });  /*]]>*/
/*<![CDATA[*/
var lazyts=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyts||0!=document.body.scrollTop&&!1===lazyts)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.bertips.com/translate.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyts=!0)},!0); /*]]>*/
/*<![CDATA[*/
document.addEventListener("contextmenu",function(e){"IMG"===e.target.nodeName&&e.preventDefault()},!1); /*]]>*/
/*<![CDATA[*/
setInterval(function() {
var imgBp = document.getElementsByTagName('img');
    for (var i = 0; i < imgBp.length; i++) {
        imgBp[i].src = imgBp[i].src.replace('1.bp.blogspot.com', '2.bp.blogspot.com');
    }
}, 1000); /*]]>*/
/*<![CDATA[*/
function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:'id',includedLanguages:'en,id,vi,zh-CN,th,ru,ms,ko,ja,it,hi',layout:google.translate.TranslateElement.InlineLayout.SIMPLE},'google_translate_element')}$(".hover").mouseleave(function (){$(this).removeClass("hover")});
       /*]]>*/ 
