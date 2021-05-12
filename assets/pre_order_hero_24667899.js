(function(window, document){"use strict";

	window.BaPoShopify={}

	function reqJquery(onload){
		if(typeof jQuery==='undefined' || (parseInt(jQuery.fn.jquery)===1 && parseFloat(jQuery.fn.jquery.replace(/^1\./,'')) < 10)){
			var head=document.getElementsByTagName('head')[0];
			var script=document.createElement('script');
			script.src=('https:'==document.location.protocol ? 'https://' :'http://')+'ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js';;
			script.type='text/javascript';
			script.onload=script.onreadystatechange=function(){
        /* Tooltipster v3.3.0 */;(function(e,t,n){function s(t,n){this.bodyOverflowX;this.callbacks={hide:[],show:[]};this.checkInterval=null;this.Content;this.$el=e(t);this.$elProxy;this.elProxyPosition;this.enabled=true;this.options=e.extend({},i,n);this.mouseIsOverProxy=false;this.namespace="tooltipster-"+Math.round(Math.random()*1e5);this.Status="hidden";this.timerHide=null;this.timerShow=null;this.$tooltip;this.options.iconTheme=this.options.iconTheme.replace(".","");this.options.theme=this.options.theme.replace(".","");this._init()}function o(t,n){var r=true;e.each(t,function(e,i){if(typeof n[e]==="undefined"||t[e]!==n[e]){r=false;return false}});return r}function f(){return!a&&u}function l(){var e=n.body||n.documentElement,t=e.style,r="transition";if(typeof t[r]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],r=r.charAt(0).toUpperCase()+r.substr(1);for(var i=0;i<v.length;i++){if(typeof t[v[i]+r]=="string"){return true}}return false}var r="tooltipster",i={animation:"fade",arrow:true,arrowColor:"",autoClose:true,content:null,contentAsHTML:false,contentCloning:true,debug:true,delay:200,minWidth:0,maxWidth:null,functionInit:function(e,t){},functionBefore:function(e,t){t()},functionReady:function(e,t){},functionAfter:function(e){},hideOnClick:false,icon:"(?)",iconCloning:true,iconDesktop:false,iconTouch:false,iconTheme:"tooltipster-icon",interactive:false,interactiveTolerance:350,multiple:false,offsetX:0,offsetY:0,onlyOne:false,position:"top",positionTracker:false,positionTrackerCallback:function(e){if(this.option("trigger")=="hover"&&this.option("autoClose")){this.hide()}},restoration:"current",speed:350,timer:0,theme:"tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};s.prototype={_init:function(){var t=this;if(n.querySelector){var r=null;if(t.$el.data("tooltipster-initialTitle")===undefined){r=t.$el.attr("title");if(r===undefined)r=null;t.$el.data("tooltipster-initialTitle",r)}if(t.options.content!==null){t._content_set(t.options.content)} else {t._content_set(r)}var i=t.options.functionInit.call(t.$el,t.$el,t.Content);if(typeof i!=="undefined")t._content_set(i);t.$el.removeAttr("title").addClass("tooltipstered");if(!u&&t.options.iconDesktop||u&&t.options.iconTouch){if(typeof t.options.icon==="string"){t.$elProxy=e('<span class="'+t.options.iconTheme+'"></span>');t.$elProxy.text(t.options.icon)} else {if(t.options.iconCloning)t.$elProxy=t.options.icon.clone(true);else t.$elProxy=t.options.icon}t.$elProxy.insertAfter(t.$el)} else {t.$elProxy=t.$el}if(t.options.trigger=="hover"){t.$elProxy.on("mouseenter."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=true;t._show()}}).on("mouseleave."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=false}});if(u&&t.options.touchDevices){t.$elProxy.on("touchstart."+t.namespace,function(){t._showNow()})}}else if(t.options.trigger=="click"){t.$elProxy.on("click."+t.namespace,function(){if(!f()||t.options.touchDevices){t._show()}})}}},_show:function(){var e=this;if(e.Status!="shown"&&e.Status!="appearing"){if(e.options.delay){e.timerShow=setTimeout(function(){if(e.options.trigger=="click"||e.options.trigger=="hover"&&e.mouseIsOverProxy){e._showNow()}},e.options.delay)}else e._showNow()}},_showNow:function(n){var r=this;r.options.functionBefore.call(r.$el,r.$el,function(){if(r.enabled&&r.Content!==null){if(n)r.callbacks.show.push(n);r.callbacks.hide=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;if(r.options.onlyOne){e(".tooltipstered").not(r.$el).each(function(t,n){var r=e(n),i=r.data("tooltipster-ns");e.each(i,function(e,t){var n=r.data(t),i=n.status(),s=n.option("autoClose");if(i!=="hidden"&&i!=="disappearing"&&s){n.hide()}})})}var i=function(){r.Status="shown";e.each(r.callbacks.show,function(e,t){t.call(r.$el)});r.callbacks.show=[]};if(r.Status!=="hidden"){var s=0;if(r.Status==="disappearing"){r.Status="appearing";if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+r.options.animation+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)} else {r.$tooltip.stop().fadeIn(i)}}else if(r.Status==="shown"){i()}} else {r.Status="appearing";var s=r.options.speed;r.bodyOverflowX=e("body").css("overflow-x");e("body").css("overflow-x","hidden");var o="tooltipster-"+r.options.animation,a="-webkit-transition-duration:"+r.options.speed+"ms; -webkit-animation-duration:"+r.options.speed+"ms; -moz-transition-duration:"+r.options.speed+"ms; -moz-animation-duration:"+r.options.speed+"ms; -o-transition-duration:"+r.options.speed+"ms; -o-animation-duration:"+r.options.speed+"ms; -ms-transition-duration:"+r.options.speed+"ms; -ms-animation-duration:"+r.options.speed+"ms; transition-duration:"+r.options.speed+"ms; animation-duration:"+r.options.speed+"ms;",f=r.options.minWidth?"min-width:"+Math.round(r.options.minWidth)+"px;":"",c=r.options.maxWidth?"max-width:"+Math.round(r.options.maxWidth)+"px;":"",h=r.options.interactive?"pointer-events:auto;":"";r.$tooltip=e('<div class="tooltipster-base '+r.options.theme+'" style="'+f+" "+c+" "+h+" "+a+'"><div class="tooltipster-content"></div></div>');if(l())r.$tooltip.addClass(o);r._content_insert();r.$tooltip.appendTo("body");r.reposition();r.options.functionReady.call(r.$el,r.$el,r.$tooltip);if(l()){r.$tooltip.addClass(o+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)} else {r.$tooltip.css("display","none").fadeIn(r.options.speed,i)}r._interval_set();e(t).on("scroll."+r.namespace+" resize."+r.namespace,function(){r.reposition()});if(r.options.autoClose){e("body").off("."+r.namespace);if(r.options.trigger=="hover"){if(u){setTimeout(function(){e("body").on("touchstart."+r.namespace,function(){r.hide()})},0)}if(r.options.interactive){if(u){r.$tooltip.on("touchstart."+r.namespace,function(e){e.stopPropagation()})}var p=null;r.$elProxy.add(r.$tooltip).on("mouseleave."+r.namespace+"-autoClose",function(){clearTimeout(p);p=setTimeout(function(){r.hide()},r.options.interactiveTolerance)}).on("mouseenter."+r.namespace+"-autoClose",function(){clearTimeout(p)})} else {r.$elProxy.on("mouseleave."+r.namespace+"-autoClose",function(){r.hide()})}if(r.options.hideOnClick){r.$elProxy.on("click."+r.namespace+"-autoClose",function(){r.hide()})}}else if(r.options.trigger=="click"){setTimeout(function(){e("body").on("click."+r.namespace+" touchstart."+r.namespace,function(){r.hide()})},0);if(r.options.interactive){r.$tooltip.on("click."+r.namespace+" touchstart."+r.namespace,function(e){e.stopPropagation()})}}}}if(r.options.timer>0){r.timerHide=setTimeout(function(){r.timerHide=null;r.hide()},r.options.timer+s)}}})},_interval_set:function(){var t=this;t.checkInterval=setInterval(function(){if(e("body").find(t.$el).length===0||e("body").find(t.$elProxy).length===0||t.Status=="hidden"||e("body").find(t.$tooltip).length===0){if(t.Status=="shown"||t.Status=="appearing")t.hide();t._interval_cancel()} else {if(t.options.positionTracker){var n=t._repositionInfo(t.$elProxy),r=false;if(o(n.dimension,t.elProxyPosition.dimension)){if(t.$elProxy.css("position")==="fixed"){if(o(n.position,t.elProxyPosition.position))r=true} else {if(o(n.offset,t.elProxyPosition.offset))r=true}}if(!r){t.reposition();t.options.positionTrackerCallback.call(t,t.$el)}}}},200)},_interval_cancel:function(){clearInterval(this.checkInterval);this.checkInterval=null},_content_set:function(e){if(typeof e==="object"&&e!==null&&this.options.contentCloning){e=e.clone(true)}this.Content=e},_content_insert:function(){var e=this,t=this.$tooltip.find(".tooltipster-content");if(typeof e.Content==="string"&&!e.options.contentAsHTML){t.text(e.Content)} else {t.empty().append(e.Content)}},_update:function(e){var t=this;t._content_set(e);if(t.Content!==null){if(t.Status!=="hidden"){t._content_insert();t.reposition();if(t.options.updateAnimation){if(l()){t.$tooltip.css({width:"","-webkit-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!="hidden"){t.$tooltip.removeClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!=="hidden"){t.$tooltip.css({"-webkit-transition":t.options.speed+"ms","-moz-transition":t.options.speed+"ms","-o-transition":t.options.speed+"ms","-ms-transition":t.options.speed+"ms",transition:t.options.speed+"ms"})}},t.options.speed)}},t.options.speed)} else {t.$tooltip.fadeTo(t.options.speed,.5,function(){if(t.Status!="hidden"){t.$tooltip.fadeTo(t.options.speed,1)}})}}}} else {t.hide()}},_repositionInfo:function(e){return{dimension:{height:e.outerHeight(false),width:e.outerWidth(false)},offset:e.offset(),position:{left:parseInt(e.css("left")),top:parseInt(e.css("top"))}}},hide:function(n){var r=this;if(n)r.callbacks.hide.push(n);r.callbacks.show=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;var i=function(){e.each(r.callbacks.hide,function(e,t){t.call(r.$el)});r.callbacks.hide=[]};if(r.Status=="shown"||r.Status=="appearing"){r.Status="disappearing";var s=function(){r.Status="hidden";if(typeof r.Content=="object"&&r.Content!==null){r.Content.detach()}r.$tooltip.remove();r.$tooltip=null;e(t).off("."+r.namespace);e("body").off("."+r.namespace).css("overflow-x",r.bodyOverflowX);e("body").off("."+r.namespace);r.$elProxy.off("."+r.namespace+"-autoClose");r.options.functionAfter.call(r.$el,r.$el);i()};if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-"+r.options.animation+"-show").addClass("tooltipster-dying");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(s)} else {r.$tooltip.stop().fadeOut(r.options.speed,s)}}else if(r.Status=="hidden"){i()}return r},show:function(e){this._showNow(e);return this},update:function(e){return this.content(e)},content:function(e){if(typeof e==="undefined"){return this.Content} else {this._update(e);return this}},reposition:function(){var n=this;if(e("body").find(n.$tooltip).length!==0){n.$tooltip.css("width","");n.elProxyPosition=n._repositionInfo(n.$elProxy);var r=null,i=e(t).width(),s=n.elProxyPosition,o=n.$tooltip.outerWidth(false),u=n.$tooltip.innerWidth()+1,a=n.$tooltip.outerHeight(false);if(n.$elProxy.is("area")){var f=n.$elProxy.attr("shape"),l=n.$elProxy.parent().attr("name"),c=e('img[usemap="#'+l+'"]'),h=c.offset().left,p=c.offset().top,d=n.$elProxy.attr("coords")!==undefined?n.$elProxy.attr("coords").split(","):undefined;if(f=="circle"){var v=parseInt(d[0]),m=parseInt(d[1]),g=parseInt(d[2]);s.dimension.height=g*2;s.dimension.width=g*2;s.offset.top=p+m-g;s.offset.left=h+v-g}else if(f=="rect"){var v=parseInt(d[0]),m=parseInt(d[1]),y=parseInt(d[2]),b=parseInt(d[3]);s.dimension.height=b-m;s.dimension.width=y-v;s.offset.top=p+m;s.offset.left=h+v}else if(f=="poly"){var w=[],E=[],S=0,x=0,T=0,N=0,C="even";for(var k=0;k<d.length;k++){var L=parseInt(d[k]);if(C=="even"){if(L>T){T=L;if(k===0){S=T}}if(L<S){S=L}C="odd"} else {if(L>N){N=L;if(k==1){x=N}}if(L<x){x=L}C="even"}}s.dimension.height=N-x;s.dimension.width=T-S;s.offset.top=p+x;s.offset.left=h+S} else {s.dimension.height=c.outerHeight(false);s.dimension.width=c.outerWidth(false);s.offset.top=p;s.offset.left=h}}var A=0,O=0,M=0,_=parseInt(n.options.offsetY),D=parseInt(n.options.offsetX),P=n.options.position;function H(){var n=e(t).scrollLeft();if(A-n<0){r=A-n;A=n}if(A+o-n>i){r=A-(i+n-o);A=i+n-o}}function B(n,r){if(s.offset.top-e(t).scrollTop()-a-_-12<0&&r.indexOf("top")>-1){P=n}if(s.offset.top+s.dimension.height+a+12+_>e(t).scrollTop()+e(t).height()&&r.indexOf("bottom")>-1){P=n;M=s.offset.top-a-_-12}}if(P=="top"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left+D-j/2;M=s.offset.top-a-_-12;H();B("bottom","top")}if(P=="top-left"){A=s.offset.left+D;M=s.offset.top-a-_-12;H();B("bottom-left","top-left")}if(P=="top-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top-a-_-12;H();B("bottom-right","top-right")}if(P=="bottom"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left-j/2+D;M=s.offset.top+s.dimension.height+_+12;H();B("top","bottom")}if(P=="bottom-left"){A=s.offset.left+D;M=s.offset.top+s.dimension.height+_+12;H();B("top-left","bottom-left")}if(P=="bottom-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top+s.dimension.height+_+12;H();B("top-right","bottom-right")}if(P=="left"){A=s.offset.left-D-o-12;O=s.offset.left+D+s.dimension.width+12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A<0&&O+o>i){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=o+A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);A=s.offset.left-D-q-12-I;F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A<0){A=s.offset.left+D+s.dimension.width+12;r="left"}}if(P=="right"){A=s.offset.left+D+s.dimension.width+12;O=s.offset.left-D-o-12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A+o>i&&O<0){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=i-A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A+o>i){A=s.offset.left-D-o-12;r="right"}}if(n.options.arrow){var R="tooltipster-arrow-"+P;if(n.options.arrowColor.length<1){var U=n.$tooltip.css("background-color")} else {var U=n.options.arrowColor}if(!r){r=""}else if(r=="left"){R="tooltipster-arrow-right";r=""}else if(r=="right"){R="tooltipster-arrow-left";r=""} else {r="left:"+Math.round(r)+"px;"}if(P=="top"||P=="top-left"||P=="top-right"){var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}else if(P=="bottom"||P=="bottom-left"||P=="bottom-right"){var z=parseFloat(n.$tooltip.css("border-top-width")),W=n.$tooltip.css("border-top-color")}else if(P=="left"){var z=parseFloat(n.$tooltip.css("border-right-width")),W=n.$tooltip.css("border-right-color")}else if(P=="right"){var z=parseFloat(n.$tooltip.css("border-left-width")),W=n.$tooltip.css("border-left-color")} else {var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}if(z>1){z++}var X="";if(z!==0){var V="",J="border-color:"+W+";";if(R.indexOf("bottom")!==-1){V="margin-top:-"+Math.round(z)+"px;"}else if(R.indexOf("top")!==-1){V="margin-bottom:-"+Math.round(z)+"px;"}else if(R.indexOf("left")!==-1){V="margin-right:-"+Math.round(z)+"px;"}else if(R.indexOf("right")!==-1){V="margin-left:-"+Math.round(z)+"px;"}X='<span class="tooltipster-arrow-border" style="'+V+" "+J+';"></span>'}n.$tooltip.find(".tooltipster-arrow").remove();var K='<div class="'+R+' tooltipster-arrow" style="'+r+'">'+X+'<span style="border-color:'+U+';"></span></div>';n.$tooltip.append(K)}n.$tooltip.css({top:Math.round(M)+"px",left:Math.round(A)+"px"})}return n},enable:function(){this.enabled=true;return this},disable:function(){this.hide();this.enabled=false;return this},destroy:function(){var t=this;t.hide();if(t.$el[0]!==t.$elProxy[0]){t.$elProxy.remove()}t.$el.removeData(t.namespace).off("."+t.namespace);var n=t.$el.data("tooltipster-ns");if(n.length===1){var r=null;if(t.options.restoration==="previous"){r=t.$el.data("tooltipster-initialTitle")}else if(t.options.restoration==="current"){r=typeof t.Content==="string"?t.Content:e("<div></div>").append(t.Content).html()}if(r){t.$el.attr("title",r)}t.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")} else {n=e.grep(n,function(e,n){return e!==t.namespace});t.$el.data("tooltipster-ns",n)}return t},elementIcon:function(){return this.$el[0]!==this.$elProxy[0]?this.$elProxy[0]:undefined},elementTooltip:function(){return this.$tooltip?this.$tooltip[0]:undefined},option:function(e,t){if(typeof t=="undefined")return this.options[e];else{this.options[e]=t;return this}},status:function(){return this.Status}};e.fn[r]=function(){var t=arguments;if(this.length===0){if(typeof t[0]==="string"){var n=true;switch(t[0]){case"setDefaults":e.extend(i,t[1]);break;default:n=false;break}if(n)return true;else return this} else {return this}} else {if(typeof t[0]==="string"){var r="#*$~&";this.each(function(){var n=e(this).data("tooltipster-ns"),i=n?e(this).data(n[0]):null;if(i){if(typeof i[t[0]]==="function"){var s=i[t[0]](t[1],t[2])} else {throw new Error('Unknown method .tooltipster("'+t[0]+'")')}if(s!==i){r=s;return false}} else {throw new Error("You called Tooltipster's \""+t[0]+'" method on an uninitialized element')}});return r!=="#*$~&"?r:this} else {var o=[],u=t[0]&&typeof t[0].multiple!=="undefined",a=u&&t[0].multiple||!u&&i.multiple,f=t[0]&&typeof t[0].debug!=="undefined",l=f&&t[0].debug||!f&&i.debug;this.each(function(){var n=false,r=e(this).data("tooltipster-ns"),i=null;if(!r){n=true}else if(a){n=true}else if(l){console.log('Tooltipster:one or more tooltips are already attached to this element:ignoring. Use the "multiple" option to attach more tooltips.')}if(n){i=new s(this,t[0]);if(!r)r=[];r.push(i.namespace);e(this).data("tooltipster-ns",r);e(this).data(i.namespace,i)}o.push(i)});if(a)return o;else return this}}};var u=!!("ontouchstart"in t);var a=false;e("body").one("mousemove",function(){a=true})})(jQuery,window,document);
				if(script.readyState){
					if(script.readyState==='complete' || script.readyState==='loaded'){
						script.onreadystatechange=null;
						onload(jQuery.noConflict(true));
					}
				}
				else {
					onload(jQuery.noConflict(true));
				}
			};
			head.appendChild(script);
		}else {
      /* Tooltipster v3.3.0 */;(function(e,t,n){function s(t,n){this.bodyOverflowX;this.callbacks={hide:[],show:[]};this.checkInterval=null;this.Content;this.$el=e(t);this.$elProxy;this.elProxyPosition;this.enabled=true;this.options=e.extend({},i,n);this.mouseIsOverProxy=false;this.namespace="tooltipster-"+Math.round(Math.random()*1e5);this.Status="hidden";this.timerHide=null;this.timerShow=null;this.$tooltip;this.options.iconTheme=this.options.iconTheme.replace(".","");this.options.theme=this.options.theme.replace(".","");this._init()}function o(t,n){var r=true;e.each(t,function(e,i){if(typeof n[e]==="undefined"||t[e]!==n[e]){r=false;return false}});return r}function f(){return!a&&u}function l(){var e=n.body||n.documentElement,t=e.style,r="transition";if(typeof t[r]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],r=r.charAt(0).toUpperCase()+r.substr(1);for(var i=0;i<v.length;i++){if(typeof t[v[i]+r]=="string"){return true}}return false}var r="tooltipster",i={animation:"fade",arrow:true,arrowColor:"",autoClose:true,content:null,contentAsHTML:false,contentCloning:true,debug:true,delay:200,minWidth:0,maxWidth:null,functionInit:function(e,t){},functionBefore:function(e,t){t()},functionReady:function(e,t){},functionAfter:function(e){},hideOnClick:false,icon:"(?)",iconCloning:true,iconDesktop:false,iconTouch:false,iconTheme:"tooltipster-icon",interactive:false,interactiveTolerance:350,multiple:false,offsetX:0,offsetY:0,onlyOne:false,position:"top",positionTracker:false,positionTrackerCallback:function(e){if(this.option("trigger")=="hover"&&this.option("autoClose")){this.hide()}},restoration:"current",speed:350,timer:0,theme:"tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};s.prototype={_init:function(){var t=this;if(n.querySelector){var r=null;if(t.$el.data("tooltipster-initialTitle")===undefined){r=t.$el.attr("title");if(r===undefined)r=null;t.$el.data("tooltipster-initialTitle",r)}if(t.options.content!==null){t._content_set(t.options.content)} else {t._content_set(r)}var i=t.options.functionInit.call(t.$el,t.$el,t.Content);if(typeof i!=="undefined")t._content_set(i);t.$el.removeAttr("title").addClass("tooltipstered");if(!u&&t.options.iconDesktop||u&&t.options.iconTouch){if(typeof t.options.icon==="string"){t.$elProxy=e('<span class="'+t.options.iconTheme+'"></span>');t.$elProxy.text(t.options.icon)} else {if(t.options.iconCloning)t.$elProxy=t.options.icon.clone(true);else t.$elProxy=t.options.icon}t.$elProxy.insertAfter(t.$el)} else {t.$elProxy=t.$el}if(t.options.trigger=="hover"){t.$elProxy.on("mouseenter."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=true;t._show()}}).on("mouseleave."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=false}});if(u&&t.options.touchDevices){t.$elProxy.on("touchstart."+t.namespace,function(){t._showNow()})}}else if(t.options.trigger=="click"){t.$elProxy.on("click."+t.namespace,function(){if(!f()||t.options.touchDevices){t._show()}})}}},_show:function(){var e=this;if(e.Status!="shown"&&e.Status!="appearing"){if(e.options.delay){e.timerShow=setTimeout(function(){if(e.options.trigger=="click"||e.options.trigger=="hover"&&e.mouseIsOverProxy){e._showNow()}},e.options.delay)}else e._showNow()}},_showNow:function(n){var r=this;r.options.functionBefore.call(r.$el,r.$el,function(){if(r.enabled&&r.Content!==null){if(n)r.callbacks.show.push(n);r.callbacks.hide=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;if(r.options.onlyOne){e(".tooltipstered").not(r.$el).each(function(t,n){var r=e(n),i=r.data("tooltipster-ns");e.each(i,function(e,t){var n=r.data(t),i=n.status(),s=n.option("autoClose");if(i!=="hidden"&&i!=="disappearing"&&s){n.hide()}})})}var i=function(){r.Status="shown";e.each(r.callbacks.show,function(e,t){t.call(r.$el)});r.callbacks.show=[]};if(r.Status!=="hidden"){var s=0;if(r.Status==="disappearing"){r.Status="appearing";if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+r.options.animation+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)} else {r.$tooltip.stop().fadeIn(i)}}else if(r.Status==="shown"){i()}} else {r.Status="appearing";var s=r.options.speed;r.bodyOverflowX=e("body").css("overflow-x");e("body").css("overflow-x","hidden");var o="tooltipster-"+r.options.animation,a="-webkit-transition-duration:"+r.options.speed+"ms; -webkit-animation-duration:"+r.options.speed+"ms; -moz-transition-duration:"+r.options.speed+"ms; -moz-animation-duration:"+r.options.speed+"ms; -o-transition-duration:"+r.options.speed+"ms; -o-animation-duration:"+r.options.speed+"ms; -ms-transition-duration:"+r.options.speed+"ms; -ms-animation-duration:"+r.options.speed+"ms; transition-duration:"+r.options.speed+"ms; animation-duration:"+r.options.speed+"ms;",f=r.options.minWidth?"min-width:"+Math.round(r.options.minWidth)+"px;":"",c=r.options.maxWidth?"max-width:"+Math.round(r.options.maxWidth)+"px;":"",h=r.options.interactive?"pointer-events:auto;":"";r.$tooltip=e('<div class="tooltipster-base '+r.options.theme+'" style="'+f+" "+c+" "+h+" "+a+'"><div class="tooltipster-content"></div></div>');if(l())r.$tooltip.addClass(o);r._content_insert();r.$tooltip.appendTo("body");r.reposition();r.options.functionReady.call(r.$el,r.$el,r.$tooltip);if(l()){r.$tooltip.addClass(o+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)} else {r.$tooltip.css("display","none").fadeIn(r.options.speed,i)}r._interval_set();e(t).on("scroll."+r.namespace+" resize."+r.namespace,function(){r.reposition()});if(r.options.autoClose){e("body").off("."+r.namespace);if(r.options.trigger=="hover"){if(u){setTimeout(function(){e("body").on("touchstart."+r.namespace,function(){r.hide()})},0)}if(r.options.interactive){if(u){r.$tooltip.on("touchstart."+r.namespace,function(e){e.stopPropagation()})}var p=null;r.$elProxy.add(r.$tooltip).on("mouseleave."+r.namespace+"-autoClose",function(){clearTimeout(p);p=setTimeout(function(){r.hide()},r.options.interactiveTolerance)}).on("mouseenter."+r.namespace+"-autoClose",function(){clearTimeout(p)})} else {r.$elProxy.on("mouseleave."+r.namespace+"-autoClose",function(){r.hide()})}if(r.options.hideOnClick){r.$elProxy.on("click."+r.namespace+"-autoClose",function(){r.hide()})}}else if(r.options.trigger=="click"){setTimeout(function(){e("body").on("click."+r.namespace+" touchstart."+r.namespace,function(){r.hide()})},0);if(r.options.interactive){r.$tooltip.on("click."+r.namespace+" touchstart."+r.namespace,function(e){e.stopPropagation()})}}}}if(r.options.timer>0){r.timerHide=setTimeout(function(){r.timerHide=null;r.hide()},r.options.timer+s)}}})},_interval_set:function(){var t=this;t.checkInterval=setInterval(function(){if(e("body").find(t.$el).length===0||e("body").find(t.$elProxy).length===0||t.Status=="hidden"||e("body").find(t.$tooltip).length===0){if(t.Status=="shown"||t.Status=="appearing")t.hide();t._interval_cancel()} else {if(t.options.positionTracker){var n=t._repositionInfo(t.$elProxy),r=false;if(o(n.dimension,t.elProxyPosition.dimension)){if(t.$elProxy.css("position")==="fixed"){if(o(n.position,t.elProxyPosition.position))r=true} else {if(o(n.offset,t.elProxyPosition.offset))r=true}}if(!r){t.reposition();t.options.positionTrackerCallback.call(t,t.$el)}}}},200)},_interval_cancel:function(){clearInterval(this.checkInterval);this.checkInterval=null},_content_set:function(e){if(typeof e==="object"&&e!==null&&this.options.contentCloning){e=e.clone(true)}this.Content=e},_content_insert:function(){var e=this,t=this.$tooltip.find(".tooltipster-content");if(typeof e.Content==="string"&&!e.options.contentAsHTML){t.text(e.Content)} else {t.empty().append(e.Content)}},_update:function(e){var t=this;t._content_set(e);if(t.Content!==null){if(t.Status!=="hidden"){t._content_insert();t.reposition();if(t.options.updateAnimation){if(l()){t.$tooltip.css({width:"","-webkit-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!="hidden"){t.$tooltip.removeClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!=="hidden"){t.$tooltip.css({"-webkit-transition":t.options.speed+"ms","-moz-transition":t.options.speed+"ms","-o-transition":t.options.speed+"ms","-ms-transition":t.options.speed+"ms",transition:t.options.speed+"ms"})}},t.options.speed)}},t.options.speed)} else {t.$tooltip.fadeTo(t.options.speed,.5,function(){if(t.Status!="hidden"){t.$tooltip.fadeTo(t.options.speed,1)}})}}}} else {t.hide()}},_repositionInfo:function(e){return{dimension:{height:e.outerHeight(false),width:e.outerWidth(false)},offset:e.offset(),position:{left:parseInt(e.css("left")),top:parseInt(e.css("top"))}}},hide:function(n){var r=this;if(n)r.callbacks.hide.push(n);r.callbacks.show=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;var i=function(){e.each(r.callbacks.hide,function(e,t){t.call(r.$el)});r.callbacks.hide=[]};if(r.Status=="shown"||r.Status=="appearing"){r.Status="disappearing";var s=function(){r.Status="hidden";if(typeof r.Content=="object"&&r.Content!==null){r.Content.detach()}r.$tooltip.remove();r.$tooltip=null;e(t).off("."+r.namespace);e("body").off("."+r.namespace).css("overflow-x",r.bodyOverflowX);e("body").off("."+r.namespace);r.$elProxy.off("."+r.namespace+"-autoClose");r.options.functionAfter.call(r.$el,r.$el);i()};if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-"+r.options.animation+"-show").addClass("tooltipster-dying");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(s)} else {r.$tooltip.stop().fadeOut(r.options.speed,s)}}else if(r.Status=="hidden"){i()}return r},show:function(e){this._showNow(e);return this},update:function(e){return this.content(e)},content:function(e){if(typeof e==="undefined"){return this.Content} else {this._update(e);return this}},reposition:function(){var n=this;if(e("body").find(n.$tooltip).length!==0){n.$tooltip.css("width","");n.elProxyPosition=n._repositionInfo(n.$elProxy);var r=null,i=e(t).width(),s=n.elProxyPosition,o=n.$tooltip.outerWidth(false),u=n.$tooltip.innerWidth()+1,a=n.$tooltip.outerHeight(false);if(n.$elProxy.is("area")){var f=n.$elProxy.attr("shape"),l=n.$elProxy.parent().attr("name"),c=e('img[usemap="#'+l+'"]'),h=c.offset().left,p=c.offset().top,d=n.$elProxy.attr("coords")!==undefined?n.$elProxy.attr("coords").split(","):undefined;if(f=="circle"){var v=parseInt(d[0]),m=parseInt(d[1]),g=parseInt(d[2]);s.dimension.height=g*2;s.dimension.width=g*2;s.offset.top=p+m-g;s.offset.left=h+v-g}else if(f=="rect"){var v=parseInt(d[0]),m=parseInt(d[1]),y=parseInt(d[2]),b=parseInt(d[3]);s.dimension.height=b-m;s.dimension.width=y-v;s.offset.top=p+m;s.offset.left=h+v}else if(f=="poly"){var w=[],E=[],S=0,x=0,T=0,N=0,C="even";for(var k=0;k<d.length;k++){var L=parseInt(d[k]);if(C=="even"){if(L>T){T=L;if(k===0){S=T}}if(L<S){S=L}C="odd"} else {if(L>N){N=L;if(k==1){x=N}}if(L<x){x=L}C="even"}}s.dimension.height=N-x;s.dimension.width=T-S;s.offset.top=p+x;s.offset.left=h+S} else {s.dimension.height=c.outerHeight(false);s.dimension.width=c.outerWidth(false);s.offset.top=p;s.offset.left=h}}var A=0,O=0,M=0,_=parseInt(n.options.offsetY),D=parseInt(n.options.offsetX),P=n.options.position;function H(){var n=e(t).scrollLeft();if(A-n<0){r=A-n;A=n}if(A+o-n>i){r=A-(i+n-o);A=i+n-o}}function B(n,r){if(s.offset.top-e(t).scrollTop()-a-_-12<0&&r.indexOf("top")>-1){P=n}if(s.offset.top+s.dimension.height+a+12+_>e(t).scrollTop()+e(t).height()&&r.indexOf("bottom")>-1){P=n;M=s.offset.top-a-_-12}}if(P=="top"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left+D-j/2;M=s.offset.top-a-_-12;H();B("bottom","top")}if(P=="top-left"){A=s.offset.left+D;M=s.offset.top-a-_-12;H();B("bottom-left","top-left")}if(P=="top-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top-a-_-12;H();B("bottom-right","top-right")}if(P=="bottom"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left-j/2+D;M=s.offset.top+s.dimension.height+_+12;H();B("top","bottom")}if(P=="bottom-left"){A=s.offset.left+D;M=s.offset.top+s.dimension.height+_+12;H();B("top-left","bottom-left")}if(P=="bottom-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top+s.dimension.height+_+12;H();B("top-right","bottom-right")}if(P=="left"){A=s.offset.left-D-o-12;O=s.offset.left+D+s.dimension.width+12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A<0&&O+o>i){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=o+A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);A=s.offset.left-D-q-12-I;F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A<0){A=s.offset.left+D+s.dimension.width+12;r="left"}}if(P=="right"){A=s.offset.left+D+s.dimension.width+12;O=s.offset.left-D-o-12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A+o>i&&O<0){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=i-A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A+o>i){A=s.offset.left-D-o-12;r="right"}}if(n.options.arrow){var R="tooltipster-arrow-"+P;if(n.options.arrowColor.length<1){var U=n.$tooltip.css("background-color")} else {var U=n.options.arrowColor}if(!r){r=""}else if(r=="left"){R="tooltipster-arrow-right";r=""}else if(r=="right"){R="tooltipster-arrow-left";r=""} else {r="left:"+Math.round(r)+"px;"}if(P=="top"||P=="top-left"||P=="top-right"){var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}else if(P=="bottom"||P=="bottom-left"||P=="bottom-right"){var z=parseFloat(n.$tooltip.css("border-top-width")),W=n.$tooltip.css("border-top-color")}else if(P=="left"){var z=parseFloat(n.$tooltip.css("border-right-width")),W=n.$tooltip.css("border-right-color")}else if(P=="right"){var z=parseFloat(n.$tooltip.css("border-left-width")),W=n.$tooltip.css("border-left-color")} else {var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}if(z>1){z++}var X="";if(z!==0){var V="",J="border-color:"+W+";";if(R.indexOf("bottom")!==-1){V="margin-top:-"+Math.round(z)+"px;"}else if(R.indexOf("top")!==-1){V="margin-bottom:-"+Math.round(z)+"px;"}else if(R.indexOf("left")!==-1){V="margin-right:-"+Math.round(z)+"px;"}else if(R.indexOf("right")!==-1){V="margin-left:-"+Math.round(z)+"px;"}X='<span class="tooltipster-arrow-border" style="'+V+" "+J+';"></span>'}n.$tooltip.find(".tooltipster-arrow").remove();var K='<div class="'+R+' tooltipster-arrow" style="'+r+'">'+X+'<span style="border-color:'+U+';"></span></div>';n.$tooltip.append(K)}n.$tooltip.css({top:Math.round(M)+"px",left:Math.round(A)+"px"})}return n},enable:function(){this.enabled=true;return this},disable:function(){this.hide();this.enabled=false;return this},destroy:function(){var t=this;t.hide();if(t.$el[0]!==t.$elProxy[0]){t.$elProxy.remove()}t.$el.removeData(t.namespace).off("."+t.namespace);var n=t.$el.data("tooltipster-ns");if(n.length===1){var r=null;if(t.options.restoration==="previous"){r=t.$el.data("tooltipster-initialTitle")}else if(t.options.restoration==="current"){r=typeof t.Content==="string"?t.Content:e("<div></div>").append(t.Content).html()}if(r){t.$el.attr("title",r)}t.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")} else {n=e.grep(n,function(e,n){return e!==t.namespace});t.$el.data("tooltipster-ns",n)}return t},elementIcon:function(){return this.$el[0]!==this.$elProxy[0]?this.$elProxy[0]:undefined},elementTooltip:function(){return this.$tooltip?this.$tooltip[0]:undefined},option:function(e,t){if(typeof t=="undefined")return this.options[e];else{this.options[e]=t;return this}},status:function(){return this.Status}};e.fn[r]=function(){var t=arguments;if(this.length===0){if(typeof t[0]==="string"){var n=true;switch(t[0]){case"setDefaults":e.extend(i,t[1]);break;default:n=false;break}if(n)return true;else return this} else {return this}} else {if(typeof t[0]==="string"){var r="#*$~&";this.each(function(){var n=e(this).data("tooltipster-ns"),i=n?e(this).data(n[0]):null;if(i){if(typeof i[t[0]]==="function"){var s=i[t[0]](t[1],t[2])} else {throw new Error('Unknown method .tooltipster("'+t[0]+'")')}if(s!==i){r=s;return false}} else {throw new Error("You called Tooltipster's \""+t[0]+'" method on an uninitialized element')}});return r!=="#*$~&"?r:this} else {var o=[],u=t[0]&&typeof t[0].multiple!=="undefined",a=u&&t[0].multiple||!u&&i.multiple,f=t[0]&&typeof t[0].debug!=="undefined",l=f&&t[0].debug||!f&&i.debug;this.each(function(){var n=false,r=e(this).data("tooltipster-ns"),i=null;if(!r){n=true}else if(a){n=true}else if(l){console.log('Tooltipster:one or more tooltips are already attached to this element:ignoring. Use the "multiple" option to attach more tooltips.')}if(n){i=new s(this,t[0]);if(!r)r=[];r.push(i.namespace);e(this).data("tooltipster-ns",r);e(this).data(i.namespace,i)}o.push(i)});if(a)return o;else return this}}};var u=!!("ontouchstart"in t);var a=false;e("body").one("mousemove",function(){a=true})})(jQuery,window,document);
			onload(jQuery);
		}
	}

    const PID_STR = "__PID__";
    const OPTION_SELECTORS = [
        "select[id|='product-select-"+ PID_STR +"-option']",
        "select[id|='product-select-option']",
        "select[id|='productSelect-option']",
        "select[id|='ProductSelect-option']",
        "select[id|='ProductSelect']",
        "input[id|='ProductSelect-option']",
        "select[id|='product-variants-option']",
        "select[id|='sca-qv-product-selected-option']",
        "select[id|='product-variants-"+ PID_STR +"-option']",
        "select[id|='variant-listbox-option']",
        "select[id|='product-selectors-option']",
        "select[id|='product-select-"+ PID_STR +"product-option']",
        "select[id|='id-option']",
        "select[id|='SingleOptionSelector']",
        "select[id|='single-option-"+ PID_STR + "']",
        "select[id|='productSelect-product-template-option']",
        "select[id|='product-select-"+ PID_STR +"']",
        "select[id|='ProductSelect-product-template-option']",
        "select[id^='ProductSelect-product-template']"];

    var appHelper = {getUrlParam: function(paramName) {
            var params = {};
            window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str,key,value) {
                params[key] = value;
            });
            return params[paramName];
        }}

	reqJquery(function($){

	const attributeToString=(r="")=>$.trim(r+"");

	if(typeof(BaPoShopify)===undefined) BaPoShopify={};

	const _mix=(from,to)=>{
		for(let i in from) to[i]=from[i];
	}

	_mix({
		money_format:"${{amount}}",
		onError:(XMLHttpRequest,textStatus)=>{
			let data=eval("("+XMLHttpRequest.responseText+")");
			alert(data.message ? data.message+"("+data.status+"):"+data.description :"Error :"+BaPoShopify.fullMsgsFromErrors(data).join("; ")+".");
		},

		fullMsgsFromErrors:data=>{
			let r=[];
			for(let i in data) for(let j in data[i]) r.push(i+" "+data[i][j]);
			return r;
		},

		onCartRevise:r=>alert("There are now "+r.item_count+" items in the cart."),
		onItemAdded:r=>alert(r.title+" was added to your shopping cart."),
		onProduct:r=>alert("Received everything we ever wanted to know about "+r.title),

		formatMoney:(r,t)=>{
			function e(a,b){
				return typeof(a)==="undefined"?b:a;
			}

			function o(r, t, o, n){
				if(isNaN(r)||(r==null)) return 0;
				let a=(r/100).toFixed(e(t,2)).split(".");
				return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+e(o,","))+(a[1]?(e(n,".")+a[1]):"");
			}

			"string"==typeof r && (r=r.replace(".", ""));
			let n="",
					a=/\{\{\s*(\w+)\s*\}\}/,
					u=t || this.money_format;
			switch (u.match(a)[1]){
				case "amount":
					n=o(r, 2);
				break;
				case "amount_no_decimals":
					n=o(r, 0);
				break;
				case "amount_with_comma_separator":
					n=o(r, 2, ".", ",");
				break;
				case "amount_no_decimals_with_comma_separator":
					n=o(r, 0, ".", ",");
				break;
			}
			return u.replace(a, n);
		},

		getUrl:url=>(BaPoShopify.url_prefix||"")+url,
		resizeImage:(r,t)=>{
			if(t==="original") return r;
			try {
				let e=r.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);
				return e[1]+"_"+t+"."+e[2];
			} catch (o){
				return r;
			}
		},

		addItem:(id,q=1,clb=BaPoShopify.onItemAdded)=>$.ajax({
			type:"POST",
			url:BaPoShopify.getUrl("/cart/add.js"),
			data:"quantity="+q+"&id="+id,
			dataType:"json",
			success:clb,
			error:BaPoShopify.onError
		}),

		addItemFromForm:(id,clb=BaPoShopify.onItemAdded)=>$.ajax({
			type:"POST",
			url:BaPoShopify.getUrl("/cart/add.js"),
			data:$("#"+id).serialize(),
			dataType:"json",
			success:clb,
			error:BaPoShopify.onError
		}),

		getCart:(clb=BaPoShopify.onCartRevise)=>$.getJSON(BaPoShopify.getUrl("/cart.js"),clb),

		getProduct:(pr,clb=BaPoShopify.onProduct)=>$.getJSON(BaPoShopify.getUrl("/products/"+pr+".js"), clb),

		changeItem:(id,q,clb=BaPoShopify.onCartUpdat)=>$.ajax({
			type:"POST",
			url:BaPoShopify.getUrl("/cart/change.js"),
			data:"quantity="+q+"&id="+id,
			dataType:"json",
			success:clb,
			error:BaPoShopify.onError
		}),

		removeItem:(id, clb=BaPoShopify.onCartRevise)=>$.ajax({
			type:"POST",
			url:BaPoShopify.getUrl("/cart/change.js"),
			data:"quantity=0&id="+id,
			dataType:"json",
			success:clb,
			error:BaPoShopify.onError
		}),

		clear:(clb=BaPoShopify.onCartRevise)=>$.ajax({
			type:"POST",
			url:BaPoShopify.getUrl("/cart/clear.js"),
			data:"",
			dataType:"json",
			success:clb,
			error:BaPoShopify.onError
		}),

		reviseCartFromForm:(id,clb=BaPoShopify.onCartRevise)=>$.ajax({
			type:"POST",
			url:BaPoShopify.getUrl("/cart/update.js"),
			data:$("#"+id).serialize(),
			dataType:"json",
			success:clb,
			error:BaPoShopify.onError
		}),

		reviseCartAttributes:(r,clb=BaPoShopify.onCartRevise)=>{
			let data="";
			if($.isArray(r)){
				r.forEach(function(v){
					let a=attributeToString(v.key);
					if(a) data+="attributes["+a+"]="+attributeToString(v.value)+"&";
				});
			} else if((typeof(r)==="object")&&(r!==null)) for(let i in r){
				data+="attributes["+attributeToString(i)+"]="+attributeToString(r[i])+"&";
			}
			$.ajax({
				type:"POST",
				url:BaPoShopify.getUrl("/cart/update.js"),
				data:data,
				dataType:"json",
				success:clb,
				error:BaPoShopify.onError
			});
		},

		reviseCartNote:(attr,clb=BaPoShopify.onCartRevise)=>jQuery.ajax({
			type:"POST",
			url:BaPoShopify.getUrl("/cart/update.js"),
			data:"note="+attributeToString(attr),
			dataType:"json",
			success:clb,
			error:BaPoShopify.onError
		})
	},BaPoShopify);

	if($.fn.jquery >="1.4"){
		BaPoShopify.param=$.param
	} else {
		_mix({
			param:r=>{
				let t=[];
				let e=function(r, e){
					e=$.isFunction(e)?e():e;
					t.push(encodeURIComponent(r)+"="+encodeURIComponent(e));
				};
				if($.isArray(r) || r.jquery){
					$.each(r, function(){
						e(this.name, this.value);
					});
				} else {
					for (let o in r) BaPoShopify.buildParams(o, r[o], e);
				}
				return t.join("&").replace(/%20/g, "+")
			},

			buildParams:(r,t,e)=>{
				if($.isArray(t) && t.length){
					$.each(t, function(t, o){
						rbracket.test(r) ? e(r, o) :BaPoShopify.buildParams(r+"["+("object"==typeof o || $.isArray(o) ? t :"")+"]", o, e)
					});
				} else if((typeof(t)==='object')&&(t!=null)){
					if(BaPoShopify.isEmptyObject(t)){
						e(r, "")
					} else {
						$.each(t, function(t, o){
							BaPoShopify.buildParams(r+"["+t+"]", o, e)
						});
					}
				} else e(r, t);
			},

			isEmptyObject:(r)=>{
				for (let t in r) return false;
				return true;
			}
		},BaPoShopify);
	}

  // BoosterPoParams - liquid lets, BaPreConfig - specific product options
	let app={
		config:{}
	};

	app.init=function($){
		$('body').append('<img src="//cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/AjaxLoader.gif" id="poLoader" style="display:none; position:fixed; top:50%; left:50%; z-index:100;">');
    app.run($);
	}

	window.BaPreConfig={
    "button_title":"Pre-VENTA!",
		"button_description":"SERÁN DESPACHADOS DENTRO DE LA SEMANA!",
		"button_description_type":"tooltip",
		"button_description_position":"top",
    
      "addtocart_selector":"form[action=\"\/cart\/add\"] [type=submit]",
    
		"limit_qty":"",
		"limit_msg":"Solo <50> unidades disponibles.",
		"na_msg":"Pre-order is not available for the product",
		"out_of_stock_msg":"Inventory level is <qty>. Some of the items will be pre-ordered. Ok?",
		"preorder_hide_button":0,
		"fast_load":0,
		"preorder_collection_enabled":0,
		"line_property_name":"Pre-ordered items",
		"order_tag":"pre-order-hero",
    "products":{"314735886366":{"shop_product_id":"314735886366","pre_order_status":"1","prod_qty_limit":"","pre_order_button_text":"","pre_order_button_note":"","button_description_position":"bottom-right"},"787329843291":{"shop_product_id":"787329843291","pre_order_status":"2"}},
    "auto_pre_order":'1'
	}

  window.BaCustom = {};

		_mix({
			revert:$=>{if(BoosterPoParams.hideAddToCartBtn===true && BoosterPoParams.addToCartBtnSelector !==undefined) $(BoosterPoParams.addToCartBtnSelector).first().show()},
			getPageType:()=>{
				let url=window.location.toString();
				if(url.match(/\/products\//) !==null || url.match(/\/products_preview/) !==null){
					return 'product';
				} else if(url.match(/\/cart/) !==null){
					return 'cart';
				} else if(url.match(/\/collections\//) !==null){
					return 'collection';
				} else {
					return '';
				}
			},
			alert:msg=>{
				app.spinner();
				alert(msg);
			},
			spinner:()=>{
				if(!app.spinnerImage) app.spinnerImage=document.getElementById('poLoader');
				app.spinnerImage.style.display=app.spinnerImage.style.display=='block'?'none':'block';
			},
			confirm:(msg, callbackYes, callbackNo)=>{
				let answer=confirm(msg);
				if(answer){
					callbackYes();
				} else if(callbackNo !==undefined){
					callbackNo();
				}
			},
			reload:window.location.reload,
			isIosAgent:()=>{
				let userAgent=navigator.userAgent || navigator.vendor || window.opera;
				return ( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
			},
			isMobileDevice:()=>( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ),
			goToCart:()=> window.location.href=(typeof(BaCustom) !=='undefined' && typeof(BaCustom.urlPrefix) !=='undefined') ? BaCustom.urlPrefix+'/cart':'/cart',
			goToCheckout:(discount)=>{
				if(typeof SAWCheckout=="function"){
					SAWCheckout();
				} else {
					window.location.href='/checkout'+(discount.length?('?discount='+discount):'');
				}
			}
		},app);

		app.run=function($){
			let Settings=(function(saveSettings){
				let config=saveSettings;
				let prefixable=['quantity_selector','variant_selector','addtocart_selector','preorder_selector','product_form_selector'];
				let mappedKeys={pre_order_button_note:"button_description",pre_order_button_text:"button_title"};
				let self={
					init:function(){
            config.preorder_selector='#ba-pre-order';
						config.selector_prefix=this.hasCustom('selectorPrefix') ? this.getCustom('selectorPrefix') :'';
						config.cart_form_selector=this.hasCustom('cartFormSelector') ? this.getCustom('cartFormSelector') :"form[action*='cart'], form[action*='checkout']"
            config.quantity_selector=this.hasCustom('quantityInput') ? this.getCustom('quantityInput') :'input[name=quantity]';
						config.product_form_selector='form[action^="/cart/add"]';
						config.variant_selector=this.hasCustom('variantInput') ? this.getCustom('variantInput') :'[name=id]';
					},
					get:function(key, sub){
						if(key && sub) return config[sub][key];
						if(mappedKeys.hasOwnProperty(key)) return config[mappedKeys[key]];
						return config[key];
					},
					setValue:function(key, value){
						let conf=config;
						let keys=[];
						if(key.indexOf('.') !==-1) keys=key.split('.');
						if(keys.length){
							keys.forEach(function(elem){
								if(!conf[elem]) conf[elem]={};
								conf=conf[elem];
							});
							conf[keys[keys.length-1]]=value;
						} else {
							config[key]=value;
						}
					},
					getSelector:function(key, addGlobalPrefix){
						addGlobalPrefix=addGlobalPrefix || true;
						if(addGlobalPrefix && config.selector_prefix && prefixable.indexOf(key) !==-1){
							return config.selector_prefix+config[key];
						} else {
							return config[key];
						}
					},
					getCartQtySelector:function(id){
						let selector=Settings.hasCustom('cartQtySelector') ? Settings.getCustom('cartQtySelector') :"[id^='updates_:id' i]";
						selector=(selector.indexOf(':id') !==-1) ? selector.replace(':id',id) :selector;
						return config.selector_prefix ? config.selector_prefix+selector :selector;
					},
					getLinePropertyName:function(){ return Settings.get('line_property_name') ? Settings.get('line_property_name') :'Pre-ordered items' },
          fetchProductVal:function(pid, key){
						if(config.products.hasOwnProperty(pid)){
							return config.products[pid][key];
						} else {
							return undefined;
						}
					},
					fetchVariantVal:function(pid,vid,key){
						let variantsData=Settings.fetchProductVal(pid, 'variants');
						if(typeof variantsData==='string' && variantsData.length){
							variantsData=JSON.parse(variantsData);
							Settings.setValue('products.'+pid+'.variants',variantsData);
						}
						if(variantsData && typeof variantsData[vid] !=='undefined' && typeof variantsData[vid][key] !=='undefined'){
							return variantsData[vid][key];
						} else {
							return null;
						}
					},
					getProductOrGlobalValue:function(pid, key){
						let value=Settings.fetchProductVal(pid, key);
						return value ? value :Settings.get(key);
					},
					getTopLevelVal:function(pid, vid, key){
						let val=Settings.fetchVariantVal(pid, vid, key);
						if(val) return val;
						return Settings.getProductOrGlobalValue(pid,key);
					},
					getPreOrderLimit:function(pid,vid){
						vid=vid || 0;
						let limit=Settings.fetchVariantVal(pid,vid,'set_limit');
						if(!limit){
							if(Settings.fetchProductVal(pid,'prod_qty_limit')!=0){
								limit=Settings.fetchProductVal(pid,'prod_qty_limit')
							} else if(Settings.get('limit_qty')!=0){
								limit=Settings.get('limit_qty');
							}
						}
						if(limit) return parseInt(limit);
						return 999999;
					},
					isStopSelling:function(pid){
						let p=Settings.fetchProductVal(pid,'pre_order_status');
						return (p==2 || ((Settings.get('auto_pre_order')==2) && (p==0 || p==undefined) ));
					},
          isGeneralStopSelling: function()
          {
            return Settings.get('auto_pre_order') == '0';
          },
          isPOActiveGeneral()
          {
              return Settings.get('auto_pre_order') != '2';
          },
					isPOActive:function(pid){
						let productFlag=Settings.fetchProductVal(pid,'pre_order_status');
						let globalFlag=Settings.get('auto_pre_order');
						globalFlag=(globalFlag==1);
						if(productFlag===undefined) return globalFlag;
						if(productFlag==-1) return false;
						if(productFlag==1) return true;
						return globalFlag;
					},
					isPOViable:function(pid,vid, qty){
						if(!Settings.isPreOrderStarted(pid,vid)) return false;
						if(!Settings.isPOActive(pid)) return false;
						if(qty < 0){
							qty=Math.abs(qty);
							if(Settings.getPreOrderLimit(pid,vid) < qty) return false;
						}
						return true;
					},
					isPreOrderStarted:function(pid,vid){
						let getTime=function(date){
							return (date.getTime()+date.getTimezoneOffset() * 60 * 1000);
						};
						let now=new Date();
						let startDate=Settings.getTopLevelVal(pid,vid,'po_started_at');

						if(startDate){
							startDate=new Date(startDate);
							if(now.getTime() < getTime(startDate)) return false;
						}
						let endDate=Settings.getTopLevelVal(pid,vid,'po_finished_at');
						if(endDate){
							endDate=new Date(endDate);
							if(now.getTime() > getTime(endDate)) return false;
						}
						return true;
					},
					getOptionsSelector:function(pid,addGlobalPrefix){
						addGlobalPrefix=addGlobalPrefix || true;
            let selector= OPTION_SELECTORS.join(',').replace(new RegExp(PID_STR, 'g'), pid);
						if(addGlobalPrefix && config.selector_prefix){
							selector.replace(new RegExp(',', 'g'), ', '+config.selector_prefix);
							selector=config.selector_prefix+selector;
						}
						if(Settings.hasCustom('customVariantSelectors')){
							let customSelector=Settings.getCustom('customVariantSelectors');
							if(typeof customSelector==='string' && customSelector.length > 3){
								selector=customSelector;
							}
						}
						return selector;
					},
					getPreOrderConfirmMsg:function(stock){
						return Settings.get('out_of_stock_msg').replace(':stock',stock);
					},
					getMaxLimitMsg:function(variant){
						let pid=variant.getProductId();
						let vid=variant.getId();
						let stock=parseInt(variant.fetchInvQty());
						let limit=Settings.getPreOrderLimit(pid,vid);
						if(Settings.isPreOrderStarted(pid,vid) && Settings.isPOActive(pid) && limit){
							let diff=stock+parseInt(limit);
							let msg=Settings.get('limit_msg');
              if(msg !==undefined) return diff > 0 ? msg.replace('<qty>',diff) : msg.replace('<qty>',0);
						}
						return Settings.get('na_msg');
					},
					isRAInstalled:function(){
						return false;
					},
					hasCustom:function(key){
						return (typeof(BaCustom) !=='undefined' && typeof(BaCustom[key]) !=='undefined' );
					},
					getCustom:function(key){
						return (typeof(BaCustom) !=='undefined' && typeof(BaCustom[key]) !=='undefined' ) ? BaCustom[key] :undefined;
					}
				};
				self.init();
				return self;
			})(BaPreConfig);

			class Variant{
				constructor(id, product){
					this._product=product;
					for (let i=0; i < this._product.variants.length; i++){
						if(this._product.variants[i].id==id){
							this._variant=this._product.variants[i];
						}
					}
					if(this._variant===undefined)throw new Error('There is no variant for id:'+id);
				}
				getId(){
					return this._variant.id;
				}
				getProductId(){
					return this._product.id;
				}
        fetchInvQty(){
          return BoosterPoParams.variantHash[this._variant.id].inventory_quantity;
					//return this._variant.inventory_quantity;
				}
				trackingEnabled(){
          return BoosterPoParams.variantHash[this._variant.id].inventory_management !==null
					//return (this._variant.inventory_management !==null);
				}
				isPOActive(){
          var variantMaster   = BoosterPoParams.variantHash[this._variant.id];
          var prod_settings   = this.getProductSettings();
          var variantDisabled = prod_settings.pre_order_status == '2' || prod_settings.variants[this.getId()].pre_order_status == '2'

          return (variantMaster.inventory_policy =='continue' && !variantDisabled &&
                 (this._variant.inventory_management =='shopify' || Settings.get('support_non_shopify_inventory')=='1') &&
                 !isNaN(parseFloat(variantMaster.inventory_quantity)) && parseFloat(variantMaster.inventory_quantity) <= 0);
        }
        isStopSelling()
        {
           var prod_settings =  this.getProductSettings();
           if (prod_settings.pre_order_status == '0' || prod_settings.variants[this.getId()].pre_order_status == '0') return true;
           return false;
        }
        getProductSettings()
        {
           //Will define default pre_order_status equal with -1!
           var default_status = {pre_order_status: '-1'}
           var sett = Settings.get('products')[this.getProductId()]        || default_status;
           sett["variants"] = sett["variants"]                             || {};
           sett["variants"][this.getId()] = sett["variants"][this.getId()] || default_status;
           return sett;
        }
        getPreOrderQty(qty){
					let stock=this.fetchInvQty();
					if(stock<=0){
						return qty;
					} else if(stock < qty){
						return qty - stock;
					} else {
						return 0;
					}
				}
				grabRevisedInvQty(qty){
					let stock=this.fetchInvQty();
					return stock - qty;
				}
				getTitle(){
					return this._product.title+' '+this._variant.title;
				}
			};

				let VariantsFactory=(function(){
					return {
						variants:{},
						addWKey:function(key, variant){
							this.variants[key]=variant;
						},
						add:function(variant){
							this.variants[variant.getId()]=variant;
						},
						getAll:function(){
							return this.variants;
						},
						get:function(key){
							return this.variants[key];
						},
						has:function(key){
							return this.variants.hasOwnProperty(key)
						}
					}
				})();

				class Tooltip{
					constructor(button,params){
						this.visible=false;
						this.offsetY=undefined;
						this.button=button;
						this.params=params;
						if(this.isFixed()){
							this.params.trigger='custom';
							this.params.autoClose=false;
							this.button.tooltipster(this.params);
							this.button.tooltipster('show');
						} else {
							this.button.tooltipster(this.params);
						}
						this.adminIframe=$("#admin_bar_iframe");
						$(window).on('scroll',this.onScroll.bind(this));
					}
					setContent(content){
						content=content || '';
						this.params.content=content;
						this.button.tooltipster('content',content);
						if(!content.length) this.hide();
					}
					isFixed(){
						return (typeof this.params.mode !=='undefined' && this.params.mode !='tooltip')
					}
					getOffsetY(){
						if(this.offsetY===undefined && this.adminIframe.length) this.offsetY=this.adminIframe.width() > 50 ?  this.adminIframe.height() :0;
						return this.offsetY;
					}
					setOffsetY(offsetY){
						if(this.params.mode=='bottom') offsetY=-offsetY;
						this.button.tooltipster('option','offsetY',offsetY);
					}
					show(){
						this.visible=true;
						if(this.isFixed() && this.params.content.length) this.button.tooltipster('show');
					}
					hide(){
						this.visible=false;
						if(this.isFixed()) this.button.tooltipster('hide');
					}
					destroy(){
						if(this.isFixed()) this.button.tooltipster('destroy');
						$(window).off('scroll',this.onScroll.bind(this));
					}
					onScroll(){
						try{
							if(this.visible) this.setOffsetY(this.getOffsetY());
						}catch(e){}
					}
				}

				class PreOrderBtn{
					constructor(addToCart,params,onClick){
						this.tooltip=undefined;
						this.params=params;
						this.ba_btn=undefined;
						this.ba_add_btn=addToCart;
						this._onClick=onClick;
					}
					initTooltip(button,variant){
						let tooltip;
						if(this.variantHasTooltip(variant)){
							tooltip=new Tooltip(button,{
								content:this.getDesc(variant),
								position:Settings.get('button_description_position'),
								maxWidth:350,
								mode:Settings.get('button_description_type'),
								offsetY:(typeof this.params.offsetY !=='undefined') ?  this.params.offset :0
							});
							tooltip.show();
						}
						return tooltip;
					}
					getDesc(variant){
						return Settings.getTopLevelVal(variant.getProductId(),variant.getId(),'pre_order_button_note');
					}
					getTitle(variant){
						return Settings.getTopLevelVal(variant.getProductId(),variant.getId(),'pre_order_button_text');
					}
					variantHasTooltip(variant){
						if(typeof this.params.tooltip==='undefined' || this.params.tooltip){
							let desc=this.getDesc(variant);
							if(desc && desc.length) return true;
						}
						return false;
					}
					hasTooltip(){
						return this.tooltip !==undefined;
					}
					init(ba_add_btn, variant){
						let ba_btn=ba_add_btn.parent().find('#ba-pre-order').first();
						if(!ba_btn.length){
							ba_btn=$('<input type="submit" id="ba-pre-order" value="'+this.getTitle(variant)+'"/>');
							ba_add_btn.after(ba_btn);
						}
						ba_btn.show();
						ba_btn.on('click',this._onClick);
						return ba_btn;
					}
					show(variant){
						if(this.ba_btn===undefined){
							this.ba_btn=this.init(this.ba_add_btn,variant);
							this.tooltip=this.initTooltip(this.ba_btn,variant);
						} else {
							this.ba_btn.val(this.getTitle(variant));
							this.ba_btn.show();
							if(this.hasTooltip()){
								this.tooltip.setContent(this.getDesc(variant));
								this.tooltip.show();
							} else {
								this.tooltip=this.initTooltip(this.ba_btn,variant);
							}
						}
					}
					hide(){
						if(this.ba_btn == undefined) return;
						if(this.hasTooltip()) this.tooltip.hide();
						this.ba_btn.hide();
					}
					destroy(){
						if(this.ba_btn == undefined) return;
						if(this.hasTooltip()){
							this.tooltip.destroy();
							this.tooltip=undefined;
						}
						this.ba_btn.remove();
					}
				}

				let Cart=(function(){
					let urlPrefix='';
					if(Settings.hasCustom('urlPrefix')){
						urlPrefix=Settings.getCustom('urlPrefix');
						BaPoShopify.url_prefix=urlPrefix;
					}
					return {
						getProducts:(items, callback)=>{
							let products={};
							let uniqProdAmount=0;
							let askedProducts=0;
							let count=items.length;
							if(items==undefined || !count) return false;
							for(let i in items){
								let item=items[i];
								if(!products.hasOwnProperty(item.product_id)){
									uniqProdAmount++;
									products[item.product_id]={id:item.product_id, variantId:item.id, handle:item.handle };
								}
							}
							for(let j in products){
								let product=products[j];
								BaPoShopify.getProduct(product.handle, function(data){
									askedProducts++;
									products[data.id]=data;
									if(askedProducts==uniqProdAmount) callback(products);
								});
							}
						},
						post:(url,data,clb=function(){})=>$.ajax({
							type:'POST',
							url:url,
							cache:false,
							dataType:'json',
							data:data
						}).done(clb),
						addItem:(id,qty,properties,clb=function(){})=>Cart.post(urlPrefix+'/cart/add.js',{id:id,quantity:qty,properties:properties},clb),
						addPo:(id, qty, preorder, clb=function(){})=>{
							let itemObj={};
							if(preorder>0) itemObj[Settings.getLinePropertyName()]=preorder;
							Cart.addItem(id,qty,itemObj,clb);
						},
						removeItem:(id, clb=function(){})=>BaPoShopify.removeItem(id,()=>clb(id))
					}
				})();

				class CartPage{
					constructor(pageParams){
						if(!pageParams.items.length) return;
						this._items=pageParams.items;
						this._isWorking=false;
						this.init();
					}
					init(){
						this._items=CartPage.turnPropsToObjs(this._items);
						if(typeof this._items[0].product !=='undefined'){
							let products={};
							this._items.map(item=>products[item.product.id]=item.product);
							this.run(products);
						} else {
							Cart.getProducts(this._items,products=>this.run(products));
						}
					}
					run(products){
						if(!products) throw new Error('Empty products api response');
						this.loadVariants(products);
						this.initBtns();
						this._form=$(Settings.getSelector('cart_form_selector'));
						if(!this._form) throw new Error('Cart form was not detected');
						this._form.on('submit',e=>{
							if(this._isWorking) e.preventDefault();
						});
					}
					static turnPropsToObjs(items){
						items.map((item,i)=>{
							if(typeof item.properties !=='undefined' && Array.isArray(item.properties) && item.properties.length){
								let props={};
								item.properties.map(prop=>props[prop[0]]=prop[1]);
								item.properties=props;
							}
						});
						return items;
					}
					doBtnClick(callbackOk, callbackStop){
						app.spinner();
						let variants=VariantsFactory.getAll();
						let confirmations={};
						let alerts={};
						let revises={};
						if(!variants) return;
						let reviseCartItems=()=>{
							callbackStop();
							if(Settings.hasCustom('trackLineItemProperties')){
								this.reviseCItemsAndProps(revises, callbackOk);
							} else {
								this.reviseCartItems(revises, callbackOk);
							}
						};
						for(let id in variants){
							let variant=variants[id];
							if(Settings.isStopSelling(variant.getProductId()) || !variant.isPOActive()) continue;
							let qty=this.getQty(variant.getId());
							let poQty=variant.getPreOrderQty(qty);
							let currentPreOrderQty=this.getCurrPoQty(variant);
							let newQty=variant.grabRevisedInvQty(qty);
							if(poQty > 0){
								if(Settings.isPOViable(variant.getProductId(),variant.getId(),newQty)){
									if(currentPreOrderQty !=poQty) revises[id]={variant:variant, preOrder:poQty, quantity:qty};
									if(!this.isAPoItem(variant)) confirmations[id]={stock:variant.fetchInvQty(), title:variant.getTitle()};
								} else {
									alerts[id]={msg:variant.getTitle()+':'+Settings.getMaxLimitMsg(variant)};
								}
							} else if(currentPreOrderQty > poQty){
								revises[id]={variant:variant, preOrder:poQty, quantity:qty};
							}
						}
						if(Object.keys(alerts).length){
							callbackStop();
							app.alert(this.getAlertMsg(alerts));
						} else if(Object.keys(confirmations).length){
							app.confirm(this.getConfMsg(confirmations),reviseCartItems,()=>{
								app.spinner();
								callbackStop();
							});
						} else {
							if(Object.keys(revises).length) reviseCartItems();
						}
					}
					isAPoItem(variant){
						return (this.getCurrPoQty(variant) > 0);
					}
					getCurrPoQty(variant){
						let preOrderedQty=0;
						for(let i in this._items){
							let item=this._items[i];
							if(item.variant_id==variant.getId()){
								if(item.properties && item.properties.hasOwnProperty(Settings.getLinePropertyName())){
									preOrderedQty+=parseInt(item.properties[Settings.getLinePropertyName()]);
								}
							}
						}
						return isNaN(preOrderedQty) ? 0 :preOrderedQty;
					}
					getConfMsg(confirmations){
						let msg='';
						for(let i in confirmations){
							let item=confirmations[i];
							let template=Settings.getPreOrderConfirmMsg(item.stock);
							msg+=' '+item.title+':'+template+',';
						}
						msg=msg.slice(0,-1);
						return msg;
					}
					getAlertMsg(alerts){
						let msg='';
						for(let i in alerts){
							let item=alerts[i];
							msg+=' '+item.msg+';';
						}
						msg=msg.slice(0,-1);
						return msg;
					}
					reviseCartItems(revises, callbackOk){
						let revisedItems=0;
						let preOrder;
						let revisesAmount=Object.keys(revises).length;
						this._isWorking=true;
						let variantIds=[];
						for(let varId in revises) variantIds.push(varId);
						let index=0;
						let doItemRevise=()=>{
							let varId=variantIds[index++];
							Cart.removeItem(varId,id=>{
								setTimeout(()=>{
									Cart.addPo(id,revises[id].quantity, revises[id].preOrder,()=>{
										if(++revisedItems==revisesAmount){
											this._isWorking=false;
											callbackOk();
										} else {
											setTimeout(doItemRevise,50);
										}
									});
								},50);
							});
						};
						doItemRevise();
					}
					reviseCItemsAndProps(revises, callbackOk){
						let revisedItems=0;
						let preOrder;
						let revisesAmount=Object.keys(revises).length;
						this.isWorking=true;
						let variantIds=[];
						for(let varId in revises) variantIds.push(varId);
						let index=0;
						let doItemRevise=()=>{
							let varId=variantIds[index++];
							Cart.removeItem(varId,id=>{
								let goToNextLineItem=()=>{
									if(++revisedItems==revisesAmount){
										this.isWorking=false; callbackOk();
									} else {
										setTimeout(doItemRevise,50);
									}
								};
								let newLineItems=this.getRevisedVariantLineItems(id, revises[id].quantity, revises[id].preOrder);
								let newLineItemsAmount=newLineItems.length;
								if(newLineItemsAmount){
									for(let j=0; j < newLineItems.length; j++){
										Cart.addItem(id, newLineItems[j].quantity,newLineItems[j].properties,()=>{
											if(--newLineItemsAmount <=0) goToNextLineItem();
										});
									}
								} else {
									goToNextLineItem();
								}
							});
						};
						doItemRevise();
					};
					getRevisedVariantLineItems(variantId, newQty, newPoQty){
						let propertyName=Settings.getLinePropertyName();
						let reviseLineItemQuantities=(lineItems, qtys)=>{
							let setItemQty=(itemId, qty, poqty)=>{
								lineItems[itemId].quantity=qty;
								if(poqty){
									if(!lineItems[itemId].properties) lineItems[itemId].properties={};
									lineItems[itemId].properties[propertyName]=poqty;
								} else if( lineItems[itemId].properties && lineItems[itemId].properties[propertyName]){
									delete lineItems[itemId].properties[propertyName];
								}
							};
							let poqty=newPoQty;
							for(let i=0; i< qtys.length; i++){
								if(typeof variantLineItems[i] !=="undefined"){
									if(poqty > 0){
										poqty -=qtys[i];
										if(poqty >=0){
											setItemQty(i,qtys[i],qtys[i]);
										} else {
											setItemQty(i,qtys[i], poqty+qtys[i]);
										}
									} else {
										setItemQty(i,qtys[i],0);
									}
								}
							}
							return lineItems;
						};
						let getLineItems=(liquidItems, varId)=>{
							let lineItems=[];
							for(let i in liquidItems){
								let lineItem=liquidItems[i];
								if(lineItem.variant_id==varId) lineItems.push({id:lineItem.id, quantity:lineItem.quantity, properties:lineItem.properties});
							}
							return lineItems;
						};
						let combineLineItemsWithTheSameProperties=(lineItems)=>{
							let combinedLineItems=[];
							let duplicateIndexes=[];
							let isTheSameProperties=(objA, objB)=>{
								if(!objA.properties && !objB.properties) return true;
								if(!objA.properties || !objB.properties) return false;
								if(Object.keys(objB.properties).length >=Object.keys(objA.properties).length && objA.properties.hasOwnProperty(propertyName)){
									let tmp=objA;
									objA=objB;
									objB=tmp;
								}
								for(let key in objA.properties){
									let value=objA.properties[key];
									if((key !=propertyName && objA.properties.hasOwnProperty(key)) && ((!objB.properties.hasOwnProperty(key) || objB.properties[key] !=value))) return false;
								}
								return true;
							};
							for(let j=0; j<lineItems.length; j++){
								if(duplicateIndexes.indexOf(j)===-1){
									for(let k=j+1; k<lineItems.length; k++){
										if(isTheSameProperties(lineItems[j],lineItems[k])){
											duplicateIndexes.push(k);
											lineItems[j].quantity=lineItems[j].quantity+lineItems[k].quantity;
											if(!lineItems[j].properties){
												lineItems[j].properties={};
												lineItems[j].properties[propertyName]=0;
											}
											lineItems[j].properties[propertyName]+=(lineItems[k].properties && lineItems[k].properties[propertyName]) ? parseInt(lineItems[k].properties[propertyName]) :0;
										}
									}
								}
							}
							for(let m=0; m<variantLineItems.length; m++) if(duplicateIndexes.indexOf(m)===-1) combinedLineItems.push(variantLineItems[m]);
							return combinedLineItems;
						};
						let variantLineItems=getLineItems(this._items, variantId);
						let qtys=this.getVariantQtys(variantId);
						variantLineItems=reviseLineItemQuantities(variantLineItems,qtys);
						variantLineItems=combineLineItemsWithTheSameProperties(variantLineItems);
						return variantLineItems;
					}
					checkout(e){
						let button=e.target;
						if(button.name=='goto_pp'){
							let formAction=form.attr("action");
							let action=(formAction.indexOf('?') >=0) ? formAction+"&" :formAction+"?";
							form.attr("action", action+button.name );
							$('<input/>', {name:button.name,type:'hidden'}).appendTo(form);
							form.submit();
						} else if(button.id !==undefined && button.id.indexOf('AmazonPayments') !==-1){
							$('<input/>', {name:'goto_amazon_payments',type:'hidden',value:'amazon_payments'}).appendTo(form);
							form.submit();
						} else {
							let discountField=$('input[name="discount"]').first();
							let discount=discountField.length ? discountField.val() :'';
							app.goToCheckout(discount);
						}
					}
					loadVariants(products){
						for(let i in this._items){
							let item=this._items[i];
							if((typeof item==="object") && !VariantsFactory.has(item.variant_id)) VariantsFactory.add(new Variant(item.variant_id, products[item.product_id]));
						}
					}
					initBtns(){
						let qtyElements;
						setTimeout(()=>{
							qtyElements=$(Settings.getCartQtySelector(''));
							if(!qtyElements.length) throw new Error('Cart quantity selectors were not detected');
							let event='mousedown touchstart';
							let eventCallback=e=>{
								if(e.which < 2){
									this._isWorking=false;
									this.doBtnClick(()=>{
										e.preventDefault();
										this.checkout(e);
									},()=>{
										e.preventDefault();
										this._isWorking=true;
									});
								}
							};
							let selectors='[name=checkout],[name=goto_pp],.amazon-payments-pay-button';
							$('body').on(event,'[data-tiered-pricing-checkout-button]',e=>{
								$('body').off(event,selectors,eventCallback);
								eventCallback(e);
							});
							$(selectors).on(event, eventCallback);
							if(Settings.hasCustom('trackReviseBtn')){
								$('[name="update"]').on(event,e=>{
									if(e.which < 2){
										this.doBtnClick(()=>{
											e.preventDefault();
											app.reload();
										}, ()=>e.preventDefault());
									}
								});
							}
						},500);
					}
					getQty(id){
						let qty=0;
						let qtys=this.getVariantQtys(id);
						for(let i=0; i<qtys.length; i++) qty+=qtys[i];
						return qty;
					}
					getVariantQtys(id){
						let qtys=[];
						let inputs=document.querySelectorAll(Settings.getCartQtySelector(id));
						$(inputs).each(function(){
							qtys.push(Math.abs($(this).val()));
						});
						return qtys;
					}
				};

				class BasePo{
					constructor(product, params={}){
						this._params=params;
						this._product=product;

						this.variant, this.addToCartBtn, this.naMsg, this.poBtn, this.variantSelect, this.quantityInput, this.adminIframe, this.variantUiSelects=undefined;
						this.isAvailable=null;
						if(product.id==undefined) throw new Error('Product object does not exist');
            this.initVariantChange()
					}
					getProductId(){
						return this._product.id;
					};
					init(){
						if(Settings.isStopSelling(this._product.id)){
							this.showRegularBtn();
							return false;
						}
						this.poBtn=new PreOrderBtn(this.addToCartBtn,this._params,e=>{
							if(Settings.hasCustom('trackLineItemProperties')){
								this.doSubmit(e);
							} else {
								this.doPreOrder(e);
							}
						});
						let obj=this;
						this.addToCartBtn.on('mousedown touchstart',function(ev){
							if(ev.which < 2){
								if(Settings.hasCustom('trackLineItemProperties')){
									obj.doSubmit(ev);
								} else {
									$(this).off('click.booster');
									let shouldBeStopped=obj.doAddToCart(ev);
									if((shouldBeStopped===false) && (navigator.userAgent.indexOf("Safari") > -1)){
										$(this).on('click.booster',e=>false);
									}
								}
							}
						});
						this.loadVariants();
						this.variantSelect=$(this.getSelector('variant_selector')).first();
						this.quantityInput=$(this.getSelector('quantity_selector'));
						this.subForVariantRevise();
						this.reviseVariant(true);
					}
					grabVariantSelects(){
						if((this.variantUiSelects===undefined) || !this.variantUiSelects.length) this.variantUiSelects=$(this.getOptionsSelector(this._product.id));
						return this.variantUiSelects;
					}
          loadVariants(){
						for(let i=0; i < this._product.variants.length; i++){
							let item=this._product.variants[i];
							VariantsFactory.addWKey(item.title, new Variant(item.id, this._product));
						}
					}
					subForVariantSelectors(){
						this.grabVariantSelects().on('change',()=>this.reviseVariant());
					}
          initVariantChange(){
            //Just periodically check variant url param and reviseVariant if variant changed.
            var self = this;
            setInterval(()=>{
              if (!self.variant) return;
              let urlId     = appHelper.getUrlParam('variant');
              let currentId = self.variant.getId()
              if (currentId && urlId && currentId != urlId) self.reviseVariant()
            }, 500);
          }
					subForVariantRevise(){
						if(Settings.hasCustom('variantsReviseTimeout')){
							setTimeout(()=>this.subForVariantSelectors(),Settings.getCustom('variantsReviseTimeout'));
						} else if(Settings.hasCustom('manualStart')){
							this.subForVariantSelectors();
						} else {
              $(document).ready(()=> this.subForVariantSelectors());
						}
					}
					showNotAvailableMsg(){
						let message=Settings.getTopLevelVal(this.variant.getProductId(),this.variant.getId(),'po_not_available_message');
						if(message !==undefined && message.length){
							if(this.naMsg !==undefined){
								this.naMsg.html(message);
								this.naMsg.show();
							} else {
								this.naMsg=$('<span class="ba-na-message">'+message+'</span>');
								this.addToCartBtn.after(this.naMsg);
							}
						}
					}
					hideNotAvailableMsg(){
						if(this.naMsg !==undefined){
							this.naMsg.hide();
						}
					}
					showRegularBtn(){
						this.hideNotAvailableMsg();
						if(this.poBtn !==undefined) this.hidePreOrderBtn();
						this.addToCartBtn.removeClass('ba-po-hidden');
						this.addToCartBtn.show();
					};
          hidePreOrderBtn(){
						if(this.poBtn !==undefined) this.poBtn.hide();
					}
					showPreOrderBtn(){
						this.hideNotAvailableMsg();
						this.addToCartBtn.addClass('ba-po-hidden');
						this.poBtn.show(this.variant);
					};
          destroyPreOrderBtn(){
						if(this.poBtn !==undefined) this.poBtn.destroy();
						this.poBtn=undefined;
					}
					hideBtns(){
						if(this.addToCartBtn !=undefined) this.addToCartBtn.addClass('ba-po-hidden');
						this.hidePreOrderBtn();
						this.showNotAvailableMsg();
					}
					reviseBtn(){
						if(this.variant.fetchInvQty() <=0){
							this.isAvailable=this.variant.trackingEnabled() ? false :true;
							var var_qty = this.variant.grabRevisedInvQty(this.getQty());

							if(this.variant.isPOActive() && Settings.isPOActiveGeneral()){

								if(Settings.isPOViable(this._product.id,this.variant.getId(),var_qty) && !Settings.isGeneralStopSelling() && !this.variant.isStopSelling()){
									this.showPreOrderBtn();
								} else {
									this.hideBtns();
								}
							} else {
								this.showRegularBtn();
							}
						} else {
							this.isAvailable=true;
							this.showRegularBtn();
						}
					}
					doPreOrder(ev){
						ev.preventDefault();
						app.spinner();
						let qty=this.getQty();
						let poQty=this.variant.getPreOrderQty(qty);
						let newQty=this.variant.grabRevisedInvQty(qty);
						if(Settings.isPOViable(this._product.id,this.variant.getId(),newQty)){
							Cart.addPo(this.variant.getId(),qty,poQty,()=>{
								if(Settings.isRAInstalled()){
									app.goToCart();
								} else {
									app.goToCart();
								}
							});
						} else {
							app.alert(Settings.getMaxLimitMsg(this.variant));
						}
					}
          doAddToCart(ev){
						app.spinner();
						let qty=this.getQty();
						let newQty=this.variant.grabRevisedInvQty(qty);
						if(newQty < 0 && this.variant.isPOActive()){
							ev.preventDefault();
							let poQty=this.variant.getPreOrderQty(qty);
							if(Settings.isPOViable(this._product.id,this.variant.getId(), newQty)){
								app.confirm(Settings.getPreOrderConfirmMsg(this.variant.fetchInvQty()),()=>{
									Cart.addPo(this.variant.getId(),qty, poQty,()=>app.goToCart());
								},()=>app.spinner());
							} else {
								app.alert(Settings.getMaxLimitMsg(this.variant));
							}
							return false;
						} else {
							app.spinner();
							return true;
						}
					}
					doSubmit(ev){
						app.spinner();
						let qty=this.getQty();
						let newQty=this.variant.grabRevisedInvQty(qty);
						if(newQty < 0 && this.variant.isPOActive()){
							let poQty=this.variant.getPreOrderQty(qty);
							if(Settings.isPOViable(this._product.id,this.variant.getId(), newQty)){
								let propInput=$('input[name="'+Settings.getLinePropertyName()+'"]').first();
								if(!propInput.length){
									propInput=$('<input type="hidden" name="properties['+Settings.getLinePropertyName()+']" value="'+poQty+'"/>');
									this.addToCartBtn.before(propInput);
								} else {
									propInput.val(poQty);
								}
								app.spinner();
							} else {
								ev.preventDefault();
								app.alert(Settings.getMaxLimitMsg(this.variant));
							}
						} else {
							app.spinner();
						}
					}
					grabVariantIdByPK(key){
						let currVariant=VariantsFactory.get(key);
						if(!currVariant) throw new Error('Cant get VID. Check Vselects');
						return currVariant.getId();
					};
					grabCurrVariantId(initial){
                        let id =  appHelper.getUrlParam('variant');
                        if(id) return id;
						let options=[];
						if( !initial && Settings.hasCustom('customVariantSelectors')){
							this.grabVariantSelects().each(function(){
								options.push($(this).val());
							});
							id=this.grabVariantIdByPK(options.join(' / '));
						} else if( !initial && Settings.hasCustom('customVariantRadios') ){
							this.grabVariantSelects().each(function(){
								if($(this).prop('checked')) options.push($(this).val());
							});
							id=this.grabVariantIdByPK(options.join(' / '));
						} else {
							id=this.variantSelect.val();
							if(!id) id=this._product.variants[0].id;
						}
						return id;
					}
					getQty(){
						if(this.quantityInput.length){
							return Math.abs(this.quantityInput.val());
						} else {
							return 1;
						}
					}
					reviseVariant(initial,vid){
						vid=vid || 0;
						initial=(initial && !Settings.hasCustom('emptyInitialVariant')) || false;
						try{
							vid=vid ? vid :this.grabCurrVariantId(initial);
							if(this.variant===undefined || this.variant.getId() !==vid ) this.variant=new Variant(vid, this._product);
							if( this.variant==undefined) throw new Error('Product variant can not be null');
							this.reviseBtn();
						} catch (e){
							this.hideNotAvailableMsg();
							this.hidePreOrderBtn();
						}
					}
					isVariantAvailable(){
						this.reviseVariant();
						return this.isAvailable;
					}
					getSelector(selector){
						return Settings.getSelector(selector);
					};
					getOptionsSelector(productId){
						return Settings.getOptionsSelector(productId);
					}
					run(){
						this.addToCartBtn=$(this.getSelector('addtocart_selector')).first();
						if(this.addToCartBtn.length){
							this.init();
						} else {
							setTimeout(()=>{
								this.addToCartBtn=$(this.getSelector('addtocart_selector')).first();
								if(!this.addToCartBtn.length) throw new Error('Add to cart button was not detected');
								this.init();
							},2000);
						}
					}
				};

				class prodPreOrder extends BasePo{
					constructor(product, params){
						super(product, params);
						this.run();
					}
				};

				class CollectionPreorder extends BasePo{
					constructor(product, params){
						super(product, params);
						params=$.extend({
							tooltip :false,
							quantity :false,
							variants :false,
							selectorPrefix:'.ba-product-'+product.id+' '
						}, params);
						this._params=params;
						if(!this._params.quantity){
							this.getQty=function(){ return 1; };
						}
						if(!this._params.variants){
							this.loadVariants=function(){};
							this.subForVariantRevise=function(){};
							this.grabCurrVariantId=function(){ return product.variants[0].id; };
						} else {
							this.subForVariantRevise=function(){
								this.subForVariantSelectors();
							};
							this.grabVariantIdByPK=function(key){
								let currVariant=VariantsFactory.get(product.id+key);
								if(!currVariant) throw new Error('Cant get VID. Check variant selects');
								return currVariant.getId();
							};
							this.loadVariants=function(){
								for(let i=0; i < product.variants.length; i++){
									let item=product.variants[i];
									VariantsFactory.addWKey(product.id+item.title, new Variant(item.id, product));
								}
							};
							if(this.getOptionsSelector(product.id)==this.getSelector('variant_selector')){
								this.grabCurrVariantId=function(){
									let id=this.variantSelect.val();
									if(!id) id=product.variants[0].id;
									return id;
								}
							}
						}
						this.run();
					}
					getSelector(selector){
						return this._params.selectorPrefix+Settings.getSelector(selector, false);
					}
					getOptionsSelector(productId){
						let selector=Settings.getOptionsSelector(productId, false);
						if(selector.indexOf(',') !==-1){
							selector=selector.replace(new RegExp(',', 'g'), ', '+this._params.selectorPrefix);
						} else {
							selector=this._params.selectorPrefix+selector;
						}
						return selector;
					}
					run(){
						this.addToCartBtn=$(this.getSelector('addtocart_selector')).first();
						if(this.addToCartBtn.length) this.init();
					}
				};

				class QvPo extends BasePo{
					constructor(product, params){
						super(product, params);
						this.run();
					}
					subForVariantRevise(){
						return this.subForVariantSelectors();
					}
				};

				let PreordersFactory=(function(){
					return {
						preorders:{
							product:undefined,
							quickView:undefined,
							collection:{}
						},
						add:function(type, preorder){
							if(type=='quickView'){
								this.preorders.quickView=preorder;
							} else if(type=='collection'){
								this.preorders.collection[preorder.getProductId()]=preorder;
							} else {
								this.preorders.product=preorder;
							}
						},
						get:function(type, productId){
							productId=productId || 0;
							let res=undefined;
							if(typeof this.preorders[type] !=='undefined'){
								if(type=='collection' && typeof this.preorders[type][productId] !=='undefined'){
									res=this.preorders[type][productId];
								} else {
									res=this.preorders[type];
								}
							}
							return res;
						},
						has:function(type,productId){
							productId=productId || 0;
							return this.get(type, productId) !==undefined;
						},
						remove:function(type,productId){
							productId=productId || 0;
							if(this.has(type,productId)){
								if(productId && type=='collection'){
									this.preorders[type][productId]=undefined;
								} else {
									this.preorders[type]=undefined;
								}
							}
						}
					}
				})();

				window.boosterProduct={};
				if(app.getPageType()=='product' && !Settings.hasCustom('manualStart')){
					PreordersFactory.add('product', new prodPreOrder(BoosterPoParams.product));
				}
				if(app.getPageType()=='cart'){
					let preorder=new CartPage(BoosterPoParams);
				}
				boosterProduct.run=function(product, params){
					params=params || {};
					params.type=typeof params.type==='undefined' ? 'product' :params.type;
					if(params.type=='quickView'){
						PreordersFactory.add('quickView', new QvPo(product,params));
					} else if(params.type=='collection'){
						PreordersFactory.add('collection', new CollectionPreorder(product,params));
					} else {
						PreordersFactory.add('product', new prodPreOrder(product,params));
					}
					return this;
				};
				boosterProduct.reviseVariant=function(vid){
					let preorder;
					if(PreordersFactory.has('product')){
						preorder=PreordersFactory.get('product');
					} else if(PreordersFactory.has('quickView')){
						preorder=PreordersFactory.get('quickView');
					}
					if(preorder){
						vid=vid || 0;
						preorder.reviseVariant(false,vid);
					}
				};
				boosterProduct.quickView=function(product){
					this.flush();
					this.run(product, {type:'quickView'});
					return this;
				};
				boosterProduct.flush=function(){
					if(PreordersFactory.has('quickView')){
						let preorder=PreordersFactory.get('quickView');
						preorder.destroyPreOrderBtn();
						PreordersFactory.remove('quickView');
					}
					return this;
				};
				boosterProduct.isAvailable=function(){
					let isAvailable=null;
					try { isAvailable=PreordersFactory.get('product').isVariantAvailable(); }catch(e){}
					return isAvailable;
				};
		};

		app.init($);

})
}(window, document));
