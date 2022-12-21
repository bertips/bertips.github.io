/*<![CDATA[*/ Defer.all('script[type="deferjs"]', 50, true);Defer.dom('.lazy', 200, 'lazied', null, {rootMargin:'1px'}),'undefined'!=typeof infinite_scroll&&infinite_scroll.on('load',function(){Defer.dom('.lazy', 200, 'lazied', null, {rootMargin:'1px'}) });  /*]]>*/
/* Adsense Max Click */
! function () {
  function o(e, n) {
    return null != (e = Pu.gC(e)) && parseInt(e) >= n
  }
  var s = "ADS_FD",
    e = ".adsbygoogle";
  o(s, 3) && (PuSet.adsenseAds.publisherId = ""), 0 < qSell(e).length && qSell(e).forEach(e => {
    e.addEventListener("click", function () {
      var e, n;
      o(s, 3) ? (fixedNotif("Please don&#39;t spam, if you don&#39;t want to support us. (error: Ads Max Clicked)"), mxAdCl()) : (e = s, null != (n = Pu.gC(e)) ? (n = parseInt(n) + 1, Pu.sC(e, n.toString(), {
        secure: !0,
        "max-age": 3600
      })) : Pu.sC(e, "1", {
        secure: !0,
        "max-age": 3600
      }))
    })
  }), window.addEventListener("blur", function () {
    o(s, 3) && (mxAdCl());
    for (var e, n, l = qSell(".adsbygoogle iframe"), t = 0; t < l.length; t++) document.activeElement == l[t] && (o(s, 3) ? (fixedNotif("Please don&#39;t spam, if you don&#39;t want to support us. (error: Ads Max Clicked)"), Pu.sC('MAX_CLICKED', 'YES', {
      secure: !0,
      "max-age": 3600,
      "httpOnly": !0
    }), mxAdCl()) : (e = s, null != (n = Pu.gC(e)) ? (n = parseInt(n) + 1, Pu.sC(e, n.toString(), {
      secure: !0,
      "max-age": 3600
    })) : Pu.sC(e, "1", {
      secure: !0,
      "max-age": 3600
    })))
  })
}();
  /*]]>*/   
/*<![CDATA[*/
setInterval(function() {
var imgBp = document.getElementsByTagName('img');
    for (var i = 0; i < imgBp.length; i++) {
        imgBp[i].src = imgBp[i].src.replace('1.bp.blogspot.com', '2.bp.blogspot.com');
    }
}, 1000); /*]]>*/
/*<![CDATA[*/ var pres=document.getElementsByTagName(&quot;pre&quot;);for(var i=0;i&lt;pres.length;i++){pres[i].addEventListener(&quot;dblclick&quot;,function(){var selection=getSelection();var range=document.createRange();range.selectNodeContents(this);selection.removeAllRanges();selection.addRange(range)},!1)} /*]]>*/
/*<![CDATA[*/ var lazyts=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyts||0!=document.body.scrollTop&&!1===lazyts)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.bertips.com/translate.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyts=!0)},!0); /*]]>*/
/*<![CDATA[*/ document.addEventListener("contextmenu",function(e){"IMG"===e.target.nodeName&&e.preventDefault()},!1); /*]]>*/
/*<![CDATA[*/ function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:'id',includedLanguages:'en,id,vi,zh-CN,th,ru,ms,ko,ja,it,hi',layout:google.translate.TranslateElement.InlineLayout.SIMPLE},'google_translate_element')}$(".hover").mouseleave(function (){$(this).removeClass("hover")}); /*]]>*/ 
