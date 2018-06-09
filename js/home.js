!function(t,e,n){"use strict";function i(t,e){var n=null;return function(){var i=this,a=arguments;null===n&&(n=setTimeout(function(){t.apply(i,a),n=null},e))}}var a,r,o=(a={},function(t){if(a[t]!==n)return a[t];var e=document.createElement("div").style,i=t.charAt(0).toUpperCase()+t.slice(1),r=(t+" "+["webkit","moz","ms","o"].join(i+" ")+i).split(" ");for(var o in r)if(r[o]in e)return a[t]=r[o];return a[t]=!1}),s="http://www.w3.org/2000/svg",l=function(){if(r!==n)return r;var t=document.createElement("div");return t.innerHTML="<svg/>",r=t.firstChild&&t.firstChild.namespaceURI===s},c=t(e),u=o("transform"),d={itemContainer:"ul",itemSelector:"li",start:"center",fadeIn:400,loop:!1,autoplay:!1,pauseOnHover:!0,style:"coverflow",spacing:-.6,click:!0,keyboard:!0,scrollwheel:!0,touch:!0,nav:!1,buttons:!1,buttonPrev:"Previous",buttonNext:"Next",onItemSwitch:!1},f={main:"flipster",active:"flipster--active",container:"flipster__container",nav:"flipster__nav",navChild:"flipster__nav__child",navItem:"flipster__nav__item",navLink:"flipster__nav__link",navCurrent:"flipster__nav__item--current",navCategory:"flipster__nav__item--category",navCategoryLink:"flipster__nav__link--category",button:"flipster__button",buttonPrev:"flipster__button--prev",buttonNext:"flipster__button--next",item:"flipster__item",itemCurrent:"flipster__item--current",itemPast:"flipster__item--past",itemFuture:"flipster__item--future",itemContent:"flipster__item__content"},h=new RegExp("\\b("+f.itemCurrent+"|"+f.itemPast+"|"+f.itemFuture+")(.*?)(\\s|$)","g"),p=new RegExp("\\s\\s+","g");t.fn.flipster=function(e){if("string"==typeof e){var a=Array.prototype.slice.call(arguments,1);return this.each(function(){var n=t(this).data("methods");return n[e]?n[e].apply(this,a):this})}var r=t.extend({},d,e);return this.each(function(){var e,a,o,d,v,m,g,w,y,b=t(this),_=[],x=0,C=!1,E=!1;function k(e){return e=e||"next",t('<button class="'+f.button+" "+("next"===e?f.buttonNext:f.buttonPrev)+'" role="button" />').html((n=e,i="next"===n?r.buttonNext:r.buttonPrev,"custom"!==r.buttons&&l?'<svg viewBox="0 0 13 20" xmlns="'+s+'" aria-labelledby="title"><title>'+i+'</title><polyline points="10,3 3,10 10,17"'+("next"===n?' transform="rotate(180 6.5,10)"':"")+"/></svg>":i)).on("click",function(t){$(e),t.preventDefault()});var n,i}function I(){b.css("transition",""),a.css("transition",""),v.css("transition","")}function L(e){var n,i;e&&(b.css("transition","none"),a.css("transition","none"),v.css("transition","none")),o=a.width(),a.height((i=0,v.each(function(){(n=t(this).height())>i&&(i=n)}),i)),o?(d&&(clearInterval(d),d=!1),v.each(function(n){var i,a,s=t(this);s.attr("class",function(t,e){return e&&e.replace(h,"").replace(p," ")}),i=s.outerWidth(),0!==r.spacing&&s.css("margin-right",i*r.spacing+"px"),a=s.position().left,_[n]=-1*(a+i/2-o/2),n===v.length-1&&(M(),e&&setTimeout(I,1))})):d=d||setInterval(function(){L(e)},500)}function M(){var e,i,s,l=v.length;v.each(function(n){e=t(this),i=" ",n===x?(i+=f.itemCurrent,s=l+1):n<x?(i+=f.itemPast+" "+f.itemPast+"-"+(x-n),s=l-(x-n)):(i+=f.itemFuture+" "+f.itemFuture+"-"+(n-x),s=l-(n-x)),e.css("z-index",s).attr("class",function(t,e){return e&&e.replace(h,"").replace(p," ")+i})}),x>=0&&(o&&_[x]!==n||L(!0),u?a.css("transform","translateX("+_[x]+"px)"):a.css({left:_[x]+"px"})),function(){if(r.nav){var e=m.data("flip-category");w.removeClass(f.navCurrent),y.filter(function(){return t(this).data("index")===x||e&&t(this).data("category")===e}).parent().addClass(f.navCurrent)}}()}function $(t){var e=x;if(!(v.length<=1))return"prev"===t?x>0?x--:r.loop&&(x=v.length-1):"next"===t?x<v.length-1?x++:r.loop&&(x=0):"number"==typeof t?x=t:t!==n&&(x=v.index(t),r.loop&&e!=x&&(e==v.length-1&&x!=v.length-2&&(x=0),0==e&&1!=x&&(x=v.length-1))),m=v.eq(x),x!==e&&r.onItemSwitch&&r.onItemSwitch.call(b,v[x],v[e]),M(),b}function j(t){return r.autoplay=t||r.autoplay,clearInterval(C),C=setInterval(function(){var t=x;$("next"),t!==x||r.loop||clearInterval(C)},r.autoplay),b}function P(){return clearInterval(C),C=0,b}function X(t){return P(),r.autoplay&&t&&(C=-1),b}function z(){L(!0),b.hide().css("visibility","").addClass(f.active).fadeIn(r.fadeIn)}function Y(){var e;if(a=b.find(r.itemContainer).addClass(f.container),!((v=a.find(r.itemSelector)).length<=1))return v.addClass(f.item).each(function(){var e=t(this);e.children("."+f.itemContent).length||e.wrapInner('<div class="'+f.itemContent+'" />')}),r.click&&v.on("click.flipster touchend.flipster",function(e){E||(t(this).hasClass(f.itemCurrent)||e.preventDefault(),$(this))}),r.buttons&&v.length>1&&(b.find("."+f.button).remove(),b.append(k("prev"),k("next"))),e={},!r.nav||v.length<=1||(g&&g.remove(),g=t('<ul class="'+f.nav+'" role="navigation" />'),y=t(""),v.each(function(n){var i=t(this),a=i.data("flip-category"),r=(i.data("flip-title")||i.attr("title"),t('<a href="#" class="'+f.navLink+'">•</a>').data("index",n));if(y=y.add(r),a){if(!e[a]){var o=t('<li class="'+f.navItem+" "+f.navCategory+'">'),s=t('<a href="#" class="'+f.navLink+" "+f.navCategoryLink+'" data-flip-category="'+a+'">•</a>').data("category",a).data("index",n);e[a]=t('<ul class="'+f.navChild+'" />'),y=y.add(s),o.append(s,e[a]).appendTo(g)}e[a].append(r)}else g.append(r);r.wrap('<li class="'+f.navItem+'">')}),g.on("click","a",function(e){var n=t(this).data("index");n>=0&&($(n),e.preventDefault())}),b.append(g),w=g.find("."+f.navItem)),x>=0&&$(x),b}e={jump:$,next:function(){return $("next")},prev:function(){return $("prev")},play:j,stop:P,pause:X,index:Y},b.data("methods",e),b.hasClass(f.active)||function(){var t;if(b.css("visibility","hidden"),Y(),v.length<=1)b.css("visibility","");else{t=!!r.style&&"flipster--"+r.style.split(" ").join(" flipster--"),b.addClass([f.main,u?"flipster--transform":" flipster--no-transform",t,r.click?"flipster--click":""].join(" ")),r.start&&(x="center"===r.start?Math.floor(v.length/2):r.start),$(x);var e,n,o,s,l,d,h,p,m=b.find("img");if(m.length){var g=0;m.on("load",function(){++g>=m.length&&z()}),setTimeout(z,750)}else z();c.on("resize.flipster",i(L,400)),r.autoplay&&j(),r.pauseOnHover&&a.on("mouseenter.flipster",function(){C?X(!0):P()}).on("mouseleave.flipster",function(){-1===C&&j()}),e=b,r.keyboard&&(e[0].tabIndex=0,e.on("keydown.flipster",i(function(t){var e=t.which;37!==e&&39!==e||($(37===e?"prev":"next"),t.preventDefault())},250))),function(t){if(r.scrollwheel){var e,n,a=!1,o=0,s=0,l=0,u=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase());t.on("mousewheel.flipster wheel.flipster",function(){a=!0}).on("mousewheel.flipster wheel.flipster",i(function(t){clearTimeout(s),s=setTimeout(function(){o=0,l=0},300),t=t.originalEvent,l+=t.wheelDelta||-1*(t.deltaY+t.deltaX),Math.abs(l)<25&&!u||(o++,n!==(e=l>0?"prev":"next")&&(o=0),n=e,(o<6||o%3==0)&&$(e),l=0)},50)),c.on("mousewheel.flipster wheel.flipster",function(t){a&&(t.preventDefault(),a=!1)})}}(a),n=a,r.touch&&n.on({"touchstart.flipster":function(t){t=t.originalEvent,o=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY},"touchmove.flipster":function(t){t=t.originalEvent,l=t.touches?t.touches[0].clientX:t.clientX,d=t.touches?t.touches[0].clientY:t.clientY,p=l-o,h=d-s,Math.abs(p)>30&&Math.abs(h)<100&&t.preventDefault()},"touchend.flipster touchcancel.flipster ":function(){p=l-o,h=d-s,Math.abs(p)>30&&Math.abs(h)<100&&$(p>0?"prev":"next")}})}}()})}}(jQuery,window),jQuery(".my-flipster").flipster({scrollwheel:!1,spacing:-.55,nav:!0}),function(){window.mediaCheck=function(t){var e,n,i,a,r,o,s,l;if(s=void 0,l=void 0,i=void 0,void 0!==window.matchMedia&&window.matchMedia("!").addListener)return l=function(t,e){return t.matches?"function"==typeof e.entry&&e.entry(t):"function"==typeof e.exit&&e.exit(t),"function"==typeof e.both?e.both(t):void 0},i=function(){return(s=window.matchMedia(t.media)).addListener(function(){return l(s,t)}),window.addEventListener("orientationchange",function(){return s=window.matchMedia(t.media),l(s,t)},!1),l(s,t)},i();e={},l=function(t,n){return t.matches?"function"!=typeof n.entry||!1!==e[n.media]&&null!=e[n.media]||n.entry(t):"function"!=typeof n.exit||!0!==e[n.media]&&null!=e[n.media]||n.exit(t),"function"==typeof n.both&&n.both(t),e[n.media]=t.matches},n=function(t){var e,n;return e=void 0,(e=document.createElement("div")).style.width="1em",e.style.position="absolute",document.body.appendChild(e),n=t*e.offsetWidth,document.body.removeChild(e),n},a=function(t,e){var i;switch(i=void 0,e){case"em":i=n(t);break;default:i=t}return i};for(r in t)e[t.media]=null;return o=function(){var e,n,i,r,o;return e=(i=t.media.match(/\((.*)-.*:\s*([\d\.]*)(.*)\)/))[1],r=a(parseInt(i[2],10),i[3]),n={},o=window.innerWidth||document.documentElement.clientWidth,n.matches="max"===e&&r>o||"min"===e&&o>r,l(n,t)},window.addEventListener?window.addEventListener("resize",o):window.attachEvent&&window.attachEvent("onresize",o),o()}}.call(this),function(t){t.backgroundVideo=function(e,n){var i=this;i.settings={};var a,r=function(){var t=o();i.$videoEl.width(t*i.settings.width),i.$videoEl.height(t*i.settings.height),void 0!==i.settings.align&&s()},o=function(){var e=t(window).width(),n=t(window).height(),a=e/n,r=i.settings.width/i.settings.height,o=n/i.settings.height;return a>=r&&(o=e/i.settings.width),o},s=function(){var e=(t(window).width()>>1)-(i.$videoEl.width()>>1)|0,n=(t(window).height()>>1)-(i.$videoEl.height()>>1)|0;"centerXY"!=i.settings.align?"centerX"!=i.settings.align?"centerY"!=i.settings.align||i.$videoEl.css("top",n-5):i.$videoEl.css("left",e):i.$videoEl.css({left:e,top:n-5})};i.settings=t.extend({},{videoid:"video_background"},n),i.el=e,a="",a+='<video id="'+i.settings.videoid+'" preload="auto" autoplay="autoplay" loop="loop"',i.settings.poster&&(a+=' poster="'+i.settings.poster+'" '),a+='style="display:none;position:fixed;top:0;left:0;bottom:0;right:0;z-index:0;width:100%;height:100%;filter:blur(3px) saturate(0%);">',a+='<source src="./assets/lights.mp4" type="video/mp4" />',a+="bgvideo</video>",i.el.prepend(a),i.videoEl=document.getElementById(i.settings.videoid),i.$videoEl=t(i.videoEl),i.$videoEl.fadeIn(2e3),r(),t(window).resize(function(){r()}),i.$videoEl.bind("ended",function(){this.play()})}}(jQuery),jQuery(document).ready(function(){"use strict";mediaCheck({media:"(max-width: 768px)",entry:function(){for(;;){var t=document.querySelector("#video_background");if(!t)break;t.parentElement.removeChild(t)}},exit:function(){new jQuery.backgroundVideo(jQuery("#header"),{align:"centerXY",width:1450,height:720,path:"assets/lights.mp4"})}})});